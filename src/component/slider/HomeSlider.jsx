import { useEffect, useState } from "react";
import "./HomeSlider.scss";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
export const HomeSlider = () => {
  const [homeSliderData, setHomeSliderData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "http://react-ecommerce.activegroup-eg.com/api/home"
      );
      console.log(res.data.data.home_slider);
      setHomeSliderData(res.data.data.home_slider);
    };
    fetch();
  }, []);
  return (
    <div className="sliderImages">
      <Carousel className="h-100 w-100">
        {homeSliderData.map((item) => (
          <Carousel.Item key={item.item_id}>
            <img src={item.image} alt="" />
            <Carousel.Caption>
              <h3>{item.en_title}</h3>
              <p>{item.en_text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
