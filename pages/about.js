import portrait from "public/images/about/portrait.png";
import figma from "public/images/about/icon_figma.png";
import vscode from "public/images/about/icon_vscode.png";
import github from "public/images/about/icon_github.png";
import chrome from "public/images/about/icon_chrome.png";
import cti from "public/images/about/icon_cti.png";
import instagram01 from "public/images/about/instagram_01.jpg";
import instagram02 from "public/images/about/instagram_02.jpg";
import instagram03 from "public/images/about/instagram_03.jpg";
import instagram04 from "public/images/about/instagram_04.jpg";
import { Button, Layout } from "components";
import styles from "styles/about.module.scss";

export const About = () => {
  return (
    <Layout>
      <div className="container">
        <figure className={styles.about}>
          <img src={portrait.src} alt="lulu" />
          <figcaption>
            <h1>Hey, I’m Lulu. Nice to meet you!</h1>
            <p>I am a xxxxxxx with x years of industry experoemce including e-commerce, xxx and xxx. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Button varient="black" href="https://www.linkedin.com/in/jihan-chen-b64850257/" target="_blank">LinkedIn</Button>
          </figcaption>
        </figure>
        <hr className={styles.hr} />
        <section>
          <h3>Software I love to use</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className={styles.software}>
            <div>
              <img src={figma.src} alt="Figma" />
              <h6>Figma</h6>
            </div>
            <div>
              <img src={vscode.src} alt="Figma" />
              <h6>Visual Studio Code</h6>
            </div>
            <div>
              <img src={github.src} alt="Figma" />
              <h6>GitHub</h6>
            </div>
            <div>
              <img src={chrome.src} alt="Figma" />
              <h6>Chrome</h6>
            </div>
          </div>
        </section>
        <hr className={styles.hr} />
        <section className={styles.work}>
          <h3>Work Experience</h3>
          <figure>
            <img src={cti.src} alt="" />
            <figcaption>
              <h6>Company Name</h6>
              <p>Position (2022 Mar - Present)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </figcaption>
          </figure>
          <figure>
            <img src={cti.src} alt="" />
            <figcaption>
              <h6>Company Name</h6>
              <p>Position (2022 Mar - Present)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </figcaption>
          </figure>
          <figure>
            <img src={cti.src} alt="" />
            <figcaption>
              <h6>Company Name</h6>
              <p>Position (2022 Mar - Present)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </figcaption>
          </figure>
        </section>
        <hr className={styles.hr} />
        <section className={styles.like}>
          <h3>What I like to do</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <div className={styles.photo}>
            <div>
              <img src={instagram01.src} alt="Figma" />
            </div>
            <div>
              <img src={instagram02.src} alt="Figma" />
            </div>
            <div>
              <img src={instagram03.src} alt="Figma" />
            </div>
            <div>
              <img src={instagram04.src} alt="Figma" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About;