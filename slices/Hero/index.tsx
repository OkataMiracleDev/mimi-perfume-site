import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { bebas, oswald } from "@/app/layout";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#24020fd3] bg-texture text-white overflow-hidden h-dvh flex flex-col md:flex-row justify-center md:justify-normal items-center px-[2rem] md:px-[4rem] text-center md:text-left "
    >

      <div>

        <div className={` ${bebas.className} text-[6rem] md:text-[10rem]`}>
          
          <PrismicRichText field={slice.primary.heading} />

        </div>

        <div className={` ${bebas.className} -mt-[3rem] md:-mt-[5rem] text-[3rem] md:text-[5rem]`}>

          <PrismicRichText field={slice.primary.brand} />

        </div>

        <div className='mt-[1rem] text-2xl md:w-[50%] font-medium'>

          <PrismicRichText field={slice.primary.body} />

        </div>

        <div className="mt-[2rem] text-xl bg-purple-500 md:w-fit px-8 py-2 rounded-2xl font-semibold relative flex items-center justify-center overflow-hidden text-white hover:text-[#24020fd3] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-purple-700 before:duration-500 before:ease-out hover:shadow-purple-700 hover:before:h-56 hover:before:w-56">
          
          <div className="md:relative md:z-10">

            <PrismicNextLink field={slice.primary.cta_btn} />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
