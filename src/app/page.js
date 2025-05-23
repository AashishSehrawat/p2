'use client'

import Link from "next/link";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mainImage from "../assets/mainSideImage.webp";
import check from "../assets/check.svg";
import boostImg from "../assets/boostImg.webp";
import ai from "../assets/serviceSvg/aiSupport.webp";
import person from "../assets/testimonial/4.png";

import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { TestimonialNextArrows, TestimonialPrevArrows } from "@/components/TestimonialArrows";
import TestimonialCardCom from "@/components/TestimonialCardCom";

export default function Home() {
  // Service data section
  const serviceData = [
    {
      heading: "Smart Career Start",
      img: ai,
      content:
        "AI-driven assessments to unlock the best career paths for students.",
    },
    {
      heading: "Future Fit",
      img: ai,
      content:
        "Personalized career roadmaps based on personality, skills, and market trends.",
    },
    {
      heading: "Mentor Magic",
      img: ai,
      content:
        "Real insights from top college alumni for informed career decisions.",
    },
    {
      heading: "Pathfinder Pro",
      img: ai,
      content:
        "Science-backed guidance to match students with their ideal careers.",
    },

    {
      heading: "Trend Track",
      img: ai,
      content:
        "Career advice aligned with emerging job markets and future opportunities.",
    },
    {
      heading: "Unlock Potential",
      img: ai,
      content:
        "Discover hidden strengths and ideal career fits with AI-powered analysis.",
    },
  ];

  // testimonial data
  const testimonialData = [
    {
      name: "Nittin",
      img: person,
      college: "IIT Delhi",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus culpa dolorum eius ut? Id vel odit dolorem, quo aut voluptas beatae nostrum nemo! Veniam similique corrupti dolores nobis magnam iste sequi tempora ex aperiam labore.",
    },
    {
      name: "ASH",
      img: person,
      college: "IIT Delhi",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus culpa dolorum eius ut? Id vel odit dolorem, quo aut voluptas beatae nostrum nemo! Veniam similique corrupti dolores nobis magnam iste sequi tempora ex aperiam labore.",
    },
    {
      name: "ankitn",
      img: person,
      college: "IIT Delhi",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus culpa dolorum eius ut? Id vel odit dolorem, quo aut voluptas beatae nostrum nemo! Veniam similique corrupti dolores nobis magnam iste sequi tempora ex aperiam labore.",
    },
  ];

  // setting for react slider
  const settingsTest = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <TestimonialNextArrows />,
    prevArrow: <TestimonialPrevArrows />,
  };

  return (
    <div>
      {/* main section */}
      <div className="bg-blue-50 px-26 py-10 w-full">
        <div className="flex w-full gap-20">
          <div className="w-1/2 flex items-center">
            <div className="flex flex-col gap-8">
              <h1 className="text-6xl">Guiding Future, Building Careers</h1>
              <p className="text-xl">
                We empower students to discover their true potential and make
                confident career decisions. Join us to explore the right path
                with expert counseling and mentorship.
              </p>
              <Link href="/signUp" className="w-fit">
                <Button className="bg-[var(--blue)] text-[1.05rem] w-44 transition duration-300 cursor-pointer">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <Image src={mainImage} alt="Carrer" />
          </div>
        </div>
      </div>

      {/* boost section */}
      <div className="px-26 py-10 w-full">
        <div className="container">
          <div className="flex gap-20 w-full">
            <div className="w-1/2">
              <Image src={boostImg} alt="" />
            </div>
            <div className="w-1/2 flex items-center">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl">Boost College Getting</h2>
                <div>
                  <div className="flex gap-2">
                    <Image src={check} alt="check mark" width={20} />
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Porro, ea facere nulla dignissimos ab eaque!
                    </span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Image src={check} alt="check mark" width={20} />
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Porro, ea facere nulla dignissimos ab eaque!
                    </span>
                  </div>
                </div>
                <Link href="/signUp" className="w-fit">
                  <Button className="bg-[var(--blue)] text-[1.05rem] w-44 transition duration-300 cursor-pointer">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service secion */}
      <div className="bg-blue-50 px-26 py-10 w-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl text-center">Services We Provide</h2>
          <div className="flex flex-wrap w-full">
            {serviceData.map((item, index) => (
              <ServiceCard
                key={index}
                heading={item.heading}
                content={item.content}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>

      {/* testimonial section */}
      <div className="testimonialSection">
        <div className="container">
          <h2>Discover What Our Students Speak</h2>
          <div>
            <Slider {...settingsTest}>
              {testimonialData.map((item, index) => (
                <TestimonialCardCom
                  key={index}
                  name={item.name}
                  img={item.img}
                  college={item.college}
                  content={item.content}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>

    </div>
  );
}
