import styles from '@/components/Footer/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <h2>Sobre</h2>
                    <ul>
                        <li><a href="/about">Sobre Nós</a></li>
                        <li><a href="/servico">Serviços</a></li>
                        <li><a href="/contato">Contato</a></li>
                    </ul>
                </div>
                
                <div className={styles.contact}>
                    <h2>Contato</h2>
                    <p>Email: <a href="mailto:contato@exemplo.com">contato@exemplo.com</a></p>
                    <p>Telefone: (11) 98765-4321</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>Todos os direitos reservados &copy; 2024</p>
            </div>
        </footer>
    );
}
