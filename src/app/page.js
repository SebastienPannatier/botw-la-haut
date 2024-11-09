"use client";
import Image from "next/image";
import { Accueil } from "./components/accueil";
import { Presentation } from "./components/presentation";
import { Personnages } from "./components/personnages";
import Popup from "./components/popup";

export default function Home() {
  return (
    <div>
      <Popup />
      <Accueil />
      <Presentation />
      <Personnages />
    </div>
  );
}
