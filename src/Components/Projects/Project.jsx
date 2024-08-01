import Slider from "react-slick/lib/slider";
import { PROJECT } from "../../Utils/Data";
import "./Project.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { useRef } from "react";

const Project = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    Infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickPrev();
  }

  const slideLeft = () => {
    sliderRef.current.slickNext();
  }

  return (
    <section className="project-container" id="project">
      <h5>Project</h5>

      <div className="project-content">

        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>
        
        <Slider ref={sliderRef} {...settings}>
          {PROJECT.map((item) => {
            return (
              <ProjectCard
                key={item.title}
                title={item.title}
                date={item.date}
                responsibilities={item.responsibilities}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
