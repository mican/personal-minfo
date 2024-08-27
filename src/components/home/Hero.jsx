import Button from "../ui/Button.jsx";
import heroImg from "/src/assets/img/hero-img-1.png";
import heroImgDark from "/src/assets/img/hero-img-2.png";
import { introduce, partners } from "/src/staticData/home/home";
import Image from "astro/assets";
import Marquee from "react-fast-marquee";
import { IoMdPaperPlane } from "react-icons/io";
import IntroduceJob from "./IntroduceJob.jsx";
import TrustedCompany from "./TrustedCompany.jsx";



export default function Hero() {
  return (
    <div
      data-scroll-index="0"
      id="home"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 bg-white dark:bg-nightBlack rounded-2xl hero-section md:p-8 lg:p-10 2xl:p-13">
        <div className="items-center gap-6 hero-content md:flex xl:gap-10">
          <div className="text-content pt-7 lg:pt-8 max-lg:max-w-[30rem]">
            <h1 className="text-[32px] lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold text-black dark:text-white leading-1.27 lg:leading-1.27 xl:leading-1.27 2xl:leading-1.27 mb-4 lg:mb-5">
              {introduce?.heading?.heading1} <br />
              <span className="text-theme">{introduce?.heading?.heading2}</span>
            </h1>
            {introduce?.desc}
            <ul className="flex items-center gap-3 sm:gap-6 mt-4 lg:mt-5">
              {introduce?.jobs?.map((item, i) => (
                <IntroduceJob key={i} {...item} />
              ))}
            </ul>
            <ul className="mt-7 buttons">
              <li data-scroll-nav="8">
                <Button text="HIRE ME" prefix={<IoMdPaperPlane size={18}  />} client:load/>
              </li>
            </ul>            
          </div>
        </div>
      </div>
    </div>            
  )
}
