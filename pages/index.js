export default function Home() {
  return (
    <Layout title="Lulu Chen's Home">
      <div className={styles.hero}>
        <div className={styles.mainImg}></div>
        <div className={`${styles.container} container`}>
          <p>I am a front-end developer, Visual designer and foody from Tainan, Taiwan.</p>
        </div>
      </div>
      <div className="container">
        <h3 className={styles.h3}>Featured Work</h3>
        <PortfolioList data={portfolio} />
        <div className={styles.actions}>
          <Button href="/portfolio">More Portfolio</Button>
        </div>
      </div>
    </Layout>
  )
}
