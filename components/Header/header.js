import styles from '@/components/Header/header.module.css'
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}><Link href="/">Home</Link></li>
                    <li className={styles.li}><Link href="/about">About</Link></li>
                    <li className={styles.li}><Link href="/servico">Serviço</Link></li>
                    <li className={styles.li}><Link href="/contato">Contato</Link></li>
                    <li className={styles.li}><Link href="/toggle">Toggle</Link></li>
                    <li className={styles.li}><Link href="/usecounter">Counter</Link></li>
                    <li className={styles.li}><Link href="/usedocumenttitle">Document Title</Link></li>
                    <li className={styles.li}><Link href="/uselocalstorage">Local Storage</Link></li>

                </ul>
            </nav>
        </header>
    )
}