/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageChange = (direction) => {
    if (direction === "next") {
      setSelectedImage((prev) => (prev + 1) % images.length);
    } else {
      setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleDotClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="pt-2 w-full h-[640px] relative overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={selectedImage}
          className="w-full h-full flex items-center justify-center"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {/* Previous Image Preview */}
          <div className="absolute h-[75%] left-0 w-1/4 overflow-hidden">
            <img
              src={images[(selectedImage - 1 + images.length) % images.length]}
              alt="prev"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          {/* Current Image */}
          <motion.img
            src={images[selectedImage]}
            alt="room"
            className="aspect-video object-cover z-10"
          />
          {/* Next Image Preview */}
          <div className="absolute h-[75%] right-0 w-1/4 overflow-hidden">
            <img
              src={images[(selectedImage + 1) % images.length]}
              alt="next"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-0 bottom-0 flex items-center justify-between w-full px-[200px]">
        <button
          className="text-2xl text-white bg-gray-900 bg-opacity-50 px-5 py-1 rounded-full"
          onClick={() => handleImageChange("prev")}
        >
          {"←"}
        </button>
        <button
          className="text-2xl text-white bg-gray-900 bg-opacity-50 px-5 py-1 rounded-full"
          onClick={() => handleImageChange("next")}
        >
          {"→"}
        </button>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === selectedImage ? "bg-black" : "bg-white"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
