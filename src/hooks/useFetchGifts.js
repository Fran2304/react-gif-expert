// es js, porque no retorna un jsx (js + html)
// este hook tambien funciona en reactnative
//un hook es basicamente una funcion que regresa algo, en este caso un objeto
// un custome hook puede tener states
// un custom hook recibe params
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useEffect } from "react";

export const useFetchGifts = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
