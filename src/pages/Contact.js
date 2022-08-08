import { Link } from "react-router-dom";
import {
  ScrollContainer,
  Animator,
  ScrollPage,
  Sticky,
} from "react-scroll-motion";

const Contact = () => {
  return (
    <div>
      <div className="font-rubik flex justify-left sm:justify-center w-full pt-10 pb-10">
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={Sticky()}>
              <div className="pl-10 sm:pl-0 flex flex-col gap-2 sm:gap-5 w-full sm:w-3/4 max-w-2xl">
                <div className="text-2xl sm:text-5xl">hello!</div>
                <p className="text-md sm:text-xl">
                  I am Margaret Capetz, a student studying Computer Science at
                  the University of California, Los Angeles. Beyond school, I
                  use my time to learn new tech and work on social impact and
                  sustainability intiatives.
                </p>
                <p className="bg-blue2 p-2 rounded-md w-fit text-white italic">
                  My interests outside of tech including hiking and baking
                  sourdough bread!
                </p>
                <div className="cursor-pointer flex flex-col sm:flex-row justify-between pt-10 gap-1">
                  <a
                    onClick={() => window.open("mailto:pcdcmccc@gmail.com")}
                    className="text-xl sm:text-3xl hover:italic"
                    href="mailto:pcdcmccc@gmail.com"
                  >
                    email.
                  </a>
                  <a
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1QDKMkY29338xssAr5K3KDwTEqeEUCfJm/view?usp=sharing"
                      )
                    }
                    className="cursor-pointer text-xl sm:text-3xl hover:italic"
                    href="https://drive.google.com/file/d/1QDKMkY29338xssAr5K3KDwTEqeEUCfJm/view?usp=sharing"
                  >
                    resume.
                  </a>

                  <Link
                    className="cursor-pointer text-xl sm:text-3xl  hover:italic"
                    to="/blog"
                  >
                    blog.
                  </Link>
                </div>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </div>
  );
};

export default Contact;
