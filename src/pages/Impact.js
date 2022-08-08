import {
  ScrollContainer,
  Animator,
  ScrollPage,
  Sticky,
  ZoomIn,
  batch,
  MoveIn,
} from "react-scroll-motion";
import { Moon, Flower, Mushroom, Redwoods } from "../assets";

// const Item = (props) => {
//   return (
//     <div className="group text-center">
//       <p className="text-black font-bold italic">{props.title}</p>
//       <p className="">{props.description}</p>
//     </div>
//   );
// };

// const Divider = (props) => {
//   return (
//     <div className="font-rubik text-sm hidden group-hover:flex flex-row gap-2 items-center">
//       <p>{props.name}</p>
//       <div className="h-100 w-full bg-black"></div>
//     </div>
//   );
// };

const ZoomAnimator = batch(Sticky(), ZoomIn());

const Impact = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={ZoomAnimator}>
          <div className="font-rubik text-2xl text-center font-bold rounded-md px-5 text-blue bg-main">
            first
          </div>
        </Animator>
      </ScrollPage>
      {/* <ScrollPage page={1}>
                <Animator animation={FadeUp()}>
                    Scroll up
                </Animator>
            </ScrollPage> */}
      <ScrollPage page={1}>
        <Animator animation={ZoomAnimator}>
          <div className="font-rubik z-10 text-2xl text-center font-bold rounded-md px-5 text-grey bg-main">
            It started with a love for nature.
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <div className="font-rubik align-center justify-center grid grid-cols-4 gap-10 -z-10">
          <img className="object-cover" src={Moon} alt="Moon" />
          <img className="object-cover" src={Flower} alt="Flower" />
          <img className="object-cover" src={Mushroom} alt="Mushroom" />
          <img className="object-cover" src={Redwoods} alt="Redwoods" />
          {/* <Animator animation={MoveIn(-1000,0)}><img className="object-cover" src={Joshua} /></Animator>
                 <Animator animation={MoveIn(-2000,0)}><img className="object-cover" src={Moon} /></Animator>
                 <Animator animation={MoveIn(1000,0)}><img className="object-cover" src={Flower} /></Animator>
                 <Animator animation={MoveIn(2000,0)}><img className="object-cover" src={Mushroom} /></Animator>
                 <Animator animation={MoveIn(0,-1000)}><img className="object-cover" src={Redwoods} /></Animator> */}
        </div>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={ZoomAnimator}>
          <div className="font-rubik text-2xl text-center font-bold rounded-md px-5 text-purple bg-blue">
            At first, I was a researcher.
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <div className="font-rubik flex flex-col gap-10 align-center justify-center">
          <Animator animation={MoveIn(-1000, 0)}>
            <div className="group text-center">
              <p className="text-black font-bold italic">{"Mahendra Lab"}</p>
              <p className="text-black text-sm font-semibold">
                UCLA // June 2021-
              </p>
              <p className="">
                Learn Mothur bioinformatics software, <br /> review scientific
                literature regarding bioremediation
              </p>
            </div>
          </Animator>
          <Animator animation={MoveIn(1000, 0)}>
            <div className="group text-center">
              <p className="text-black font-bold italic">{"Fendorf Lab"}</p>
              <p className="text-black text-sm font-semibold">
                Stanford // Aug 2020-21
              </p>
              <p className="">
                Assisted PhD candidate in wildfire research <br /> Discovered
                the percentage of exchangeable manganese is 4.6x greater in{" "}
                <br /> burned soils compared to unburned soils immediately and
                one year <br /> after wildfires in the Kincade fire complex
              </p>
            </div>
          </Animator>
          <Animator animation={MoveIn(0, 1000)}>
            <div className="group text-center">
              <p className="text-black text-md font-bold italic">
                {"Independent Research"}
              </p>
              <p className="text-black text-sm font-semibold">
                Los Altos High School // Aug 2020-June 2021
              </p>
              <p className="">
                Developed proposal, experimental cell culture protocols, <br />{" "}
                and research abstract on fungal bioremediation experimentation
              </p>
              <div>
                <a
                  className="text-sm text-main underline cursor-default"
                  onClick={() =>
                    window.open("https://ca-csef.zfairs.com/app/showcase")
                  }
                  href="https://ca-csef.zfairs.com/app/showcase"
                >
                  Learn more ↗
                </a>
              </div>
            </div>
          </Animator>
        </div>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={ZoomAnimator}>
          <div className="font-rubik text-2xl text-center font-bold rounded-md px-5 text-main bg-purple">
            Then I became a climate activist.
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <div className="font-rubik flex flex-col gap-10 align-center justify-center">
          <Animator animation={MoveIn(-1000, 0)}>
            <div className="group text-center">
              <p className="text-black font-bold italic">
                {"Carbon Conscious Cooking"}
              </p>
              <p className="text-black text-sm font-semibold">
                Mountain View // Oct 2021
              </p>
              <p className="">
                Conceived, designed, and wrote e-book with <br /> 3000+ views in
                45+ countries
              </p>
              <div>
                <a
                  className="text-sm text-main underline cursor-default"
                  onClick={() =>
                    window.open("https://github.com/mcapetz/Cookbook")
                  }
                  href="https://github.com/mcapetz/Cookbook"
                >
                  Read me ↗
                </a>
              </div>
              <div>
                <a
                  className="text-sm text-main underline cursor-default"
                  onClick={() =>
                    window.open(
                      "https://www.newyorker.com/news/annals-of-a-warming-planet/theres-nothing-sacred-about-nine-justices-a-livable-planet-on-the-other-hand"
                    )
                  }
                  href="https://www.newyorker.com/news/annals-of-a-warming-planet/theres-nothing-sacred-about-nine-justices-a-livable-planet-on-the-other-hand"
                >
                  Find me in the New Yorker ↗
                </a>
              </div>
            </div>
          </Animator>
          <Animator animation={MoveIn(1000, 0)}>
            <div className="font-rubik group text-center">
              <p className="text-black font-bold italic">
                {"Lobbying, SWE @ UCLA"}
              </p>
              <p className="text-black text-sm font-semibold">
                Los Angeles // Jan-May 2022
              </p>
              <p className="">
                Examined HB 2021: Environmental Justice for All Act and <br />{" "}
                lobbied for the bill with 6 congressional offices
              </p>
              <div>
                <a
                  className="text-sm text-main underline cursor-default"
                  onClick={() =>
                    window.open(
                      "https://www.congress.gov/bill/117th-congress/house-bill/2021"
                    )
                  }
                  href="https://www.congress.gov/bill/117th-congress/house-bill/2021"
                >
                  Read HB 2021 ↗
                </a>
              </div>
            </div>
          </Animator>
          <Animator animation={MoveIn(-2000, 0)}>
            <div className="font-rubik group text-center">
              <p className="text-black text-md font-bold italic">
                {"Green Team"}
              </p>
              <p className="text-black text-sm font-semibold">
                Los Altos // June 2020-21
              </p>
              <p className="">
                Co-authored application to receive the federal 2021 <br /> Green
                Ribbon School Award to promote a more eco-conscious school
              </p>
              <div>
                <a
                  className="text-sm text-main underline cursor-default"
                  onClick={() =>
                    window.open(
                      "https://www.losaltosonline.com/schools/los-altos-high-earns-national-green-ribbon-for-sustainability/article_02a15773-37f6-5683-a195-b68b7572c40b.html"
                    )
                  }
                  href="https://www.losaltosonline.com/schools/los-altos-high-earns-national-green-ribbon-for-sustainability/article_02a15773-37f6-5683-a195-b68b7572c40b.html"
                >
                  Learn more ↗
                </a>
              </div>
            </div>
          </Animator>
          <Animator animation={MoveIn(0, 1000)}>
            <div className="font-rubik group text-center">
              <p className="text-black text-md font-bold italic">
                {"Silicon Valley Bike Coalition"}
              </p>
              <p className="text-black text-sm font-semibold">
                Silicon Valley // June-Sept 2021
              </p>
              <p className="">
                Launched advertisement campaigns using Google Ads to <br />{" "}
                boost visibility by 1000% in one month
              </p>
              <div>
                <a
                  className="text-sm text-main underline cursor-default"
                  onClick={() => window.open("https://bikesiliconvalley.org/")}
                  href="https://bikesiliconvalley.org/"
                >
                  Learn more ↗
                </a>
              </div>
            </div>
          </Animator>
        </div>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={ZoomAnimator}>
          <div className="font-rubik text-2xl text-center font-bold rounded-md px-5 text-blue bg-bermuda">
            Now, I also work in climate tech!
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <div className="font-rubik flex flex-col gap-10 align-center justify-center">
          <Animator animation={MoveIn(-1000, 0)}>
            <div className="group text-center">
              <p className="text-black font-bold italic">{"Electric Fish"}</p>
              <p className="text-black text-sm font-semibold">
                Fremont // June-September 2022
              </p>
              <p className="">
                Build community resilience algorithm using data science and{" "}
                <br /> machine learning with Kedro and Pandas
              </p>
              <div>
                <a
                  className="text-sm text-main underline cursor-default"
                  onClick={() => window.open("https://electricfish.co")}
                  href="https://electricfish.co"
                >
                  Discover more ↗
                </a>
              </div>
            </div>
          </Animator>
          <Animator animation={MoveIn(1000, 0)}>
            <div className="font-rubik group text-center">
              <p className="text-black font-bold italic">
                {"And more to come!"}
              </p>
            </div>
          </Animator>
        </div>
      </ScrollPage>
    </ScrollContainer>
    // <div>
    //     <div className="flex justify-left sm:justify-center w-full pt-10 pb-10">
    //         <div className="flex flex-col gap-2 sm:gap-5 w-3/4 max-w-2xl">
    //             {/* <div className="text-5xl">
    //                 impact.
    //             </div> */}
    //             {/* <div className="flex justify-between gap-10">
    //                 <div className="group text-grey hover:text-black flex flex-col gap-5">
    //                     <h1 className="text-3xl"> environmental. </h1>
    //                     <div className="flex flex-col gap-2 pl-5">
    //                         <Divider name="work"/>
    //                         <Item title="Electric Fish" description="Build community resilience algorithm using data science and machine learning with Kedro and Pandas"/>
    //                         <Item title="Silicon Valley Bike Coalition" description="Launched advertisement campaigns using Google Ads to boost visibility by 1000% in one month"/>
    //                         <div className="mt-5"/>
    //                         <Divider name="initiatives"/>
    //                         <Item title="Carbon Conscious Cooking" description="Conceived, designed, and wrote e-book with 3000+ views in 45+ countries"/>
    //                         <Item title="Lobbying, Society of Women Engineers @ UCLA" description="Examined HB 2021: Environmental Justice for All Act and lobbied for the bill  with 6 congressional offices"/>
    //                         <Item title="Los Altos High School Green Team" description="Co-authored application to receive the federal 2021 Green Ribbon School Award to promote a more eco-conscious school"/>
    //                         <div className="mt-5"/>
    //                         <Divider name="research"/>
    //                         <Item title="Mahendra Lab" description="Learn Mothur bioinformatics software, review scientific literature regarding bioremediation"/>
    //                         <Item title="Fendorf Lab" description="Discovered the percentage of exchangeable manganese is 4.6x greater in burned soils compared to unburned soils immediately and one year after wildfires in the Kincade fire complex"/>
    //                         <Item title="Independent Research" description="Developed proposal, experimental cell culture protocols, and research abstract on fungal bioremediation experimentation"/>
    //                     </div>

    //                 </div>
    //                 <div className="group text-grey hover:text-black flex flex-col gap-5">
    //                     <h1 className="text-3xl"> social. </h1>
    //                     <div className="flex flex-col gap-2">
    //                         <Divider name="work"/>
    //                         <Item title="Empower Health" description="Develop community review web application using React, Node.js for social impact startup to promote equity in healthcare"/>
    //                         <div className="mt-5"/>
    //                         <Divider name="organizations"/>
    //                         <Item title="QWER Hacks" description="Organize QWER Hacks 2023 hackathon to celebrate the queer and trans community in tech"/>
    //                         <Item title="ACM AI @ UCLA" description="Teach high schoolers ML and AI concepts and provide interview-based tech podcast to empower students in the AI field"/>
    //                     </div>

    //                 </div>
    //             </div> */}
    //         </div>
    //     </div>
    // </div>
  );
};

export default Impact;
