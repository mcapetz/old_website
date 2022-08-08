// import { Nature } from "../assets";
// import LocomotiveScroll from "locomotive-scroll";
// import TypeAnimation from "react-type-animation";
import TextAnimation from "../components/TextAnimation";
import {
  ScrollContainer,
  Animator,
  ScrollPage,
  Sticky,
} from "react-scroll-motion";
import { Link } from "react-router-dom";

// const scroll = new LocomotiveScroll();

const Landing = () => {
  return (
    <div>
      <div className="font-rubik flex justify-left sm:justify-center w-full pt-10 pb-10">
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={Sticky()}>
              <div className="flex flex-col gap-2 pl-10 sm:pl-0 sm:gap-5 w-full sm:w-3/4 max-w-2xl">
                <div className="text-2xl sm:text-5xl">
                  Hi, I'm <TextAnimation />
                </div>
                <p className="text-xl sm:text-3xl">
                  I am a Computer Science student seeking ways to build
                  community & drive positive impact.
                </p>
                {/* <p className="text-xl sm:text-3xl">
                  I value empowerment, authenticity, and drive.
                </p> */}
                <p className="bg-blue2 p-2 rounded-md w-fit text-white italic">
                  I value empowerment, authenticity, and drive.
                </p>
                <div className="flex flex-box gap-1">
                  <p className="text-md sm:text-xl">Scroll through my</p>
                  <Link
                    to="/story"
                    className="text-md sm:text-xl text-main italic underline"
                  >
                    story
                  </Link>
                  <p className="text-md sm:text-xl">.</p>
                </div>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>

        {/* <img className="absolute bottom-0 right-20 -z-10"src={Nature}/> */}
      </div>
    </div>
  );
};

export default Landing;
