'use client'

import React from 'react';
import useLocalStorage from '@/hook/useLocalStorage';
import styles from '@/app/uselocalstorage/uselocalstorage.module.css';

function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('name', '');
  const [age, setAge] = useLocalStorage('age', '');

  const handleNameChange = (e) => setName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Dados no Local Storage</h1>
      <div className={styles.div}>
        <label className={styles.label}>
          Nome:
          <input className={styles.input} type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div className={styles.div}>
        <label className={styles.label}>
          Idade:
          <input className={styles.input} type="number" value={age} onChange={handleAgeChange} />
        </label>
      </div>
      <div className={styles.div}>
        <p className={styles.p}>Nome armazenado: {name}</p>
        <p className={styles.p}>Idade armazenada: {age}</p>
      </div>
    </div>
  );
}

export default LocalStorageDemo;
