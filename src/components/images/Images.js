import storeImage from '../../images/bottom-img-1.png'
import leafsImage from '../../images/bottom-img-2.png'
const Images = () => {
  return (
    <div className='flex mx-5 justify-center my-5 sm:gap-14 mb:gap-5'>
      <div className='object-contain'>
        <img
          src={storeImage}
          alt="store"
        />
      </div>
      <div className='object-contain'>
        <img
          src={leafsImage}
          alt="leafs"
        />
      </div>
    </div>
  )
}
export default Images
