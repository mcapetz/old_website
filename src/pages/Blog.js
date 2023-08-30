// import { Link, useNavigate } from "react-router-dom";
import {
  ScrollContainer,
  Animator,
  ScrollPage,
  Sticky,
} from "react-scroll-motion";

const Entry = (props) => {
  return (
    <div className="font-rubik flex flex-col gap-2 skew-y-2">
      <p className="w-fit bg-lightgrey text-lightgrey group-hover:bg-transparent group-hover:text-black font-bold italic">
        {props.title}
      </p>
      <p className="hidden group-hover:flex pl-5">{props.description}</p>
    </div>
  );
};

const AltEntry = (props) => {
  return (
    <div className="font-rubik flex flex-col gap-2 -skew-y-2">
      <p className="w-fit bg-lightgrey text-lightgrey group-hover:bg-transparent group-hover:text-black font-bold italic">
        {props.title}
      </p>
      <p className="hidden group-hover:flex pl-5">{props.description}</p>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <div className="font-rubik flex justify-left sm:justify-center w-full pt-10 pb-40">
        <div className="flex flex-col gap-5 sm:pl-0 md:pl-20 pl-30 pr-20 w-full sm:w-3/4 max-w-2xl">
          {/* <ScrollContainer> */}
          {/* <ScrollPage page={0}> */}
          {/* <Animator animation={Sticky()}> */}
          <div className="pl-10 sm:pl-0 flex flex-col gap-2 sm:gap-5 w-full sm:w-3/4 max-w-2xl">
            <div className="text-2xl sm:text-5xl">blog.</div>
            <div className="pt-10 group grid grid-cols-1 sm:grid-cols-2 gap-10 justify-left">
              <Entry
                title="bob dylan concert"
                description="summer 2022 // 'I go right to the edge, I go right to the end
                    I go right where all things lost are made good again
                     // I sing the songs of experience like William Blake
                    I have no apologies to make'"
              ></Entry>
              <AltEntry
                title="from jan 2020, sfmoma"
                description="'nature is not only beautiful or nostalgic', ritcher once remarked, but also 'always against us, because it knows no meaning, no pity, no sympathy, because it knows nothing and is absolutely mindless: the total antithesis of ourselves, absolutely inhuman'"
              ></AltEntry>
              <Entry
                title="pareto principle"
                description="roughly 80% of consequences come from 20% of causes"
              ></Entry>
              <Entry
                title="seattle"
                description="is so beautiful in the summertime"
              ></Entry>
              <AltEntry
                title="Not much to see here yet"
                description="More coming soon"
              ></AltEntry>
            </div>
          </div>
        </div>
        {/* </Animator> */}
        {/* </ScrollPage> */}
        {/* </ScrollContainer> */}
      </div>
    </div>
  );
};

export default Blog;
