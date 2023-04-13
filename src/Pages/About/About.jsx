import React, { useEffect, useRef } from 'react';
import "./About.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Stack from '../../Components/Stack/Stack';
import { gsap } from "gsap";

export default function About() {
  //  Animation à l'apparition de la page
  const about = useRef();
  useEffect(() => {
    gsap.fromTo(about.current, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1
    })
  }, [])
  return (
    <section className="about" ref={about}>
      <Navbar/>
      <div className="about-container">
        <h3>Hello</h3>
        <p className="intro">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias veniam ipsam, nobis quisquam obcaecati facere doloribus corrupti dignissimos ad, unde provident optio exercitationem et eius, minima culpa pariatur deserunt soluta repellendus dolorem eaque minus. Quam blanditiis quas consequatur porro iusto, tenetur dolorem exercitationem magni quasi, explicabo delectus perspiciatis quisquam. Debitis repellat, adipisci quidem sed, nostrum enim ut ullam tenetur necessitatibus aliquid voluptatibus illum eius! Ipsa et quis, nobis maxime consequuntur recusandae molestias dicta ad aperiam?</p>
        <br />
        <h3>Here are my tools</h3>
        <Stack/>
      </div>
    </section>
  )
}
