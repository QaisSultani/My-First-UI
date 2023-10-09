import React from 'react'
import landingImage from '../../images/s-landing-image.png'

const FirstLook = () => {
  return (
    <>
      <div className="columns-2 ml-10 flex justify-between">
        <div className='object-contain'>
          <div className="font-belleza xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-3xl xl:mt-20 mt-10 ">
            <h1 className="pb-5">Best house</h1>
            <h1 className="pb-5">plants varieties.</h1>
          </div>
          <div className="xl:py-10 py-5">
            <button className="bg-black px-8 py-2 rounded-full text-white">
              Shop now
            </button>
          </div>
          <div className="font-roboto pb-5 text-xl pl-5 font-medium">
            <h6>Beautiful living greenery for</h6>
            <h6>homes and offices</h6>
          </div>
          <div className='font-roboto text-sm font-light pl-5 py-5 '>
            <p>Wer've been mentioned in the press</p>
          </div>
          <div className="columns-2 justify-evenly xl:py-10 py-5 pl-5 text-gray-500 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
            <h4 className='font-roboto font-black'>Bloomberg</h4>
            <h4 className='font-serif font-bold'>Forbes</h4>
          </div>
        </div>

        <div className="flex object-contain justify-end">
          <img
            src={landingImage}
            className="flex justify-end -mt-20 -z-10"
            alt="Landing"
          />
        </div>
      </div>
    </>
  )
}
export default FirstLook
