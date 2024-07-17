
import React, { createContext, useState, useEffect } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('https://66623db962966e20ef080bf7.mockapi.io/prod/card');
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error("Erro ao buscar cards:", error);
            }
        };

        fetchCards();
    }, []);

    const addCard = async (card) => {
        try {
            const response = await fetch('https://66623db962966e20ef080bf7.mockapi.io/prod/card', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(card),
            });
            const newCard = await response.json();
            setCards((prevCards) => [...prevCards, newCard]);
        } catch (error) {
            console.error("Erro ao adicionar card:", error);
        }
    };

    const editCard = async (updatedCard) => {
        try {
            const response = await fetch(`https://66623db962966e20ef080bf7.mockapi.io/prod/card/${updatedCard.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedCard),
            });
            const data = await response.json();
            setCards((prevCards) =>
                prevCards.map((card) => (card.id === data.id ? data : card))
            );
        } catch (error) {
            console.error("Erro ao editar card:", error);
        }
    };

    const removeCard = async (id) => {
        try {
            await fetch(`https://66623db962966e20ef080bf7.mockapi.io/prod/card/${id}`, {
                method: 'DELETE',
            });
            setCards((prevCards) => prevCards.filter((card) => card.id !== id));
        } catch (error) {
            console.error("Erro ao remover card:", error);
        }
    };

    return (
        <CardContext.Provider value={{ cards, addCard, editCard, removeCard }}>
            {children}
        </CardContext.Provider>
    );
};
