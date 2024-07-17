// src/hooks/useCards.jsx
import { useContext } from 'react';
import { CardContext } from '../context/CardContext';

export const useCards = () => {
    return useContext(CardContext);
};
