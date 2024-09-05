'use client'

import React, { useState } from 'react';
import useDocumentTitle from '@/hook/useDocumentTitle';
import styles from '@/app/usedocumenttitle/usedocumenttitle.module.css'

const Page = () => {
  const [title, setTitle] = useState('Título inicial');

  useDocumentTitle(title);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Atualize o título da página</h1>
      <input className={styles.input}
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Digite o novo título"
      />
    </div>
  );
};

export default Page;
