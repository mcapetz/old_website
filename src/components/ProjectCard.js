const ProjectCard = (props) => {
  return (
    <div className="font-rubik group transition ease-in-out duration-300 hover:translate-x-10 h-55 flex flex-col sm:flex-row items-center gap-5 sm:gap-10">
      <div className="w-full sm:w-1/2">
        <img
          className="skew-y-6 flex object-fill h-20 sm:h-55 rounded-md"
          src={props.image}
          alt="project"
        />
      </div>
      <div className="sm:hidden group-hover:flex h-max sm:w-1/2 flex-col">
        <div className="italic font-bold">{props.name}</div>
        <div className="text-sm">{props.description}</div>
        <div>
          <a
            className="text-sm underline cursor-default"
            onClick={() => window.open(props.link)}
            href={props.link}
          >
            Learn more ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
