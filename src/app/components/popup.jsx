"use cient";
import React, { useState, useEffect } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>
          Désolé, j'ai pas eu le temps de faire plus, j'ai bossé dessus samedi
          seulement
        </p>
        <button onClick={handleClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Popup;
