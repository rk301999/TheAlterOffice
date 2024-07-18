import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Youtube = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 justify-center items-center py-4">
        <h1 className=" text-3xl md:text-5xl font-semibold font-serif text-white">
          Find us on{" "}
        </h1>
        <img src="youtube.png" alt="" className="size-16" />
      </div>
      <div className="flex justify-center items-center mb-12 ">
        <div className="w-[100%] md:w-[90%] p-2">
          <Carousel responsive={responsive} className="">
        
              <iframe
                src="https://www.youtube.com/embed/sVe0zMZx86A"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                width="300px"
                height="300px"
              />

            
        
              <iframe
                src="https://www.youtube.com/embed/-GnuZZt-FSE"
                
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                width="300px"
                height="300px"
              />
              
            
              <iframe
                src="https://www.youtube.com/embed/eeRMAydw9CI"
                
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                width="300px"
                height="300px"
              />
              
            
              <iframe
                src="https://www.youtube.com/embed/LZ5akNyvECI"
                
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                width="300px"
                height="300px"
              />
              
            
        
              <iframe
                src="https://www.youtube.com/embed/MmKwoWsgAnw"
                
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                width="300px"
                height="300px"
              />
              
            
        
              <iframe
                src="https://www.youtube.com/embed/c_dOPhNOBi0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                width="300px"
                height="300px"
              />
              
            
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
