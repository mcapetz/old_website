import { Link } from "react-router-dom";
import "../input.css";

const NavBar = () => {
  //   const navigate = useNavigate();
  //   const handleClick = () => {
  //     navigate("/list");
  //   }

  return (
    <div className="font-rubik z-10 sticky top-0 pt-10 px-10 sm:px-20">
      <div className="flex flex-row justify-between">
        <div
          className="cursor-pointer  sm:h-20 sm:w-20 h-7 w-7 bg-main hover:rotate-12 duration-300 rounded-md hover:bg-black hover:text-white align-middle text-center sm:pt-5 pt-1 text-sm sm:text-2xl"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          mc.
        </div>
        <div className="flex flex-row px-5 gap-5 sm:gap-10 self-center bg-white rounded-md bg-opacity-80">
          <Link
            to="/story"
            className="hover:italic text-md sm:text-xl opacity-100"
          >
            story.
          </Link>
          <Link to="/projects" className="hover:italic text-md sm:text-xl">
            projects.
          </Link>
          <Link to="/contact" className="hover:italic text-md sm:text-xl">
            contact.
          </Link>
        </div>
      </div>
    </div>
    // <div className="bg-light-purple flow-root items-center">
    //     hello
    //   <div className="pl-10 flex flex-row gap-5 float-left align-middle items-center">
    //     <div className="font-bold">Our Anime List</div>
    //   </div>
    //   <div className="pr-10 pt-4 flex flex-row gap-10 float-right align-middle items-center">
    //   <Link to="/home" className="hover:text-grey">Home</Link>
    //     <Link to="/about" className="hover:text-grey">About</Link>
    //     <Link to="/friends" className="hover:text-grey">Friends</Link>
    //   </div>
    // </div>
  );
};
export default NavBar;
