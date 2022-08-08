const ExperienceCard = (props) => {
  if (props.type === "singleTech") {
    return (
      <div className=" flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 justify-left items-start">
            <p className="flex text-xl sm:text-3xl font-bold">{props.title}</p>
            <a
              href={props.companyURL}
              className=" group-hover:flex text-md sm:text-md sm:text-xl underline text-right"
            >
              {props.company}↗
            </a>
          </div>
          <p className="bg-blue2 p-2 rounded-md w-fit text-white italic">
            {props.description}
          </p>
        </div>
      </div>
    );
  }
  if (props.type === "singleLeader") {
    return (
      <div className=" flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 justify-left items-start">
            <p className="flex text-xl sm:text-3xl font-bold">{props.title}</p>
            <a
              href={props.companyURL}
              className=" group-hover:flex text-md sm:text-md sm:text-xl underline text-right"
            >
              {props.company}↗
            </a>
          </div>
          <p className="bg-main p-2 rounded-md w-fit text-black italic">
            {props.description}
          </p>
        </div>
      </div>
    );
  }
  if (props.type === "doubleTech") {
    return (
      <div className=" flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 justify-left items-start">
            <p className="flex text-xl sm:text-3xl font-bold">{props.title}</p>
            <a
              href={props.companyURL}
              className=" group-hover:flex text-md sm:text-md sm:text-xl underline text-right"
            >
              {props.company}↗
            </a>
          </div>
          <p className="bg-blue2 p-2 rounded-md w-fit text-white italic">
            {props.description1}
          </p>
          <p className="bg-blue2 p-2 rounded-md w-fit text-white italic">
            {props.description2}
          </p>
        </div>
      </div>
    );
  }
};

export default ExperienceCard;
