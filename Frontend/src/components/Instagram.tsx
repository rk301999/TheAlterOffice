
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Tilt from 'react-parallax-tilt';


 const Instagram=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <div className='flex flex-col gap-16 h-screen'>
            <div className="flex gap-2 justify-center items-center py-4">
          <h1 className="text-3xl md:text-5xl font-semibold font-serif text-white">Find us on </h1>
          <img src="instagram.png" alt="" className="size-16"/>
        </div>
            <div className='flex justify-center items-center mb-12 '>
           <div className='w-[100%] md:w-[90%] p-2'>
           <Carousel responsive={responsive} className=''>
            <Tilt><Postcard img='img1.png' link='https://www.instagram.com/p/C84T0f6P06h/'/></Tilt>
            <Tilt><Postcard img='img2.png' link='https://www.instagram.com/p/C8G2Ux9vuff/'/></Tilt>
            <Tilt><Postcard img='img3.png' link='https://www.instagram.com/p/C71b9FLPREZ/'/></Tilt>
            <Tilt><Postcard img='img4.png' link='https://www.instagram.com/p/C7ytTgtvKxv/'/></Tilt>
            <Tilt><Postcard img='img5.png' link='https://www.instagram.com/p/C7g7J_JPrsb/'/></Tilt>
            <Tilt><Postcard img='img6.png' link='https://www.instagram.com/p/C7ePFtJvq6U/'/></Tilt>
      </Carousel>
            </div> 
        </div>
        </div>
    )
}
export const Postcard = ({img, link}:{img:string,link:string}) => {
  return (
    
        <div className='posts size-[220px] md:size-[250px] lg:size-[300px] '>
            <a href={link}>
                <img src={img} alt=""/>
            </a>

        </div>
    
  )
}





export default Instagram