import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Settings.module.css';
import { CATEGORIES } from '../../constants';
import RadioBox from '../RadioBox/RadioBox';

const Settings = () => {
  const [category, setCategory] = useState(CATEGORIES[0]);
  return (
    <div className={`${styles.settings} frosted`}>
      <h2>Settings</h2>

      <h4>Category</h4>
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
    </div>
  );
};

export default Settings;
