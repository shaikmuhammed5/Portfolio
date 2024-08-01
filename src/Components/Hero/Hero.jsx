import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-container" id="hero">
      <div className="hero-content">
        <h2>Im Shaik Muhammed</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore
          animi nam voluptate cum maiores soluta repellendus esse doloribus.
          Odio quia a quam eos autem accusamus repellendus, officia itaque iste
          labore odit quidem vitae veniam.
        </p>
      </div>

      <div className="hero-img">
        <div className="icon">
          <div className="tech-icon">
            <img className="icon-img" src="./Asserts/Bootstrap-logo.png" />
          </div>
          <div className="tech-icon">
            <img className="icon-img" src="./Asserts/html5-logo.png" />
          </div>
          <div className="tech-icon">
            <img className="icon-img" src="./Asserts/css3-logo.png" />
          </div>
        </div>

        <div>
          <img className="main-img" src="./Asserts/Image-2.jpeg" alt="" />
        </div>

        <div className="icon">
          <div className="tech-icon">
            <img className="icon-img" src="./Asserts/java-logo.png" />
          </div>
          <div className="tech-icon">
            <img className="icon-img" src="./Asserts/js-logo.png" />
          </div>
          <div className="tech-icon">
            <img className="icon-img" src="./Asserts/react-logo.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
