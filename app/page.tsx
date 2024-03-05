"use client"
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import img_1 from '/img_1';

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
 

  return ( 
    <>
      
      <Hero/>
      <Camp/>
      <Guide/>
      <Features/>
      <GetApp/>
    </>
  )
}