import { Spotlight } from "./ui/Spotlight";

interface ProjectProps{
  image:string;
  simage:string;
  desc:string;
  header:string;
  fill1:string;
  fill2:string;
  fill3:string;
}

const ProjectCard = ({image,simage,desc,header,fill1,fill2,fill3}:ProjectProps) => {
  return (
    <div className="text-slate-500 p-5  shadow-slate-300 rounded-xl italic flex max-sm:flex-col gap-3 justify-between w-full px-8 containershadow h-fit max-h-[650px] relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill={fill1}
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill={fill2}
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill={fill3} />
      </div>
      <div className="left md:w-[50%] flex flex-col gap-3 md:gap-10 justify-center max-sm:items-center ">
        <img src={simage} alt="" className=" size-20 md:size-40"/>
        <h1 className=" text-4xl md:text-6xl font-bold text-white">{header}</h1>
        <h1 className="text-xl md:text-2xl "> {desc}</h1>
      </div>
      <div className="right  md:w-[50%] flex items-center">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ProjectCard;
