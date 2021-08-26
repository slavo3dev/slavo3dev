import styles from '../styles/Footer.module.css'

export function Footer ()
{
    return (
        <footer className={styles.footer}>
        <a
          href="https://www.nrgnomad.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by "NRG Nomad"
        </a>
      </footer>
    )
}