import star from "../assets/testimonial/star.svg";
import Image from "next/image";

const TestimonialCardCom = ({name, img, college, content}) => {
  return (
    <div className='testimonialCard'>
        <div className='testiStars'>
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
        </div>
        <p className='testiContent'>
            {content}
        </p>
        <div className='testiUserDetail'>
            <Image src={img} alt="" />
            <div className='testiUserName'>
                <h4> {name} </h4>
                <p> {college} </p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCardCom
