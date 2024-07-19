import React, { useState } from 'react';
import { Banner } from '../../components/Banner';
import { Category } from '../../components/Category';
import { Cards } from '../../components/Cards';
import { useCards } from '../../hooks/useCards';
import { Modal } from '../../components/Modal';
import { VideoModal } from '../../components/VideoModal';
import { Form } from '../../components/Form';
import categoriesData from '../../mocks/categories.json';
import bannerDefault from '/banner.png';
import styles from './Home.module.css';
import { Footer } from '../../components/Footer';

export const Home = () => {
    const { cards, removeCard } = useCards();
    const [selectedCard, setSelectedCard] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    const openEditModal = (card) => {
        setSelectedCard(card);
        setIsEditModalOpen(true);
    };

    const openViewModal = (card) => {
        setSelectedCard(card);
        setIsViewModalOpen(true);
    };

    const closeModal = () => {
        setIsEditModalOpen(false);
        setIsViewModalOpen(false);
    };

    const handleDelete = async (id) => {
        await removeCard(id);

        if (selectedCard && selectedCard.id === id) {
            closeModal();
            setSelectedCard(null);
        }
    };

    const getCategoryColor = (categoryName) => {
        const category = categoriesData.categoriesList.find(cat => cat.name === categoryName);
        return category ? category.color : '#000';
    };

    return (
        <div className={styles.home}>
            {selectedCard ? (
                <Banner
                    src={selectedCard.imageURL}
                    category={selectedCard.category}
                    title={selectedCard.title}
                    description={selectedCard.description}
                    thumbnail={selectedCard.thumbnail}
                    color={getCategoryColor(selectedCard.category)}
                />
            ) : (
                <Banner src={bannerDefault} className={styles.banner}/>
            )}
            {categoriesData.categoriesList.map(category => {
                const filteredCards = cards.filter(card => card.category === category.name);
                if (filteredCards.length === 0) return null;
                return (
                    <div key={category.id} className={styles.cardCategory}>
                        <Category name={category.name} color={category.color} />
                        <div className={styles.cardsContainer}>
                            {filteredCards.map(card => (
                                <Cards
                                    key={card.id}
                                    card={card}
                                    color={category.color}
                                    onEdit={openEditModal}
                                    onView={openViewModal}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
            {isEditModalOpen && selectedCard && (
                <Modal onClose={closeModal}>
                    <Form initialData={selectedCard} onClose={closeModal} variant='modal' />
                </Modal>
            )}
            {isViewModalOpen && selectedCard && (
                <VideoModal videoId={extractVideoId(selectedCard.videoURL)} onClose={closeModal} />
            )}
        </div>
    );
};

// Função para extrair o ID do vídeo do YouTube a partir da URL
const extractVideoId = (videoURL) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = videoURL.match(regExp);
    return (match && match[7].length === 11) ? match[7] : '';
};
