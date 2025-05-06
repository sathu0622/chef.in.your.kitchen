// import GalleryItem from '../components/GalleryItem';

// const Gallery = () => {
//   const galleryImages = [
//     {
//       src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//       alt: "Restaurant interior",
//       caption: "Our elegant dining room"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//       alt: "Chef preparing food",
//       caption: "Chef Alexandre at work"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//       alt: "Dining table setup",
//       caption: "A beautifully set table"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//       alt: "Dessert presentation",
//       caption: "Our signature desserts"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//       alt: "Pasta dish",
//       caption: "Truffle pasta - guest favorite"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//       alt: "Wine selection",
//       caption: "Our extensive wine cellar"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//       alt: "Bar area",
//       caption: "Craft cocktails at our bar"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//       alt: "Outdoor seating",
//       caption: "Al fresco dining in summer"
//     }
//   ];

//   return (
//     <div className="py-20 bg-[#f1faee]">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-serif font-bold text-[#1d3557] mb-12 text-center">Gallery</h1>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {galleryImages.map((image, index) => (
//             <GalleryItem 
//               key={index}
//               src={image.src}
//               alt={image.alt}
//               caption={image.caption}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


import { motion } from 'framer-motion';
import { FiZoomIn } from 'react-icons/fi';
import { useEffect } from 'react';

const GalleryItem = ({ src, alt, caption }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-white text-lg font-medium">{caption}</p>
          <div className="flex items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
            {/* <FiZoomIn className="text-white mr-2" />
            <span className="text-white/90 text-sm">Click to enlarge</span> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup if needed
      document.body.removeChild(script);
    };
  }, []);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Restaurant interior",
      caption: "Our elegant dining room"
    },
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Chef preparing food",
      caption: "Chef Alexandre at work"
    },
    {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Dining table setup",
      caption: "A beautifully set table"
    },
    {
      src: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Dessert presentation",
      caption: "Our signature desserts"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Pasta dish",
      caption: "Truffle pasta - guest favorite"
    },
    {
      src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Wine selection",
      caption: "Our extensive wine cellar"
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Bar area",
      caption: "Craft cocktails at our bar"
    },
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Outdoor seating",
      caption: "Al fresco dining in summer"
    }
  ];

  return (
    
    <div className="py-24 bg-gradient-to-b from-[#f1faee] to-[#e0ecf3]">

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1d3557] mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual journey through our culinary world
          </p>
        </motion.div>
        <div className="w-full flex justify-center">
      <div
        className="elfsight-app-02574d04-5aa5-405b-92ae-ccbd0f2902f5"
        data-elfsight-app-lazy
      ></div>
    </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GalleryItem 
                src={image.src}
                alt={image.alt}
                caption={image.caption}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Gallery;



// import { useEffect } from "react";

// const InstagramFeed = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://static.elfsight.com/platform/platform.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // Optional cleanup if needed
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="w-full flex justify-center">
//       <div
//         className="elfsight-app-02574d04-5aa5-405b-92ae-ccbd0f2902f5"
//         data-elfsight-app-lazy
//       ></div>
//     </div>
//   );
// };

// export default InstagramFeed;
