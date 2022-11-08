import React from "react";

import ProjectCard from "./ProjectCard";

// Image Import
// Sport See
import SportSee_thumbnail from "../assets/images/site/Thumbnail/SportSee_Thumbnail.png";
// FishEye
import FishEye_thumbnail from "../assets/images/site/Thumbnail/FishEye_Thumbnail.png";
import FishEye_homepage from "../assets/images/site/FishEye/Homepage.png";
import FishEye_homepage_filter from "../assets/images/site/FishEye/Homepage__Filter.png";
import FishEye_photographePage from "../assets/images/site/FishEye/PhotographePage.png";
import FishEye_PhotographePage__Filter from "../assets/images/site/FishEye/PhotographePage__Filter.png";
// FishEye
import Kasa_Thumbnail from "../assets/images/site/Thumbnail/Kasa_Thumbnail.png";
import Kasa_homepage from "../assets/images/site/Kasa/Homepage.png";
import Kasa_logementPage from "../assets/images/site/Kasa/LogementPage.png";
import Kasa_logementPage_noaccordion from "../assets/images/site/Kasa/LogementPage_noaccordion.png";
import Kasa_aProposPage from "../assets/images/site/Kasa/AproposPage.png";
import Kasa_errorPage from "../assets/images/site/Kasa/ErrorPage.png";
// FishEye
import Paladins_thumbnail from "../assets/images/site/Thumbnail/Paladins_Thumbnail.png";
import Paladins_championListPage from "../assets/images/site/Paladins/ChampionListPage.png";
import Paladins_championListPage_filter from "../assets/images/site/Paladins/ChampionListPage_filter.png";
import Paladins_championPage from "../assets/images/site/Paladins/ChampionPage.png";

function ProjectGrid() {
  return (
    <section className="project__grid">
      <ProjectCard
        img={SportSee_thumbnail}
        title="SportSee - Tableau de bord d'analytics"
        langage="JS"
        framework="React"
        library="Recharts"
        option="API"
        items={[
          SportSee_thumbnail
        ]}
        link="https://github.com/T-Fabien/FabienTHIOT_12_06012022"
      />
      <ProjectCard
        img={FishEye_thumbnail}
        title="FishEye - Plateforme de photographes"
        langage="JS"
        items={[
          FishEye_homepage,
          FishEye_homepage_filter,
          FishEye_photographePage,
          FishEye_PhotographePage__Filter
        ]}
        link="https://github.com/T-Fabien/FabienTHIOT_06_19072021_soutenance"
        hebergement="https://t-fabien.github.io/FabienTHIOT_06_19072021_soutenance/public/index.html"
      />
       
      <ProjectCard
        img={Kasa_Thumbnail}
        title="Kasa - Plateforme de publication d'annonces"
        langage="JS"
        framework="React"
        option="React-Router"
        items={[
          Kasa_homepage,
          Kasa_logementPage,
          Kasa_logementPage_noaccordion,
          Kasa_aProposPage,
          Kasa_errorPage
        ]}
        link="https://github.com/T-Fabien/FabienTHIOT_11_15122021"
      />
      <ProjectCard
        img={Paladins_thumbnail}
        title="Paladins - Guide sur les personnages"
        langage="JS"
        items={[
          Paladins_championListPage,
          Paladins_championListPage_filter,
          Paladins_championPage,
        ]}
        link="https://github.com/T-Fabien/FabienTHIOT_06_19072021_soutenance"
      />
    </section>
  );
}

export default ProjectGrid;
