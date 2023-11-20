import Image from "next/image";
import Container from "./Container";


type Product = {
      category: string;
      name: string;
      description: string;
      imageDesktop: string;
      imageMobile: string;
};

const ItemCard = ({
      category,
      name,
      description,
      imageDesktop,
      imageMobile,

}: Product) => {

      return (
            <Container Class="bg-transparent py-6 flex flex-col md:flex-row lg:flex-row">

                  <div className="relative flex h-full w-[100%]">
                        <Image
                              className="object-cover hidden md:block hover:opacity-60"
                              src={imageDesktop}
                              alt={name}
                              // fill
                              height={100}
                              width={100}
                              layout="responsive"
                              loading='lazy'

                        />
                        <Image
                              className="object-contain md:hidden hover:opacity-60"
                              src={imageMobile}
                              alt={name}
                              // fill
                              height={100}
                              width={100}
                              layout="responsive"
                              loading='lazy'
                        />
                  </div>
                  <div className="py-10 w-[100%] px-0 md:px-5 lg:px-10 flex flex-col justify-evenly">
                        <h2 className="uppercase text-xs tracking-[5px] pl-0 md:pl-5 lg:pl-10">
                              {category}
                        </h2>
                        <h1 className="font-fraunces px-0 md:px-5 lg:px-10 text-[15px] md:text-xl lg:text-xl">{name}</h1>
                        <p className="font-montserrat px-0 md:px-5 lg:px-10 text-[10px] md:text-sm lg:text-sm">
                              {description}
                        </p>

                  </div>
            </Container>
      );
};

export default ItemCard;