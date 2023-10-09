import learnMoreArrow from '../../icons/right-arrow.svg'

const LearnMore = () => {
  return (
    <div className="sm:my-14 justify-center flex gap-6 mb:py-5">
      <p>Learn More</p>
      <a href="#">
        <img src={learnMoreArrow} className="h-5 mt-1" alt="learn more" />
      </a>
    </div>
  )
}
export default LearnMore
