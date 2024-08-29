import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className= {styles.container}>
      <header className= {styles.header}>
        <h1>Teste de next usando node</h1>
      </header>
      <main className= {styles.main}>
        <p>Primeira aplicaçao de next</p>
      </main>
      <footer className= {styles.footer}>
        <p>Aplicação feita em 2024</p>
      </footer>
    </div>
  );
}
