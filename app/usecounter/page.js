'use client'

import React from 'react';
import useCounter from '@/hook/useCounter';
import styles from '@/app/usecounter/counter.module.css'

const Page = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contador: {count}</h1>
      <button className={styles.button} onClick={increment}>Adicionar</button>
      <button className={styles.button} onClick={decrement}>Diminuir</button>
      <button className={`${styles.button} ${styles.resetButton}`} onClick={reset}>Resetar</button>
    </div>
  );
};

export default Page;
