//about me is stylized as noon or midday. 


import React from 'react';

const About = () => {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>About Me</h1>
      <div style={{
        padding: '20px',
        border: '1px solid #ccc', 
        borderRadius: '5px', 
        maxWidth: '800px', 
        margin: '0 auto', 
      }}>
        <p style={{fontSize: '18px'}}>Hi, my name is Logan Hajdukiewicz. I am a junior developer with a passion for weaving my artistic background into 
          innovative and fun web design. I am driven by my love for finding creative and optimal solutions to novel issues in my own life. 
          I also write code for independent video games. Currently I have experience with HTML, CSS, JavaScript, Java, 
          Maven, SpringBoot, JUnit Testing, React, Node.js, Framer Motion, Python, Pygame, Godot, GDScript, 
          OAuth 2.0, RESTful APIs, JSON, SQL, MySQL, Git, GitHub, Bash, Canva, Windows, and Technical Writing. I have completed the Dev10
          Java bootcamp, and I have since been doing project-based learning. 
        </p>
        <p style={{fontSize: '18px'}}>Outside of writing code, I compose music, write film screenplays, bake, crochet, hang out with my cat 
          and play video games. I am an avid reader and I dedicate my time to consistent improvement through constant learning and 
          a dedication to habit formation. 
        </p>
        <p style={{fontSize: '18px'}}>
          Feel free to join me on this journey as I continue to grow, learn, and create in the dynamic <strong>landscape</strong> of technology.
        </p>
      </div>
    </div>
  );
}

export default About;
