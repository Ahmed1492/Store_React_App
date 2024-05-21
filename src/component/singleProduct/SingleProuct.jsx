import { useParams } from "react-router-dom";
import "./SingleProduct.scss";
import { useEffect, useState } from "react";
import axios from "axios";
export const SingleProuct = () => {
  const id = useParams().id;
  const [product, setProduct] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`http://react-ecommerce.activegroup-eg.com/api/show-product/${id}`)
        .then((res) => setProduct(res.data.data));
    };
    fetch();
  }, []);
  console.log(product.color);
  return (
    <div className="product">
      <div className="containerProduct">
        <div className="container-fluid">
          <div className="row">
            <div className="left  col-xxl-5 col-xl-6 col-lg-12 col-md-12">
              {Object.keys(product).length > 0 && (
                <div className="smallImages">
                  <img
                    onClick={() => setCurrentImage(0)}
                    src={product?.images?.[0]}
                    alt=""
                  />
                  {product.images[1] && (
                    <img
                      onClick={() => setCurrentImage(1)}
                      src={product?.images?.[1]}
                      alt=""
                    />
                  )}
                </div>
              )}
              <div className="mainImage">
                {Object.keys(product).length > 0 && (
                  <img src={product.images[currentImage]} alt="" />
                )}
              </div>
            </div>
            <div className="right col-xxl-7  col-xl-6 col-lg-6 col-md-12">
              <div className="productDescription">
                <div className="leftSideProductDetails">
                  <p>color : </p>
                </div>
                <div className="rightSideProductDetails">
                  <div key={product.item_id} className="colors">
                    {product?.color?.map((color) => (
                      <span style={{ backgroundColor: color.color_id }}></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
