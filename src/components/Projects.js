import React from "react";
import data from "../assets/projects_data";

const ProjectCard = (props) => {
  return (
    <div className="projectCard col-md-6 col-lg-4 my-2">
      <figure className="projectCard__wrapper">
        <a href={props.project.deployed_url} target="blank">
          <img
            src={props.project.image}
            alt={props.project.name}
            className="projectCard__image"
          />
          <div className="projectCard__title">
            <a href={props.project.github_url} target="blank">
              <img
                src={props.project.image}
                alt={props.project.name}
                className="projectCard__icon mr-4"
              />
            </a>
            {props.project.name}
          </div>
        </a>
      </figure>
    </div>
  );
};
const Projects = () => {
  const [projects, setProjects] = React.useState(data);

  const handleFilterCategory = (name) => {
    const filtered_project = data.filter((project) =>
      project.category.includes(name)
    );
    setProjects(filtered_project);
  };
  return (
    <div className="container projects">
      <div className="projects__navbar my-2">
        <div onClick={() => setProjects(data)}>All</div>
        <div onClick={() => handleFilterCategory("react-js")}>React</div>
        <div onClick={() => handleFilterCategory("node-js")}>Node</div>
        <div onClick={() => handleFilterCategory("python")}>Python</div>
      </div>
      <div className="row">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
