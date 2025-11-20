import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function About() {
  const aboutRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate main about text
    gsap.fromTo(
      aboutRef.current.querySelectorAll(".tb-about__anime"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    // Animate list items independently
    gsap.fromTo(
      aboutRef.current.querySelectorAll(".tb-about__ulanime"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 0.5,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className="tb-about">
      <div className="container">
        <div className="row">
          <div className="col-12" ref={aboutRef}>
            <h2 className="tb-about__anime">about</h2>
            <p className="tb-about__anime">
              TechBank is a blockchain product company creating decentralized tools like TechBank, Dbank, and Dwallet to simplify digital finance. We empower users with secure, transparent, and
              user-friendly solutions for managing assets in the Web3 world.
            </p>
            <ul className="tb-about__info">
              <li className="tb-about__ulanime">
                4 <span>Products</span>
              </li>
              <li className="tb-about__ulanime">
                2000+ <span>Active Users</span>
              </li>
              <li className="tb-about__ulanime">
                1 m+ <span>Downloads</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
