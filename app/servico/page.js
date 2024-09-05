import styles from '@/app/servico/servico.module.css';

export default function Servico() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Veja mais dos nossos serviços</h1>
            <div className={styles.services}>
                <div className={styles.service}>
                    <h2 className={styles.serviceTitle}>Serviço 1</h2>
                    <p className={styles.serviceDescription}>
                        Descrição detalhada do Serviço 1. Explicamos aqui como este serviço pode ajudar nossos clientes e quais são os principais benefícios.
                    </p>
                </div>
                <div className={styles.service}>
                    <h2 className={styles.serviceTitle}>Serviço 2</h2>
                    <p className={styles.serviceDescription}>
                        Descrição detalhada do Serviço 2. Aqui você encontrará informações sobre o que este serviço oferece e como ele pode ser útil para você.
                    </p>
                </div>
                <div className={styles.service}>
                    <h2 className={styles.serviceTitle}>Serviço 3</h2>
                    <p className={styles.serviceDescription}>
                        Descrição detalhada do Serviço 3. Conheça os detalhes deste serviço e descubra como ele pode beneficiar sua empresa ou projeto.
                    </p>
                </div>
            </div>
            <div className={styles.contactForm}>
            <h2 className={styles.contactTitle}>Entre em contato</h2>
                <form className={styles.form}>
                    <label className={styles.label} htmlFor="name">Nome:</label>
                    <input className={styles.input} type="text" id="name" name="name" required />
                </form>    
            </div>
                  </div>
    ) 
    }
