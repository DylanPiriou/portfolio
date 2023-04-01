import React from 'react';
import "./About.scss";
import MainButton from '../MainButton/MainButton';

export default function About() {
    const dataBtn = {
        data: "DISCOVER MY WORK →"
      }
  return (
    <div className="about-container">
        <div className="about-flex">
            <div className="about-content-box">
                <h2>About me</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora voluptatibus asperiores laudantium fugit deserunt ducimus, magni quibusdam tempore aliquam nemo necessitatibus obcaecati voluptatem odio laborum dolorum aut voluptas deleniti sit modi illum sint ratione velit vero! Maiores facilis excepturi repellat odio nesciunt. Ab, nisi tenetur. Vitae officia at modi obcaecati. Architecto perferendis vitae in officia totam quaerat deserunt laboriosam culpa numquam inventore. Accusantium aut reiciendis dolorum quo! Illum perspiciatis adipisci, accusamus laboriosam inventore commodi ipsum veniam voluptatibus tenetur ea eum iste facilis natus non reprehenderit. Consequatur iusto vitae, facilis in cupiditate blanditiis laboriosam dolore harum, soluta reiciendis neque corporis amet magnam, corrupti nesciunt quae architecto perspiciatis sunt id aut voluptatibus repellat consequuntur. Atque consequatur quidem optio minus labore, nemo hic!</p>
            </div>
            <div className="about-stack-box">
                <h3>Stack</h3>
                <div className="about-stack-content">
                    <div className="about-stack-flex">
                        <div className="about-stack-btn">
                            <MainButton dataBtn={dataBtn}/>
                        </div>
                        <div className="about-stack-grid">
                            <p>HTML5 · CSS3 · SCSS</p>
                            <p>JAVASCRIPT · REACTJS</p>
                            <p>NODEJS · EXPRESS · JWT</p>
                            <p>MONGODB · MONGOOSE </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
