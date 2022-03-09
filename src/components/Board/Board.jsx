import { useState, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import useGetImages from '../../hooks/useGetImages';
import Loader from '../Loader';
import styles from './Board.module.css';

const Board = ({ gameOptions }) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useGetImages(gameOptions);
  console.log({ images });

  useEffect(() => {
    if (images.length > 0) setIsLoading(false);
  }, [images]);
  return <div>{isLoading && <Loader />}</div>;
};

Board.propTypes = {
  gameOptions: PropTypes.object.isRequired,
};

export default Board;
