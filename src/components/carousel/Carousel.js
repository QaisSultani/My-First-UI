import fiddleLeaf from '../../images/frame-3.png'
import aloeVera from '../../images/frame-1.png'
import strelitzia from '../../images/frame-2.png'
import ficus from '../../images/frame-4.png'
import CarouselImage from './CarouselImage'

const Carousel = () => {
  return (
    <div className="flex ml-5 my-5 justify-end gap-11 font-roboto text-sm font-normal">
      <CarouselImage image={fiddleLeaf} alt={"fiddle plant"} tag={"Fiddle-leaf fig"} price={"$110.99"} />
      <CarouselImage image={aloeVera} alt={"aloe vera plant"} tag={"Aleo vera"} price={"$110.99"} />
      <CarouselImage image={strelitzia} alt={"strelitzia plant"} tag={"Strelitzia nicolai"} price={"$110.99"} />
      <CarouselImage image={ficus} alt={"ficus plant"} tag={"Ficus microcarpa"} />
    </div>
  )
}
export default Carousel
