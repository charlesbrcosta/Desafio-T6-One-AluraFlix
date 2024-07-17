import React, { useState, useEffect, useContext } from 'react';
import { useCards } from '../../hooks/useCards';
import styles from './Form.module.css';
import { FieldText } from '../FieldText';
import { DropdownList } from '../DropdownList';
import { Button } from '../Button';
import categoriesData from '../../mocks/categories.json';

export const Form = ({ initialData, variant, onClose }) => {
    const { addCard, editCard } = useCards();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [videoURL, setVideoURL] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setCategory(initialData.category);
            setImageURL(initialData.imageURL);
            setVideoURL(initialData.videoURL);
            setDescription(initialData.description);
        }
    }, [initialData]);

    const whenChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const whenSubmit = async (event) => {
        event.preventDefault();
        const cardData = {
            id: initialData?.id || Date.now(),
            title,
            category,
            imageURL,
            videoURL,
            description,
        };
        if (initialData) {
            await editCard(cardData);
        } else {
            await addCard(cardData);
        }
        handleClearFields();
        alert('Dados gravados com sucesso!');
        onClose();
    };

    function handleClearFields() {
        setTitle('');
        setCategory('');
        setImageURL('');
        setVideoURL('');
        setDescription('');
    }

    return (
        <div className={`${styles.formContainer} ${styles[variant]}`}>
            <form className={`${styles.form} ${styles[variant]}`} onSubmit={whenSubmit}>

                <div className={`${styles.inputGroup} ${variant === 'modal' ? styles.modalInputGroup : ''}`}>
                    <FieldText
                        label='Título'
                        required={true}
                        placeholder='Título do vídeo'
                        value={title}
                        toChange={setTitle}
                        variant={variant}
                    />
                </div>

                <div className={`${styles.inputGroup} ${variant === 'modal' ? styles.modalInputGroup : ''}`}>
                    <DropdownList
                        label='Categoria'
                        required={true}
                        items={categoriesData.categoriesList}
                        value={category}
                        toChange={setCategory}
                    />
                </div>

                <div className={`${styles.inputGroup} ${variant === 'modal' ? styles.modalInputGroup : ''}`}>
                    <FieldText
                        label='Imagem'
                        required={true}
                        placeholder='URL da imagem'
                        value={imageURL}
                        toChange={setImageURL}
                    />
                </div>
                
                <div className={`${styles.inputGroup} ${variant === 'modal' ? styles.modalInputGroup : ''}`}>
                    <FieldText
                        label='Vídeo'
                        required={true}
                        placeholder='URL do vídeo'
                        value={videoURL}
                        toChange={setVideoURL}
                    />
                </div>

                <div className={`${styles.inputGroup} ${variant === 'modal' ? styles.modalInputGroup : ''}`}>
                    <label name='description'>Descrição</label>
                    <textarea
                        placeholder='Informe uma descrição do vídeo'
                        name='description'
                        value={description}
                        onChange={whenChangeDescription}
                    >
                    </textarea>
                </div>

                <div className={`${styles.button} ${variant === 'modal' ? styles.modalButton : ''}`}>
                    <Button>GUARDAR</Button>
                    <Button type="button" onClick={() => handleClearFields()}>LIMPAR</Button>
                </div>
            </form>
        </div>
    );
};
