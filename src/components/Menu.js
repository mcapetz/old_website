import { Github } from "../assets";
import { Linkedin } from "../assets";

const Menu = () => {
  return (
    <div className="font-rubik pl-10 sm:pl-20 pt-20 flex flex-col gap-5 justify-left fixed">
      <img
        className="cursor-pointer h-7 w-7 sm:h-10 sm:w-10 hover:rotate-12 duration-300"
        src={Github}
        onClick={() => window.open("https://github.com/mcapetz")}
        alt="github"
      />
      <img
        className="cursor-pointer h-7 w-7 sm:h-10 sm:w-10 hover:rotate-12 duration-300"
        src={Linkedin}
        onClick={() =>
          window.open("https://www.linkedin.com/in/margaret-capetz/")
        }
        alt="linkedin"
      />
      {/* <Github/>
            <Linkedin/> */}
    </div>
  );
};

export default Menu;
