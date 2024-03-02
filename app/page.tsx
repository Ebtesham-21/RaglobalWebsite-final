
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

import Image from "next/image";


export default function Home() {
  return ( 
    <>
      <section className="relative flex h-[calc(100vh-70px)] w-screen flex-col justify-center items-center">
        <div className="absolute w-full h-full">
          <Image className="w-full h-full object-cover object-center" sizes="100vw" fill alt="Image" src={`/img-1.png`}/>
          <div className="absolute bottom-8 left-10 py-3 px-6 bg-[#0000007c] rounded-lg">

          </div>

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