import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='padding-container max-container w-full pd-24 '>
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50  '>
          We are here for you.
        </p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guide you to easy path</h2>\
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam deleniti nihil a praesentium, nemo non eos dignissimos architecto aspernatur molestiae iure tempore ut totam odio eveniet quam odit id aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam praesentium maxime magnam saepe beatae itaque. Voluptas inventore ab eaque tempore exercitationem autem illum ipsam odio eius reiciendis, rem doloribus?</p>

        </div>
      </div>
      <div className='flexCenter max-container relative w-full'>
        <Image
        src="/img_1.png"
        alt="boat"
        width={1440}
        height={580}
        className='w-full object-cover object-center 2xl:rounded-5xl'
        />

        
      


        </div>

    

    </section>
  )
}

export default Guide
