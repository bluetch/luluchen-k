import { Button, Layout } from "components";
import { useState, useEffect } from "react";
import styles from "styles/visual.module.scss";

export const Visual = () =>{
  const [visual, setVisual] = useState([]);

  const fetcher = async () => {
    const res = await fetch("/api/visual");
    const data = await res.json();
    setVisual(data);
  }

  useEffect(() => {
    fetcher();
  }, []);

  return(
    <Layout>
      <div className="container">
      <div className={styles.hero}>
          <h1>Visual Portfolio</h1>
          <p>Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.</p>
        </div>
        <div className={styles.grid}>
          {visual.map((vis)=>{
            return(
              <figure key={vis.name}>
                <img src={vis.img} alt={vis.name} />
                <figcaption>
                  <h3>{vis.name}</h3>
                  <p>{vis.desc}</p>
                  <Button varient="black">View More</Button>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Visual;