
import ProjectCard from "./swng";

const Products = () => {
  



  return (
    <div className="text-white flex flex-col gap-36 items-center mb-16" >
      <h1 className=" text-3xl md:text-5xl font-semibold font-serif" id="heading">
        This is what we are <span className="bg-red-600   border rounded-sm  max-sm:leading-[55px] px-2 py-1  border-white">Cookin'</span>🔥 !
      </h1>
      <ProjectCard
        image="https://thealteroffice.com/_next/image?url=%2Fimages%2Fswng_app.png&w=1920&q=75"
        simage="https://thealteroffice.com/_next/image?url=%2Fimages%2Fswng_app_icon.png&w=1920&q=75"
        header="swng"
        desc="It's one in all platform for all the needs of a Sports fan to connect, athlete to shine & a Sports brand to empower"
        fill1="purple"
        fill2="blue"
        fill3="green"
      />

      <ProjectCard
        image="https://thealteroffice.com/_next/image?url=%2Fimages%2Figot_skills_website.png&w=1920&q=75"
        simage="https://thealteroffice.com/_next/image?url=%2Fimages%2Figotskill_app_icon.png&w=1920&q=75"
        header="I GOT SKILLS "
        desc="I GOT SKILLS came from a problem statement that we saw and faced by a Recruiter sharing task to hire & the talent finishing it. I GOT SKILLS will let this process streamlined so the process is not repetitive.."
        fill1="yellow"
        fill2="green"
        fill3="white"
      />
      <ProjectCard
        image="https://thealteroffice.com/_next/image?url=%2Fimages%2Fitw_crm.png&w=1920&q=75"
        simage="https://thealteroffice.com/_next/image?url=%2Fimages%2Fitw_app_icon.png&w=1920&q=75"
        header="ITW CRM"
        desc="A CRM ecosystem for ITW Consulting company, who are pioneers in crafting and executing multi-faceted brand management solutions & celebrity management."
        fill1="yellow"
        fill2="white"
        fill3="white"
      />
      <ProjectCard
        image="https://thealteroffice.com/_next/image?url=%2Fimages%2Falter_app.png&w=1920&q=75"
        simage="https://thealteroffice.com/_next/image?url=%2Fimages%2Falter_app_icon.png&w=1920&q=75"
        header="Alter"
        desc="Alter is a groundbreaking platform where people can have alternate civilization to connect, play & empower. It is being built in Unity Engine with realtime rendering of 3D worlds which are built by the citizens of Alter."
        fill1="yellow"
        fill2="red"
        fill3="red"
      />
      <ProjectCard
        image="https://thealteroffice.com/_next/image?url=%2Fimages%2Fclash_app.png&w=1920&q=75"
        simage="https://thealteroffice.com/_next/image?url=%2Fimages%2Fcricket_clash_app_icon.png&w=1920&q=75"
        header="Cricket Clash"
        desc="Cricket Clash is a Multiplayer Card Strategy game currently in development in Unity Engine and we'll be going Live soon."
        fill1=""
        fill2=""
        fill3=""
      />
    </div>
  );
};
export default Products;
