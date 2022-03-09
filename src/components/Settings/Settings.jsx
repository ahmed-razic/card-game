import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Settings.module.css';
import { CATEGORIES, PACE, INITIAL_CARDS_COUNT } from '../../constants';
import RadioBox from '../RadioBox';
import Counter from '../Counter';

const Settings = ({ startGame }) => {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [pace, setPace] = useState(PACE[0]);
  const [cardsCount, setCardCount] = useState(INITIAL_CARDS_COUNT);

  const onStartGameClick = () => {
    startGame({ category, pace, cardsCount });
  };
  return (
    <div className={`${styles.settings} frosted`}>
      <h2>Settings</h2>

      <h4>Category:</h4>
      <div className={`${styles.setting}`}>
        {CATEGORIES.map((item) => (
          <RadioBox
            key={item}
            name={item}
            selectedItem={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        ))}
      </div>

      <h4>Amount of cards:</h4>
      <div className={`${styles.setting}`}>
        <Counter cardsCount={cardsCount} onClick={setCardCount} />
      </div>

      <h4>Pace:</h4>
      <div className={`${styles.setting}`}>
        {PACE.map((item) => (
          <RadioBox
            key={item}
            name={item}
            selectedItem={pace}
            onChange={(e) => setPace(e.target.value)}
          />
        ))}
      </div>

      <button className={`${styles.button} frosted`} onClick={onStartGameClick}>
        Start
      </button>
    </div>
  );
};

export default Settings;
