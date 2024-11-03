// VideoGallery.jsx

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import './VideoGallery.css'; // Optional CSS for additional styling

import React, { useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';

const projects = [
  {
      "number": 1,
      "title": "Gestion des Réservations de Salles de Réunion",
      "developer": "Abderrazak kawtar",
      "videoUrl": "/videos/video1.mp4",
      "gitHubUrl": "https://github.com/kawtarabderrazak/projet-controle.git"
  },
  {
      "number": 2,
      "title": "Système de Gestion des Projets",
      "developer": "ABOUSSALIM OUSSAMA",
      "videoUrl": "/videos/video2.mp4",
      "gitHubUrl": "https://github.com/ABOUSSALIM/ControleGSP.git"
  },
  {
      "number": 3,
      "title": "Catalogue de produits et gestion des commandes",
      "developer": "aheddach chaymae",
      "videoUrl": "/videos/video3.mp4",
      "gitHubUrl": "https://github.com/Aheddach/projet_controle"
  },
  {
      "number": 4,
      "title": "Application de Gestion des Livres et Auteurs",
      "developer": "Ahrardi Wiam",
      "videoUrl": "/videos/video4.mp4",
      "gitHubUrl": "https://github.com/AhrardiWiam/Projet_GestionDesBibliotheques"
  },
  {
      "number": 5,
      "title": "Système de Gestion des Étudiants et des Cours",
      "developer": "Ait Himmi Aya",
      "videoUrl": "/videos/video5.mp4",
      "gitHubUrl": "https://github.com/aya-cyber/Controlle_Spring_Mvc.git"
  },
  {
      "number": 6,
      "title": "Système de Gestion des Véhicules et des Conducteurs",
      "developer": "AIT MOH Youness",
      "videoUrl": "/videos/video6.mp4",
      "gitHubUrl": "https://github.com/AIT-MOH-Youness/ControleSpringGestionVC.git"
  },
  {
      "number": 7,
      "title": "Gestion des Employés et des Départements",
      "developer": "ait zaim samira",
      "videoUrl": "/videos/video7.mp4",
      "gitHubUrl": "https://github.com/SAMIRA-AIT-ZAIM/Gestion-des-Employes-et-des-Departements.git"
  },
  {
      "number": 8,
      "title": "Application de Gestion des Factures et des Clients",
      "developer": "Alioui Jaâfar",
      "videoUrl": "/videos/video8.mp4",
      "gitHubUrl": "https://github.com/Jaafarhh/Controle-JEE"
  },
  {
      "number": 9,
      "title": "Système de Gestion des Événements et des Participants",
      "developer": "Azizi hafsa",
      "videoUrl": "/videos/video9.mp4",
      "gitHubUrl": "https://github.com/HafsaAzizi/control.git"
  },
  {
      "number": 10,
      "title": "Système de Gestion des Produits et des Fournisseurs",
      "developer": "Bamhmmed Hafssa",
      "videoUrl": "/videos/video10.mp4",
      "gitHubUrl": "https://github.com/hafssa371/controle"
  },
  {
      "number": 11,
      "title": "Système de Gestion des Articles et des Catégories",
      "developer": "Belhaddad Rayan",
      "videoUrl": "/videos/video11.mp4",
      "gitHubUrl": "https://github.com/RayanBelh/Gestion-articles-Projet-Thymlea.git"
  },
  {
      "number": 12,
      "title": "Système de Gestion des Films et des Réalisateurs",
      "developer": "Achouak Bougrine",
      "videoUrl": "/videos/video12.mp4",
      "gitHubUrl": "https://github.com/AchouakBougrine/Gestion-des-Films-et-des-R-alisateurs.git"
  },
  {
      "number": 13,
      "title": "Gestion des commandes et des clients",
      "developer": "Chaiabi Salma",
      "videoUrl": "/videos/video13.mp4",
      "gitHubUrl": "https://github.com/ChaiabiSalma/Gestion-des-commandes-et-des-clients.git"
  },
  {
      "number": 14,
      "title": "Gestion des Candidatures et des Offres d'Emploi",
      "developer": "EL-AGRI MANAL",
      "videoUrl": "/videos/video14.mp4",
      "gitHubUrl": "https://github.com/Manal-Elagri/Gestion-des-Candidatures-et-des-Offres-d-Emploi.git"
  },
  {
      "number": 15,
      "title": "Systeme de Gestion des Locations et des Biens Immobiliers",
      "developer": "El-kak Basma",
      "videoUrl": "/videos/video15.mp4",
      "gitHubUrl": "https://github.com/Basmaelkak/Control"
  },
  {
      "number": 16,
      "title": "Système de Gestion des Assurances et des Contrats",
      "developer": "Elmaizi ihssane",
      "videoUrl": "/videos/video16.mp4",
      "gitHubUrl": "https://github.com/Ihssanf/insurancef"
  },
  {
      "number": 17,
      "title": "Gestion des restaurants et des menus",
      "developer": "Ennahir hind",
      "videoUrl": "/videos/video17.mp4",
      "gitHubUrl": "https://github.com/HindEnnahir/controle.git"
  },
  {
      "number": 18,
      "title": "Gestion des livraisons et des transporteurs",
      "developer": "Errokbi oumaima",
      "videoUrl": "/videos/video18.mp4",
      "gitHubUrl": "https://github.com/errokbioum/Contr-le-"
  },
  {
      "number": 19,
      "title": "Gestion-des-Locations-de-Voitures-et-des-Clients",
      "developer": "Ilham Ettouil",
      "videoUrl": "/videos/video19.mp4",
      "gitHubUrl": "https://github.com/ilham999-byte/Gestion-des-Locations-de-Voitures-et-des-Clients"
  },
  {
      "number": 20,
      "title": "Gestion-des-Formations-et-Inscriptions",
      "developer": "loubna Fouzi",
      "videoUrl": "/videos/video20.mp4",
      "gitHubUrl": "https://github.com/FouziLoubna/Gestion-des-Formations-et-Inscriptions-controle-"
  },
  {
      "number": 21,
      "title": "Système de Gestion des Hébergements et des Clients",
      "developer": "Grima Fatima zahra",
      "videoUrl": "/videos/video21.mp4",
      "gitHubUrl": "https://github.com/fatimazahraGrima/Syst-me-de-Gestion-des-H-bergements-et-des-Clients"
  },
  {
      "number": 22,
      "title": "Système de gestion de produits alimentaires et de commandes",
      "developer": "Hormatallah aya",
      "videoUrl": "/videos/video22.mp4",
      "gitHubUrl": "https://github.com/Ayahormatallah/controle.git"
  },
  {
      "number": 23,
      "title": "Système de Gestion des Invoices et des Paiements",
      "developer": "Jaid Aya",
      "videoUrl": "/videos/video23.mp4",
      "gitHubUrl": "https://github.com/Ayajaid/Gestion-des-facures/tree/master"
  },
  {
      "number": 24,
      "title": "Système de Gestion des Dons et des Donateurs",
      "developer": "Salma Jalat",
      "videoUrl": "/videos/video24.mp4",
      "gitHubUrl": "https://github.com/salma-lang/Gestion-des-dons_donateurs-"
  },
  {
      "number": 25,
      "title": "Système de Gestion des Ventes et des Produits Électroniques",
      "developer": "Khouribech imane",
      "videoUrl": "/videos/video25.mp4",
      "gitHubUrl": "https://github.com/khouribechimane/Controle-app-GVP.git"
  },
  {
      "number": 26,
      "title": "Système de Gestion des Cours et des Salles de Classe",
      "developer": "Korachi Abdelghafour",
      "videoUrl": "/videos/video26.mp4",
      "gitHubUrl": "https://github.com/abdokorachi3/CONTROLEJAVAEE1"
  },
  {
      "number": 27,
      "title": "Système de Gestion des Commandes de Fournitures et des Fournisseurs",
      "developer": "Badr Korichi",
      "videoUrl": "/videos/video27.mp4",
      "gitHubUrl": "https://github.com/Baadr003/Projet-Controle"
  },
  {
      "number": 28,
      "title": "Système de Gestion des Projets et des Tâches",
      "developer": "Nihal Majjad",
      "videoUrl": "/videos/video28.mp4",
      "gitHubUrl": "https://github.com/nihal149/projetcontrol"
  },
  {
      "number": 29,
      "title": "Gestion des suivie des maladies et des patients",
      "developer": "manariwissal",
      "videoUrl": "/videos/video29.mp4",
      "gitHubUrl": "https://github.com/manarimanari/gestion-des-patients-et-des-maladies-"
  },
  {
      "number": 30,
      "title": "Système de Gestion des Formateurs et des Sessions de Formation",
      "developer": "younes mohidine",
      "videoUrl": "/videos/video30.mp4",
      "gitHubUrl": "https://github.com/mhidine02/Control"
  },
  {
      "number": 31,
      "title": "Système de Gestion des Commandes et des Factures",
      "developer": "Nacri zineb",
      "videoUrl": "/videos/video31.mp4",
      "gitHubUrl": "https://github.com/Zinebncr/Controle-gestiondefactureetdecommande.git"
  },
  {
      "number": 32,
      "title": "Systeme de gestion des inventaires et des fournisseurs",
      "developer": "Okayl kaoutar",
      "videoUrl": "/videos/video32.mp4",
      "gitHubUrl": "https://github.com/kaoutarokayl/produit-fournisseur-approvision.git"
  },
  {
      "number": 33,
      "title": "Système de Gestion des Produits et des Promotions",
      "developer": "Saad Oumaima",
      "videoUrl": "/videos/video33.mp4",
      "gitHubUrl": "https://github.com/oumaimasaad-debug/Controle"
  },
  {
      "number": 34,
      "title": "Système de Gestion des Dépenses et des Budgets",
      "developer": "Salim Wissal",
      "videoUrl": "/videos/video34.mp4",
      "gitHubUrl": "https://github.com/salim-w/applic_control"
  },
  {
      "number": 35,
      "title": "Système de Gestion des Examen et des Résultats",
      "developer": "Wahbi Sanae",
      "videoUrl": "/videos/video35.mp4",
      "gitHubUrl": "https://github.com/wahbisanae/controle/tree/main"
  },
  {
      "number": 36,
      "title": "Système de Gestion des Recrutements et des Postes",
      "developer": "Yousfi Mohamed",
      "videoUrl": "/videos/video36.mp4",
      "gitHubUrl": "https://github.com/MohammedYousfi49/Controle"
  },
  {
      "number": 37,
      "title": "Système de Gestion des Commandes et des Fournisseurs",
      "developer": "Zaggar Driss",
      "videoUrl": "/videos/video37.mp4",
      "gitHubUrl": "https://github.com/Zaggardr/control"
  }
];

const VideoGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRef = useRef(null); // Référence pour l'élément vidéo

  const handleVideoClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentVideo(null);
  };

  // Fonction pour lancer la vidéo en plein écran
  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="container my-5">
      <div className="container">
        <header className="text-center mb-5">
          <h3 className="display-4">Contrôle pratique programmation Web JavaEE </h3>
          <h4 className="text-muted">(Spring Boot, Spring Data, Spring MVC, Thymeleaf)</h4>
          <h4 className="text-muted">ISIC ENSA EL JADIDA</h4>
          <h5 className="text-secondary">Pr. Mohamed LACHGAR</h5>
          <p style={{ color: "red" }}>
            Il est impératif d'utiliser les conceptions fixées dans chaque travail.
          </p>
        </header>
      </div>

      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow border-0 rounded">
              <div 
                className="card-img-top rounded-top video-thumbnail" 
                style={{ cursor: 'pointer', position: 'relative' }}
                onClick={() => handleVideoClick(project.videoUrl)}
              >
                <video width="100%" height="150" controls={false}>
                  <source src={project.videoUrl} type="video/mp4" />
                  Votre navigateur ne supporte pas la balise vidéo.
                </video>
                {/* Optionnel : Ajout d'un overlay pour indiquer qu'il est cliquable */}
                <div className="overlay">
                  <span className="play-button">&#9658;</span>
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title font-weight-bold">{`Projet ${project.number}: ${project.title}`}</h5>
                <p className="card-text text-muted">Développé par : { project.developer.toUpperCase()}</p>
                <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                  Voir sur GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal pour afficher la vidéo */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Vidéo du projet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentVideo && (
            <div className="video-container" style={{ position: 'relative' }}>
              <video
                ref={videoRef}
                width="100%"
                controls
                autoPlay
                style={{ display: 'block' }}
              >
                <source src={currentVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
              {/* Bouton plein écran personnalisé */}
              <Button
                variant="secondary"
                onClick={handleFullScreen}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  opacity: 0.7,
                }}
              >
                Plein Écran
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VideoGallery;
