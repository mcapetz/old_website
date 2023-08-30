import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
// import XPCard from "../components/XPCard";

import { CCC, Greenwashing, KaoGPT } from "../assets";
import { OAL } from "../assets";
import { FIN } from "../assets";
// import { Default } from "../assets";
// import { SWE } from "../assets";

const Projects = () => {
  return (
    <div>
      <div className="font-rubik flex justify-left sm:justify-center w-full pt-10 pb-40">
        <div className="flex flex-col gap-5 sm:pl-0 md:pl-20 pl-30 pr-20 w-full sm:w-3/4 max-w-2xl">
          {/* <div className="bg-grey h-300 relative">
                        <div className="justify-between flex flex-row">
                            <p className="text-5xl sticky top-20">projects.</p>
                            <div className="flex flex-col gap-5">
                                <p className="text-xl">Carbon Conscious Cooking</p>
                            </div>
                        </div>
                    </div> */}
          <div className="text-3xl sm:text-5xl">projects.</div>
          <div className="pt-5 sm:pt-10 flex flex-col gap-10 sm:gap-5">
            <ProjectCard
              image={Greenwashing}
              name="Fine-Tuning for Greenwashing Risk Detection"
              description="Created novel approach for greenwashing risk detection using a fine-tuned roBERTa model called ClimateBERT, generated ground truth formulation for greenwashing risk measurement, collaborated with UCLA Anderson School of Management"
              link="https://drive.google.com/file/d/188kGm_bX1uT96vGbdC3eEmWcEIz_wD5V/view?usp=sharing"
            />
            <ProjectCard
              image={KaoGPT}
              name="KaoGPT"
              description="Compared the strengths and limitations of 4 different text generation models (RNN, decoder stack, encoder-decoder, fine-tuned GPT-2) to emulate our professor’s lectures with 3 classmates"
              link="https://github.com/mcapetz/ecec147/blob/main/ECE_C147_Project.pdf"
            />
            <ProjectCard
              image={CCC}
              name="Carbon Conscious Cooking"
              description="Motivate environmental lifestyle changes and green cooking for 3000+ viewers in 45+ countries by ideating, designing, and writing sustainability e-cookbook"
              link="https://github.com/mcapetz/Cookbook"
            />
            {/* <ProjectCard
              image={OAL}
              name="Our Anime List"
              description="Created community-building tools for Anime-watching community in a team of 3 by creating client-server app for collaborative list creation and finding Anime-watching friends in 6 weeks"
              link="https://github.com/hametar0u/CS35L-project"
            />
            <ProjectCard
              image={FIN}
              name="Friend in Need"
              description="Provided community-minded framework with a hackathon team of 5 by designing a web-app that facilitates students borrowing items from their peers at LA Hacks 2022 in 36 hours"
              link="https://devpost.com/software/friend-in-need-67l9od"
            /> */}
          </div>
          <div className="text-3xl sm:text-5xl pt-10">experience.</div>
          <div className="group flex flex-col sm:flex-row gap-1 sm:gap-5 sm:items-center">
            <div className="text-2xl transform sm:-rotate-90 w-fit h-fit">
              tech
            </div>
            <div className="flex flex-col gap-2">
            <ExperienceCard
                type="doubleTech"
                title="Software Engineer Intern"
                company="Microsoft"
                companyURL="https://www.microsoft.com/en-us/?ql=2"
                description1="Developed internal autoresponder that leverages institutional knowledge to provide comprehensive answers to technical questions and identify areas of improvement in documentation"
                description2="Applied machine learning and data science techniques to improve accuracy 2x"
                date="Jun - Sept 2023"
              />
              <ExperienceCard
                type="singleTech"
                title="Machine Learning Researcher"
                company="UCLA Scalable Analytics Institute / Sun Lab"
                companyURL="https://web.cs.ucla.edu/~yzsun/"
                description="Learn Graph Convolutional Neural networks (GCNs) for applications to the power grid"
                date="Jan 2023 - Present"
              />
              <ExperienceCard
                type="doubleTech"
                title="Software Engineer Intern"
                company="ElectricFish"
                companyURL="https://electricfish.co"
                description1="Informed EV charger deployment strategy for 2 utility corporations that serve 4.9 million power customers by developing data-driven equity-based metric with data engineering and machine learning"
                description2="Inspired users to become advocates for the electrification of society by redesigning and redeploying website in React for ~1,800 monthly visitors"
                date="Jun - Sept 2022"
              />
              <ExperienceCard
                type="singleTech"
                title="Web Developer"
                company="Empower Health"
                companyURL="https://empower-health.us/"
                description="Promote equity in healthcare for 300+ users by developing community review platform for social impact startup"
                date="Feb - Oct 2022"
              />
            </div>
          </div>

          <div className="group flex flex-col sm:flex-row gap-1 sm:gap-5 sm:items-center">
            <div className="text-2xl transform sm:-rotate-90 w-fit">
              leadership
            </div>
            <div className="flex flex-col gap-2">
            <ExperienceCard
                type="singleLeader"
                title="External Vice President"
                company="SWE @ UCLA"
                companyURL="http://www.swe.ucla.edu/"
                description="Coordinate with corporate sponsors to host info sessions to empower 200+ engineering students"
                date="May 2023 - Present"
              />
              <ExperienceCard
                type="doubleLeader"
                title="Technical Director"
                company="SWE @ UCLA"
                companyURL="http://www.swe.ucla.edu/"
                description1="Lead team of 17 to organize QWER Hacks 2023, one of the nation's first hackathons for the queer and trans community in tech"
                description2="Mobilize the queer and trans community in tech for ~200 students by leading QWER Hacks hackathon"
                date="May 2022 - 2023"
              />
              <ExperienceCard
                type="singleLeader"
                title="Outreach Officer"
                company="ACM AI"
                companyURL="https://uclaacmai.github.io/"
                description="Inspire students interested in AI and ML by teaching ~30 high schoolers and creating AI-interview podcast"
                date="May 2022 - Present"
              />
            </div>
          </div>

          <div className="text-3xl sm:text-5xl pt-10">recognition.</div>
          <div className="text-xl w-full pr-20">
            <ul className="list-square list-inside text-xs">
            <li className="py-2">
                Rivian Scholarship, Rivian / Society of Women Engineers, UCLA, 2023
              </li>
              <li className="py-2">
              Esther Williams Memorial Endowment Scholarship, Society of Women Engineers, Santa
                Clara Valley, 2023
              </li>
              <li className="py-2">
              SWE Los Angeles Section Scholarship, Society of Women Engineers, Los Angeles, 2023
              </li>
              <li className="py-2">
                Analog Devices Scholarship, Society of Women Engineers, Santa
                Clara Valley, 2022
              </li>
              <li className="py-2">
                Society of Women Engineers, Los Angeles Scholarship, 2022
              </li>
              <li className="py-2">
                Northrop Grumman Scholarship, Society of Women Engineers,
                University of Los Angeles, 2022
              </li>
              <li className="py-2">
                Dean's List Recognition, UCLA Samueli School of Engineering,
                2022
              </li>
              <li className="py-2">
                Dr. Vincent Ho Scholarship in Engineering, UCLA Samueli School
                of Engineering, 2021
              </li>
              <li className="py-2">
                2nd Award, Biological Science and Engineering Category, Synopsys
                Science & Technology Championship, 2021
              </li>
              <li className="py-2">
                5th Award, Senior Biochemistry Molecular Biology Category,
                California Science & Engineering Fair, 2021
              </li>
              <li className="py-2">
                Esther Williams Memorial Endowment Scholarship, Society of Women
                Engineers, Santa Clara Valley, 2021
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
