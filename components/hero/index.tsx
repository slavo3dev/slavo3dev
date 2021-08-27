import Link from "next/link";
import { loadImage } from "../../lib/util/loadImage";
import { useEffect } from "react";

export function Hero() {
  useEffect(() => {
    loadImage("wallpaper", null);
    loadImage("pictureImage", "picture");
  }, []);

  return (
    <>
      <div
        id="wallpaper"
        className="wallpaper"
        data-image="images/chicago.jpg"
      ></div>
      <div className="content">
        <aside className="side">
          <figure id="picture" className="picture">
            <div className="picture-shadow"></div>
            <img
              id="pictureImage"
              className="picture-image"
              src="/images/slavo3.jpg"
              srcSet="images/slavo3.jpg 1x,
                       images/slavo3@2x.jpg 2x,
                       images/slavo@3x.jpg 3x"
              alt="Portrait of Slavo_3 Software Web Engineer"
              width="320"
              height="320"
            />
          </figure>
        </aside>
        <main className="about">
          <h1 className="name">Slavo Popovic</h1>
          <p className="job">Software Web Engineer</p>
          <hr className="hr" />
          <div className="description">
            <p>
              I specialize in building online businesses, software
              companies, and web applications.
              <br />
              We believe in a Future where technology is used to help
              YOU to achieve YOUR Dreams!
            </p>
            <hr className="hr" />
            <Link href="https://www.nrgnomad.com">
              <a target="_blank">
                <span className="blog-contact">Blog: NRG Nomad</span>
              </a>
            </Link>
          </div>
          <div className="contact">
            <Link href="mailto:slavo@slavo3.com">
              <a className="button">Contact me</a>
            </Link>
          </div>
          <ul className="social">
            <li>
              <Link href="https://twitter.com/slavo3dev">
                <a target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/slavo3dev">
                <a target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/slavopopovic/">
                <a target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/slavo_3">
                <a target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/watch?v=Y82tn5yAqmI">
                <a target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
              </Link>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}
