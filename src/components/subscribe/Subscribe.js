const Subscribe = () => {
  return (
    <div className="sm:flex justify-center sm:mx-10 sm:my-10 gap-10 mb:my-5 mb:mx-5">
      <div className="font-serif sm:text-4xl mb:text-xl mb:text-center font-medium">
        Stay update with special offers, plant-parenting tips, and more.
      </div>
      <div className="font-roboto text-sm mb:pt-5">
        <div className="flex justify-around border-b-2 border-black">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            className="font-thin outline-none focus:empty:"
          />
          <button className="bg-black px-7 py-1 mb-2 rounded-full text-white font-roboto">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
export default Subscribe
