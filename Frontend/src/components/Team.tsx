import { CardStack } from "./ui/card-stack"

const Team = () => {
    const cards=[
        {
            id:1,
            name:"Mugesh",
            designation:"CTO ,Co-Founder",
            img:"https://thealteroffice.com/_next/image?url=%2Fimages%2Fteam%2Fmugesh.png&w=1920&q=75",
            content: (
                <p>
                  I engineer <span className="text-green-300">Tech</span> for everyday challenges.
                </p>
              ),
        },
        {
            id:2,
            name:"Surendiran",
            designation:"Development Head, Co-Founder",
            img:"https://thealteroffice.com/_next/image?url=%2Fimages%2Fteam%2Fsuren.png&w=1920&q=75",
            content: (
                <p>
                  Enhancing user <span className="text-green-300">Journeys</span> with elegant design.
                </p>
              ),
        },
        {
            id:3,
            name:"Arjun Ganesan",
            designation:"Product Designer",
            img:"https://thealteroffice.com/_next/image?url=%2Fimages%2Fteam%2Farjun_ganesan.png&w=1920&q=75",
            content: (
                <p>
                  Handcrafting <span className="text-green-300">Experiences</span> with Pencil and Paper.
                </p>
              ),
        },
    
        {
            id:4,
            name:"Joynal",
            designation:"Frontend Developer",
            img:"https://thealteroffice.com/_next/image?url=%2Fimages%2Fteam%2Fjoynal.png&w=1920&q=75",
            content: (
                <p>
                  Introverted<span className="text-green-300"> extrovert</span> with a calm energy burst.
                </p>
              ),
        },
        {
            id:5,
            name:"Thammaiah",
            designation:"Backend Developer",
            img:"https://thealteroffice.com/_next/image?url=%2Fimages%2Fteam%2Fthammaiah.png&w=1920&q=75",
            content: (
                <p>
                  Churning<span className="text-green-300"> code</span> and squashing bugs
                </p>
              ),
        },
        {
            id:6,
            name:"Akshay",
            designation:"Frontend Developer",
            img:"https://thealteroffice.com/_next/image?url=%2Fimages%2Fteam%2Fakshay.png&w=1920&q=75",
            content: (
                <p>
                  Can produce, can't<span className="text-green-300"> Reproduce-Bug</span> Magician
                </p>
              ),
        },
        {
            id:7,
            name:"Harsha",
            designation:"Human Resource Manager",
            img:"https://thealteroffice.com/_next/image?url=%2Fimages%2Fteam%2Fharsha.png&w=1920&q=75",
            content: (
                <p>
                  I love to <span className="text-green-300">recruit</span> all the Time
                </p>
              ),
        },
    ]

  return (
    <div className="Team flex flex-col gap-44 items-center h-[100vh] justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-serif text-white">Meet the <span className="bg-red-600   border rounded-sm  px-2 py-1  border-white">Team</span>🥳 </h1>
      <div>
      <CardStack items={cards}/>
      </div>
    </div>
    
  )
}

export default Team
