import React,{useEffect} from "react";
// import gallery from "../images/gallerybg.png";
import gallery from "../images/faq2.jpg";


function Gallery() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const images=[
    'g1.png','g2.png','g3.png','g4.png','g5.png',
    'g6.png','g7.png','g8.png','g9.png','g10.png',
    'p1.png','p2.png','p3.png','p4.png','g5.png',
    'g6.png','g7.png','g8.png','g9.png','g10.png',
    'g1.png','g2.png','g3.png','g4.png','g9.png',
    'p2.png','p3.png','p4.png'
  ]
  return (
    <div id="gallery" className="font-para2">
      <div  className="relative w-full ">
        <img
          src={gallery}
          alt="Background"
          className="w-full h-[600px] object-cover"
        />
        <div className="text-green-600 text-5xl text-center absolute top-1/4 left-1/2 transform -translate-x-1/2 ">
          <h1>Gallery </h1>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  gap-4 p-8">
      {images.map((image, index) => (
        <div key={index} className="flex justify-center items-center border-2 rounded-xl hover:cursor-pointer hover:scale-105 duration-300">
          <img
            src={require(`../images/${image}`)}
            alt={`image-${index + 1}`}
            className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-96 xl:h-96 object-scale-cover border-2 rounded-xl"
          />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Gallery;
