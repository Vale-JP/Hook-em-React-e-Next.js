import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Teste de next usando node</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.about}>
          <h2>Sobre o Projeto</h2>
          <p>
            Este é um projeto de teste utilizando Next.js com Node.js. O objetivo é demonstrar como criar uma aplicação web simples com essas tecnologias.
          </p>
        </section>
  
  
        <section className={styles.contact}>
          <h2>Contato</h2>
          <p>Para mais informações, entre em contato pelo e-mail: exemplo@dominio.com</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Aplicação feita em 2024</p>
      </footer>
    </div>
  );
}
