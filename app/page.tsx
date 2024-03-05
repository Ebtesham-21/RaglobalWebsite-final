"use client"
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    let int = setInterval(() => {
        setPage(prev => ((prev+1) >= 4 ? 1 : prev+1));
    }, 5000);
    return () => clearInterval(int);
  }, []);

  return ( 
    <>
      <section className="relative flex h-[calc(100vh-70px)] w-screen flex-col justify-center items-center">
        <div className="absolute w-full h-full">
          <Image className="w-full h-full object-cover object-center" sizes="100vw" fill alt="Image" src={`/img_${page}`}/>
          <div className="absolute bottom-8 left-10 py-3 px-6 bg-[#0000007c] rounded-lg">
            <h2 className="text-4xl ">Beautiful LandScape {page}</h2>
            <p className="text-2xl mt-4 text-purple-200">The magic of nature!</p>

          </div>

        </div>
        {/* {left arrow} */}
        <div className="z-10 fixed bottom-1/2 left-4 text-2xl font-semibold">
          <span className="inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none ">%lt;-</span>
        </div>

      </section>
      <Hero/>
      <Camp/>
      <Guide/>
      <Features/>
      <GetApp/>
    </>
  )
}