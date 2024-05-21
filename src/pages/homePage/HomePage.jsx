import { NavBar } from "../../component/navBar/NavBar";
import { OfferProducts } from "../../component/offerProducts/OfferProducts";
import { HomeSlider } from "../../component/slider/HomeSlider";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div>
      <HomeSlider />
      <OfferProducts />
    </div>
  );
};
