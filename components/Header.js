import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import logo from "public/images/logo.svg";

const LINKS = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Visual",
    url: "/visual",
  },
  {
    name: "Resume",
    url: "https://docs.google.com/document/d/1-I3rKVlwMX-3BV6-dhjoB0HaEj_01S_anERDJTTpXDU/edit?usp=sharing",
  },
];

export const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.flex}>
          {/* <h1>Lulu Chen</h1> */}
          <Link href="/" className={styles.logo}>
            <img src={logo.src} alt="lulu" />
          </Link>
          <nav>
            {LINKS.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  className={router.asPath === link.url ? styles.linkActive : styles.link}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}