import React from 'react'
import zIndexImg from '../../images/image-desktop-carousel.png'
import leftArrow from '../../icons/left-arrow-light.svg'
import rightArrow from '../../icons/right-arrow-light.svg'

const ZIndexImage = () => {
  return (
    <>
      <div className="flex justify-center object-contain mx-5">
        <img src={zIndexImg} alt="desktop carousel" />
      </div>

      <div className="sm:h-96 content-end grid bg-zinc-200 sm:-mt-64 sm:py-10 mb:py-5 mb:-mt-20 mb:h-36">
        <div className="flex justify-between sm:px-14 mb:mx-5">
          <h4 className='uppercase sm:text-xl mb:text-xs font-normal'>Step 1</h4>
          <p className='font-serif font-medium sm:text-4xl mb:text-base'>We put everything together</p>
          <div className="flex gap-2">
            <a href="#">
              <img src={leftArrow} className="sm:h-12 mt-1 mb:h-5" alt="left arrow" />
            </a>
            <a href="#">
              <img src={rightArrow} className="sm:h-12 mt-1 mb:h-5" alt="right arrow" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default ZIndexImage
