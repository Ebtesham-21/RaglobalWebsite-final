import Image from 'next/image'
import Button from './Button'


const Hero = () => {
  return (
    <section className='  max-container padding-container flex flex-col gap-20 py-10
    pb-32 md:gap-28 lg:py-20 xl:flex-row
    '>
      <div className='hero-map'/>

      {/* LEFT */}
      <div className='relative Z-20 flex flex-1 flex-col xl:w-1/2'>
         
          <h1 className='bold-32 lg:bold-88' >
            Welcome to RA GLOBAL SOLUTIONS

          </h1>
          <p className='regular-16 mt-6 text-black xl:max-w-[520px]'>
            An experienced visa concultancy farm, for all student visa, visit visa across Canada, Usa, Uk, Australia, Schengen, Thailand, Malaysia, Brazil etc.
          </p>
          <div className='my-11 flex flex-wrap gap-5'>
              <div className='flex items-center gap-2'>
                {Array(5).fill(1).map((_, index) => (
                  <Image 
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                  />
                ))}
              </div>
              <p className='bold-16 lg:bold-20 text-blue-70'>200
                <span className='regular-16 lg:regular-20 ml-1 '>Excellent Reviews</span>
                
              </p>
          </div>
          <div className='flex w-full gap-3 sm:flex-row '>
                  <Button type="button" title="Learn More" variant='btn_dark_red'/>
                  <Button type="button" title="How do we work?" variant='btn_white_text'/>
          </div>
      </div>
      
      

    </section>
  )
}

export default Hero
