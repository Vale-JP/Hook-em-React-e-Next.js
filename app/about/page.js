import styles from '@/app/about/about.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sobre Nós</h1>
            <p className={styles.description}>
                Bem-vindo à nossa empresa! Somos dedicados a oferecer soluções inovadoras e de alta qualidade para nossos clientes. Com uma equipe experiente e apaixonada, buscamos sempre superar as expectativas e proporcionar uma experiência única.
            </p>
            <h2 className={styles.missionTitle}>Nossa Missão</h2>
            <p className={styles.mission}>
                Nossa missão é transformar a forma como nossos clientes interagem com a tecnologia, proporcionando ferramentas que impulsionam a eficiência e a inovação. Estamos comprometidos com a excelência e a melhoria contínua em tudo o que fazemos.
            </p>
            <h2 className={styles.contactTitle}>Contato</h2>
            <p className={styles.contact}>
                Se você tiver alguma dúvida ou deseja entrar em contato conosco, sinta-se à vontade para enviar um e-mail para <a href="mailto:contato@empresa.com" className={styles.link}>contato@empresa.com</a>. Estamos aqui para ajudar!
            </p>
        </div>
    );
}
