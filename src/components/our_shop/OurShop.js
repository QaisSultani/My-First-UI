const OurShop = () => {
  return (
    <div className="ml-10 sm:my-20 mb:my-10">
      <p className="sm:mb-5 uppercase sm:text-xl mb:text-base">our shop</p>
      <div className="mb:flex mb:gap-4">
        <div className="pt-5 font-serif sm:text-5xl mb:text-xl">
          <p className="sm:mb-5">Here are the best seller</p>
          <p>from our varieties</p>
        </div>
        <div className="sm:pt-16 mb:pt-8">
          <button className="bg-black px-8 py-1 rounded-full text-white font-roboto">
            See all
          </button>
        </div>
      </div>
    </div>
  )
}
export default OurShop
