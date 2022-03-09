import { useState, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import useGetImages from '../../hooks/useGetImages';
import useGameLogic from '../../hooks/useGameLogic';
import Loader from '../Loader';
import styles from './Board.module.css';
import Card from '../Card';

const Board = ({ gameOptions }) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useGetImages(gameOptions);
  const { cards, onCardClick } = useGameLogic(images);

  useEffect(() => {
    if (images.length > 0) setIsLoading(false);
  }, [images]);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        cards.map((card) => (
          <Card key={card.uniqueId} card={card} onCardClick={onCardClick} />
        ))
      )}
    </div>
  );
};

Board.propTypes = {
  gameOptions: PropTypes.shape({
    pace: PropTypes.string.isRequired,
    cardsCount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default Board;
