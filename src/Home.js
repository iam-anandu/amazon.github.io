import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="image__container">
          <div className="image__frame">
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/S/sonata-images-prod/UK_Superhero_Acquisition_FT_April_2021_V2/ec12117a-ee48-453c-9a64-4453031d477a._UR3000,600_.jpeg"
              alt="home"
            />
          </div>
        </div>

        <div className="home__row">
          <Product
            id="45255614"
            title="Think Like a Monk: The secret of how to harness the power of positivity and be happy now"
            image_URL="https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg"
            price={3.99}
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix 1000 Watts Stand Mixer (5 Attachments, Fold Function, 0W20011137, White)"
            image_URL="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1638771870/Croma%20Assets/Small%20Appliances/Food%20Processors/Images/246001_omiawf.png/mxw_1440,f_auto"
            price={600.86}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="65852148"
            title="Samsung Galaxy Watch4 Bluetooth(44mm, Black, Compatible with Android only)"
            image_URL="https://m.media-amazon.com/images/I/61Nhi7ovjkL._SX522_.jpg"
            price={179.99}
            rating={5}
          />
          <Product
            id="84571962"
            title="Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue)"
            image_URL="https://m.media-amazon.com/images/I/61u0y9ADElL._SX569_.jpg"
            price={60.99}
            rating={5}
          />
          <Product
            id="36985217"
            title="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 512GB) - Space Grey (5th Generation)"
            image_URL="https://m.media-amazon.com/images/I/81+N4PFF7jS._SX679_.jpg"
            price={1524.99}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="90145325"
            title="123.9cm (49inch) Gaming Monitor with 32:9 aspect ratio display and 240Hz refresh rate"
            image_URL="https://images.samsung.com/is/image/samsung/in-gaming-monitor-c49g95tssw-lc49g95tsswxxl-frontwhite-335279681?$1300_1038_PNG$"
            price={1663.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
