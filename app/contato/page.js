import styles from '@/app/contato/contato.module.css';

export default function Contato() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Entre em Contato Conosco</h1>
            <div className={styles.infoSection}>
                <h2 className={styles.infoTitle}>Informações de Contato</h2>
                <p className={styles.info}>
                    <strong>Endereço:</strong> Rua Exemplo, 123, Cidade, Estado, 00000-000
                </p>
                <p className={styles.info}>
                    <strong>Telefone:</strong> (00) 1234-5678
                </p>
                <p className={styles.info}>
                    <strong>E-mail:</strong> <a href="mailto:contato@empresa.com" className={styles.link}>contato@empresa.com</a>
                </p>
            </div>
            <div className={styles.formSection}>
                <h2 className={styles.formTitle}>Envie uma Mensagem</h2>
                <form className={styles.form}>
                    <label className={styles.label} htmlFor="name">Nome:</label>
                    <input className={styles.input} type="text" id="name" name="name" required />

                    <label className={styles.label} htmlFor="email">E-mail:</label>
                    <input className={styles.input} type="email" id="email" name="email" required />

                    <label className={styles.label} htmlFor="message">Mensagem:</label>
                    <textarea className={styles.textarea} id="message" name="message" rows="4" required></textarea>

                    <button className={styles.button} type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}
