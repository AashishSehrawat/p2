import Image from "next/image";

const ServiceCard = ({heading, content, img}) => {
  return (
    <div className="w-1/3 flex flex-col gap-2 items-center px-8 py-5">
      <div className="w-32">
        <Image src={img} alt="Service svg" />
      </div>
      <div className="text-center">
        <h3 className="text-2xl">{heading}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
