import VideoPlayer from "./VideoPlayer";

const Whatwedo = () => {
  return (
    <div className="max-sm:mt-56 text-white flex flex-col items-center gap-8 md:gap-28   h-screen pt-2 ">
      <h1 className="text-3xl lg:text-5xl font-semibold font-serif  ">What do we <span className="bg-red-600   border rounded-sm  px-2 py-1  border-white">Do</span> ?</h1>
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="md:max-w-[55%] flex items-center">
          <h1 className=" text-xl md:text-3xl font-xl tracking-wide  text-gray-300 leading-[50px] italic">
            We are currently building our own passion projects 🧑🏼‍💻 while making
            cha-ching💰 with some service-based projects
          </h1>
        </div>
        <div className="   shadow-md shadow-slate-300  overflow-hidden">
        <VideoPlayer
          src="https://alteroffice.s3.ap-south-1.amazonaws.com/the_alter_office_timelapse.mp4"
          type="video/mp4"
          width="500"
          height="500"
        />
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
