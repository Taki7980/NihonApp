import Image from "next/image";


type Product = {
      category: string;
      name: string;
      description: string;
      imageDesktop: string;
      imageMobile: string;
};

const ItemCardReverce = ({
      category,
      name,
      description,
      imageDesktop,
      imageMobile,

}: Product) => {

      return (
            <div className="bg-transparent w-[90vw] md:w-[70vw] lg:w-[80vw] mx-auto py-6">
                  <div className="flex flex-col md:flex-row lg:flex-row bg-transparent mx-auto">
                        <div className="py-10 w-[100%] px-0 md:px-5 lg:px-10 flex flex-col justify-evenly ">
                              <h2 className="uppercase text-xs tracking-[5px]">
                                    {category}
                              </h2>
                              <h1 className="font-fraunces text-[15px] md:text-xl lg:text-xl">{name}</h1>
                              <p className="font-montserrat text-[10px] md:text-sm lg:text-sm">
                                    {description}
                              </p>

                        </div>
                        <div className="relative flex h-fit w-[100%] rounded-lg">
                              <Image
                                    className="object-cover rounded-lg hidden md:block hover:opacity-60"
                                    src={imageDesktop}
                                    alt={name}
                                    // fill
                                    height={100}
                                    width={100}
                                    layout="responsive"
                                    loading = 'lazy'

                              />
                              <Image
                                    className="object-contain md:hidden rounded-lg hover:opacity-60"
                                    src={imageMobile}
                                    alt={name}
                                    // fill
                                    height={100}
                                    width={100}
                                    layout="responsive"
                                    loading = 'lazy'
                              />
                        </div>
                  </div>
            </div>
      );
};

export default ItemCardReverce;