import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.prototypenext.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by "NRG Nomad"
      </a>
    </footer>
  );
}
