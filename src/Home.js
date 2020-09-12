import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w3000._CB406837549_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            titile="Full-Stack React Projects: Learn MERN stack development by building modern web apps using MongoDB, Express, React, and Node.js"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51BqNmSO6uL._SX404_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            titile="Apple Watch Series 5 (GPS + Cellular, 40mm) - Silver Aluminum Case with White Sport Band"
            image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
            price={499.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            titile="Amazon Smart Oven, a Certified for Humans device – plus Echo Dot"
            price={249.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61eg-UvUCIL._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            titile="SAMSUNG 85-inch Class QLED Q950T Series - Real 8K Resolution Direct Full Array 32X Quantum HDR 32X Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
            image="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._AC_SL1500_.jpg"
            price={997}
            rating={5}
          />
          <Product
            id="3254354345"
            titile="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation|"
            price={999.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            titile="SAMSUNG 49-inch Odyssey G9 - QHD, 240hz, 1000R Curved Gaming Monitor, 1ms, NVIDIA G-SYNC & FreeSync, QLED (LC49G95TSSNXZA)"
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
            price={1699.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="9082938584"
            titile="
            Apple 13in MacBook Pro, Retina, Touch Bar, 3.1GHz Intel Core i5 Dual Core, 8GB RAM, 512GB SSD, Space Gray, MPXW2LL/A"
            image="https://images-na.ssl-images-amazon.com/images/I/61SRQUe%2BLhL._AC_SL1024_.jpg"
            price={1099.99}
            rating={5}
          />
          <Product
            id="902539332"
            titile="Hbada Gaming Chair Racing Style Ergonomic High Back Computer Chair with Height Adjustment, Headrest and Lumbar Support E-Sports Swivel Chair, Gray"
            image="https://images-na.ssl-images-amazon.com/images/I/61uVsgKzYdL._AC_SL1500_.jpg"
            price={189.99}
            rating={5}
          />
          <Product
            id="90829742"
            titile="Blink XT2 Outdoor/Indoor Smart Security Camera with cloud storage included, 2-way audio, 2-year battery life – 5 camera kit"
            image="https://images-na.ssl-images-amazon.com/images/I/51KbZ6g2DML._SL1000_.jpg"
            price={249.99}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
