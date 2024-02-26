import Image from "next/image";
import Link from "next/link";

const Hero = () => {

  return (
    <>
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="text-black text-lg xl:text-hero font-bold mb-5 pr-16 ">
                G Tech Mechanical
              </h1>

              <h6 className="text-black xl:text-lg font-medium mb-5 pr-16 ">
                Welcome to G Tech, the leading solar company in Mississauga, Ontario!
              </h6>

              <div className="hidden md:block">
                <p> 
                  We are dedicated to providing innovative and sustainable energy solutions to help you harness the power of the sun. 
                  With our expertise in solar technology and a commitment to customer satisfaction, we are here to guide you towards a greener and more cost-effective future.
                </p>
              </div>
              
              <div className="mt-10">
                <div className="flex justify-left flex-wrap gap-5">
                  <Link
                    href="/contact"
                    className="flex bg-black hover:bg-blackho text-white rounded-md ease-in-out duration-300 px-7.5 py-2.5"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="animate_right md:w-1/2 hidden lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[1920/1440] w-full">
                  <Image
                    className="shadow-solid-l rounded-3xl"
                    src="/images/hero/imghome.jpg"
                    alt="Hero"
                    priority
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
