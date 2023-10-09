const CarouselImage = ({image, alt, tag, price}) => {
  return (
    <div className="object-contain">
      <img src={image} alt={alt} />
      <div className="flex justify-between pt-2">
        <p>{tag}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}
export default CarouselImage
