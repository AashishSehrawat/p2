import left from "../assets/testimonial/left.svg"
import right from "../assets/testimonial/right.svg"

const TestimonialNextArrows = ({onClick}) => {
  return (
    <div className='testiNextArrow' onClick={onClick}>
        <img src={right} alt="" />
    </div>
  )
}

const TestimonialPrevArrows = ({onClick}) => {
    return (
      <div className='testiNextArrow' onClick={onClick}>
          <img src={left} alt="" />
      </div>
    )
  }

export { TestimonialNextArrows, TestimonialPrevArrows }
