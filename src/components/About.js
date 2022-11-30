import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi 👋,
            <br />Je suis Francis.
            Developpeur Front End.
          </h1>
          <p className="mb-8 leading-relaxed">
            Issus du secteur du marketing, j’ai depuis maintenant de nombreux mois, entamé une reconvention dans l’univers du développement web. En autodidacte puis à l’aide d’une formation spécialisée, je me suis donc formé à ce métier dans l’objectif de pouvoir monter en compétence et être apte à intégrer le marché du travail. A travers mes différents projets et rencontres avec des professionnels de ce métier, j’ai donc pu acquérir les outils nécessaires pour débuter ma carrière. Suite à cela, je suis désormais à la recherche d’un poste en tant que développeur front React.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Me contacter !
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Mes projets
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
