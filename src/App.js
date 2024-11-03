// VideoGallery.jsx

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import './VideoGallery.css'; // Optional CSS for additional styling

import React, { useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';

const projects = [
  {
      "number": 1,
      "title": "Interface graphique",
      "developer": "Ait Ouahda Younes",
      "videoUrl": "/videos/video1.mp4",
      "githubUrl": "https://github.com/YounesAO/Android-kotlin-project-TP1"
  },
  {
      "number": 2,
      "title": "Pizza",
      "developer": "Amerga Younes",
      "videoUrl": "/videos/video2.mp4",
      "githubUrl": "https://github.com/Younessamg/pizza_mobile.git"
  },
  {
      "number": 3,
      "title": "TabHost",
      "developer": "Anejjar Ihssane",
      "videoUrl": "/videos/video3.mp4",
      "githubUrl": "https://github.com/Anejjar24/Gestion-taches"
  },
  {
      "number": 4,
      "title": "RecyclerView",
      "developer": "AZIZ Mohammed",
      "videoUrl": "/videos/video4.mp4",
      "githubUrl": "https://github.com/aziz-laravel/Projet4"
  },
  {
      "number": 5,
      "title": "Volley + Image",
      "developer": "Ballouk Mohamed",
      "videoUrl": "/videos/video5.mp4",
      "githubUrl": "https://github.com/Ballouk12/projet5.git"
  },
  {
      "number": 6,
      "title": "Localisation",
      "developer": "BEESAM Adam",
      "videoUrl": "/videos/video6.mp4",
      "githubUrl": "https://github.com/AdamBessam/Controle-Mobile"
  },
  {
      "number": 7,
      "title": "Map + Volley",
      "developer": "BOKTAYA Amine",
      "videoUrl": "/videos/video7.mp4",
      "githubUrl": "https://github.com/BoktayaAmine/dev_mobile_projects/tree/master/Google_Maps_App"
  },
  {
      "number": 8,
      "title": "SQLite",
      "developer": "BOUJNAH AsSia",
      "videoUrl": "/videos/video8.mp4",
      "githubUrl": "https://github.com/assia1905/TPSQLite"
  },
  {
      "number": 9,
      "title": "Fragment",
      "developer": "BOUKHRAIS Meryem",
      "videoUrl": "/videos/video9.mp4",
      "githubUrl": "https://github.com/Bou-Mery/MyNewsApp"
  },
  {
      "number": 10,
      "title": "Navigation Drawer",
      "developer": "Bouleknadel Abderrahmane",
      "videoUrl": "/videos/video10.mp4",
      "githubUrl": "https://github.com/bouleknadel/LibraryApp.git"
  },
  {
      "number": 11,
      "title": "Notifications",
      "developer": "BOUSENSAR Rajaa",
      "videoUrl": "/videos/video11.mp4",
      "githubUrl": "https://github.com/rajaa52/depot1.git"
  },
  {
      "number": 12,
      "title": "Capteurs",
      "developer": "CHAJARI Salma",
      "videoUrl": "/videos/video12.mp4",
      "githubUrl": "https://github.com/Salma-CHAJARI/SensorsProject.git"
  },
  {
      "number": 13,
      "title": "Retrofit",
      "developer": "CHOUAY Walid",
      "videoUrl": "/videos/video13.mp4",
      "githubUrl": "https://github.com/CHOUAY15/EnsaHealth"
  },
  {
      "number": 14,
      "title": "Room",
      "developer": "DAOUDI Mohammed",
      "videoUrl": "/videos/video14.mp4",
      "githubUrl": "https://github.com/Mohammedaoudi/ENSAJ-APP-Management"
  },
  {
      "number": 15,
      "title": "TabLayout + ViewPager/Fragment",
      "developer": "DOUIDY Sifeddine",
      "videoUrl": "/videos/video15.mp4",
      "githubUrl": "https://github.com/SaifeddineDouidy/Beginner-Projects-Mobile-JAVA/tree/master/Projet_Controle"
  },
  {
      "number": 16,
      "title": "LiveData + ViewModel",
      "developer": "DRIHAM Siham",
      "videoUrl": "/videos/video16.mp4",
      "githubUrl": "https://github.com/SihamDriham/TodoList"
  },
  {
      "number": 17,
      "title": "Data Binding",
      "developer": "EL ABIDI Aya",
      "videoUrl": "/videos/video17.mp4",
      "githubUrl": "https://github.com/yaelaya/TP-Visit_Paris.git"
  },
  {
      "number": 18,
      "title": "Firebase",
      "developer": "EL GHARBI ABDELLAH",
      "videoUrl": "/videos/video18.mp4",
      "githubUrl": "https://github.com/abdellah-elgharbi/chat.git"
  },
  {
      "number": 19,
      "title": "Coroutines",
      "developer": "EL MAHJOUBI Soukaina",
      "videoUrl": "/videos/video19.mp4",
      "githubUrl": "https://github.com/elmahjoubisouka/Mini_projet_application_Quiz"
  },
  {
      "number": 20,
      "title": "WorkManager",
      "developer": "EL MASKYNE Mohamed Amine",
      "videoUrl": "/videos/video20.mp4",
      "githubUrl": "https://github.com/MOHAMED-AMINE11/E-MEDEC.git"
  },
  {
      "number": 21,
      "title": "Bluetooth",
      "developer": "ELBAHLOULI Salma",
      "videoUrl": "/videos/video21.mp4",
      "githubUrl": "https://github.com/salma510/Bluetooth"
  },
  {
      "number": 22,
      "title": "Camera API",
      "developer": "ELHALLA Zineb",
      "videoUrl": "/videos/video22.mp4",
      "githubUrl": "https://github.com/ZinebELHALLA/CamApp"
  },
  {
      "number": 23,
      "title": "ExoPlayer",
      "developer": "ELLOUBAB Aya",
      "videoUrl": "/videos/video23.mp4",
      "githubUrl": "https://github.com/aya-elloubab/ExoPlayer-Android-Application"
  },
  {
      "number": 24,
      "title": "Firebase Cloud Messaging",
      "developer": "Fattouhi Radwa",
      "videoUrl": "/videos/video24.mp4",
      "githubUrl": "https://github.com/Radwa-f/FCM_Project.git"
  },
  {
      "number": 25,
      "title": "Jetpack Compose",
      "developer": "Fihri Yasmine",
      "videoUrl": "/videos/video25.mp4",
      "githubUrl": "https://github.com/yasminefhr1/MovieApp_Contole"
  },
  {
      "number": 26,
      "title": "Permissions Runtime",
      "developer": "HARATI Ayoub",
      "videoUrl": "/videos/video26.mp4",
      "githubUrl": "https://github.com/ayoub-aav/TPs-CoursMobile/tree/main/permission"
  },
  {
      "number": 27,
      "title": "Gesture Detection",
      "developer": "Khalil Fatima",
      "videoUrl": "/videos/video27.mp4",
      "githubUrl": "https://github.com/fatikhalil/projet1.git"
  },
  {
      "number": 28,
      "title": "Lottie Animations",
      "developer": "Lahlou Asmae",
      "videoUrl": "/videos/video28.mp4",
      "githubUrl": "https://github.com/lahlouasmae/FlowerShop"
  },
  {
      "number": 29,
      "title": "NFC",
      "developer": "Lahlyal Ahmed Moubarak",
      "videoUrl": "/videos/video29.mp4",
      "githubUrl": "https://github.com/amlmbr/GestionNFC"
  },
  {
      "number": 30,
      "title": "Multithreading",
      "developer": "MAGHNI Manal",
      "videoUrl": "/videos/video30.mp4",
      "githubUrl": "https://github.com/ManalMaghni/Projet/tree/master"
  },
  {
      "number": 31,
      "title": "ConstraintLayout Avancé",
      "developer": "Mandour Ilyass",
      "videoUrl": "/videos/video31.mp4",
      "githubUrl": "https://github.com/ilyassman/EnsajFood/"
  },
  {
      "number": 32,
      "title": "Sauvegarde d'États",
      "developer": "Miskar Amina",
      "videoUrl": "/videos/video32.mp4",
      "githubUrl": "https://github.com/miskaraminaa/NoteAPP_ViewModel.git"
  },
  {
      "number": 33,
      "title": "Navigation Component",
      "developer": "Sabrou hafsa",
      "videoUrl": "/videos/video33.mp4",
      "githubUrl": "https://github.com/Hafsa1sa/CupcakeCorner.git"
  },
  {
      "number": 34,
      "title": "Paging Library",
      "developer": "Sakhr niama",
      "videoUrl": "/videos/video34.mp4",
      "githubUrl": "https://github.com/niama22/Projet34-mobile.git"
  },
  {
      "number": 35,
      "title": "Tests Unitaires avec JUnit",
      "developer": "Taghti Zineb",
      "videoUrl": "/videos/video35.mp4",
      "githubUrl": "https://github.com/zinebtaghti/To_Do_List"
  },
  {
      "number": 36,
      "title": "Tests Instrumentés avec Espresso",
      "developer": "ZAHIR Oumaima",
      "videoUrl": "/videos/video36.mp4",
      "githubUrl": "https://github.com/ZahirOuma/MyLibraryApp/tree/master"
  },
  {
      "number": 37,
      "title": "Services Android",
      "developer": "ZENNOURI Nassima",
      "videoUrl": "/videos/video37.mp4",
      "githubUrl": "https://github.com/NassimaZENNOURI/ProjetMusique"
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
          <h3 className="display-4">Contrôle pratique programmation Web JavaEE (Spring Boot, Spring Data, Spring MVC, Thymeleaf)</h3>
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
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
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
