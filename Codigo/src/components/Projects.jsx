import { useState } from "react";
import CardProject from "./CardProject";
import PageTitle from "./PageTitle";

function Projects() {
  const [projects, setProjects] = useState([
    {
      Id: 1,
      Title: "To Do List",
      Content: "Esse projeto tananaamamamamaamama amamanan ashaha",
      isVisible: false,
      Url: "ToDOList",
    },
    {
      Id: 2,
      Title: "Buscar Endereço",
      Content: "Esse projeto localiza o endereço da pessoa utilizando o CEP",
      isVisible: false,
      Url: "Endereco",
    },
    {
      Id: 3,
      Title: "ManuXV",
      Content:
        "Esse projeto foi desenvolvido para confrimação de presença de uma festa",
      isVisible: false,
      Url: "https://manuxv.netlify.app/",
    },
  ]);

  // Função para alternar o estado de `isVisible` de um projeto específico
  function onDetails(projectId) {
    const updatedProjects = projects.map((project) => {
      if (project.Id === projectId) {
        return { ...project, isVisible: !project.isVisible }; // Alterna o valor
      }
      return project;
    });
    setProjects(updatedProjects);
  }

  return (
    <div id="Projects" className=" w-screen bg-slate-300 px-10">
      <PageTitle title="Projects" />
      <div className="lg:px-32 py-16 ">
        <CardProject projects={projects} onDetails={onDetails} />
      </div>
    </div>
  );
}

export default Projects;
