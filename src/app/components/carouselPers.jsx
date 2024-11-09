"use client";
import React, { useState } from "react";

export const CarouselPers = () => {
  // Définit l'image par défaut à afficher en grand
  const [mainImage, setMainImage] = useState("carousel/grande/russell.png");
  const [mainName, setMainName] = useState("Russell");
  const [mainDescription, setMainDescription] = useState(
    "Russell est un explorateur junior de 8 ans enthousiaste et persévérant, issu de la tribu 54, Sweat Lodge 12. Armé d'un sac à dos rempli de matériel de camping officiel Wilderness Explorer, Russell est prêt pour la nature sauvage ! Il n'y a qu'un hic : il n'a jamais quitté la ville. Toutes ses connaissances en plein air proviennent de livres, et sa seule expérience de camping s'est déroulée dans son propre salon."
  );

  // Tableaux des petites images avec leurs URLs
  const thumbnails = [
    {
      grandeImg: "carousel/grande/carl.png",
      petiteImg: "carousel/petite/karl.png",
      nom: "Carl",
      description:
        "Carl Fredricksen est un veuf âgé de 78 ans, avec un caractère à la fois râleur et tendre. Ancien vendeur de ballons, il rêve de partir en aventure depuis son enfance avec sa femme, Ellie. Après son décès, Carl se retrouve seul, mais toujours déterminé à réaliser leur rêve commun de visiter les chutes du Paradis en Amérique du Sud. Avec son déambulateur équipé de balles de tennis et une maison pleine de souvenirs, il attache des milliers de ballons pour s’envoler vers l’inconnu, découvrant que le voyage est aussi émouvant qu’inattendu.",
    },
    {
      grandeImg: "carousel/grande/russell.png",
      petiteImg: "carousel/petite/russell.png",
      nom: "Russell",
      description:
        "Russell est un explorateur junior de 8 ans enthousiaste et persévérant, issu de la tribu 54, Sweat Lodge 12. Armé d'un sac à dos rempli de matériel de camping officiel Wilderness Explorer, Russell est prêt pour la nature sauvage ! Il n'y a qu'un hic : il n'a jamais quitté la ville. Toutes ses connaissances en plein air proviennent de livres, et sa seule expérience de camping s'est déroulée dans son propre salon.",
    },
    {
      grandeImg: "carousel/grande/dug.png",
      petiteImg: "carousel/petite/dog.png",
      nom: "Doug",
      description:
        "Doug est un chien adorable et maladroit, mais doté d’une technologie spéciale : un collier qui lui permet de parler ! Affecté à une mission de traque, Doug se laisse facilement distraire et développe une admiration immédiate pour Carl et Russell. Bien qu’il soit parfois un peu gaffeur, il est extrêmement loyal et protecteur envers ses nouveaux amis. Avec son amour sincère et son obsession pour les écureuils, Doug ajoute une touche de douceur et de comédie au groupe.",
    },
    {
      grandeImg: "carousel/grande/kevin.png",
      petiteImg: "carousel/petite/oiseau.png",
      nom: "Kevin",
      description:
        "Kevin est un grand oiseau coloré, mystérieux et unique en son genre, découvert par Russell dans la jungle d’Amérique du Sud. Avec ses plumes chatoyantes et son comportement joueur, Kevin est à la fois fascinant et insaisissable. Bien qu’elle soit surnommée “Kevin,” c’est en fait une femelle et une mère dévouée. Elle se lie rapidement d’amitié avec Russell et Carl, devenant un compagnon inattendu dans leur périple. Sa taille imposante, son agilité, et sa capacité à se sortir des situations compliquées font d’elle une alliée précieuse.",
    },
  ];

  // Fonction pour mettre à jour l'image principale lors d'un clic sur une miniature
  const handleThumbnailClick = (thumbnail) => {
    setMainImage(thumbnail.grandeImg);
    setMainName(thumbnail.nom);
    setMainDescription(thumbnail.description);
  };

  return (
    <div id="carousel">
      <div id="left">
        <h1 id="nomPers">{mainName}</h1>
        <a id="descriptionTitrePers">Description</a>
        <p id="descriptionPers">{mainDescription}</p>
      </div>
      <div id="right">
        <div>
          <img id="grandeImg" src={mainImage} />
        </div>
        <div id="choix">
          {thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail.petiteImg}
              alt={thumbnail.nom}
              className="petiteImg"
              onMouseEnter={() => handleThumbnailClick(thumbnail)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
