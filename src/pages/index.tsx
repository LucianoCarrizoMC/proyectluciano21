
//import styles from "@/styles/Home.module.css";

import Link from "next/link";
import { Perfil } from "./componentes/Perfil";



export default function Home() {
  return (
    <>
    <nav>
      {/*
      buscar:UseEffect,UseState
      */}
      <Link href={'About'}>algo </Link>
      <Link href={'Paguina1'}>Paguina1 </Link>
      <Link href={'Paguina2'}>Paguina2 </Link>

    </nav>
    <p>holaa  </p>
    <Perfil nombre="Luciano" apellido="Carrizo" edad={20}/>
    <Perfil nombre="Ricardo" apellido="Valdez" edad={17}/>

    </>
  );
}
