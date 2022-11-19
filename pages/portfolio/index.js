import { Layout, PortfolioList } from "components";
import { useState, useEffect } from "react";
import styles from "styles/portfolio.module.scss";

export const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  const fetcher = async () => {
    const res = await fetch("/api/portfolio");
    const data = await res.json();
    setPortfolio(data);
  }

  useEffect(() => {
    fetcher();
  }, []);
  return (
    <Layout title="portfolio">
      <div className="container">
        <div className={styles.hero}>
          <h1>Front-end Development Portfolio</h1>
          <p>Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.</p>
        </div>
        <PortfolioList data={portfolio} />
      </div>
    </Layout>
  )
}

export default Portfolio;