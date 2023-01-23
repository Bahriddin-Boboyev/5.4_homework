import React from "react";
import { Card } from "./card";
import { Section1 } from "./section1";
import main from "./main.module.scss";
import img1 from "./img/bg-img1.png";
import img2 from "./img/bg-img2.png";
import img3 from "./img/bg-img3.png";
import img4 from "./img/bg-img4.png";



export const Main = (renderCount) => {

  // console.log(renderCount.renderCount);
  return (
    <>
      <div className={main.box}>
        <div className={main.block}>
          <h1 className={main.title}>Step Into Style with Our Trendy Shoes!</h1>
          <h2 className={main.year}>2023</h2>
          <p className={main.text}>
            Our collections include a wide range of shoes for men, women, and
            children.
          </p>
          <button className={main.btn1}>
            Shop Now
          </button>
        </div>
        <div className={main.bgimg}></div>
      </div>

      <div className={main.bor2}>
        <div>
          <img src={img1} alt="img" />
        </div>
        <div className={main.relat}>
          <div className={main.post}>
            <h3 className={main.socalM}>Facebook</h3>
            <h3 className={main.socalM}>Instagram</h3>
            <h3 className={main.socalM}>Twitter</h3>
          </div>
          <img src={img2} alt="img" />
        </div>
        <div className={main.relat2}>
          <div className={main.post2}>
            <h3 className={main.socalM2}>Explore More</h3>
          </div>
          <img className={main.img3} src={img3} alt="img" />
        </div>
      </div>

      <div className={main.owlLive}>
        <div className={main.owlImg}>
          <img src={img4} alt="img" />
        </div>
        <div className={main.owlbox}>
          <h1>Be your Own Level</h1>
          <p>The right shoes can take any outfit from basic to stylish with just a few steps. At our shoe store, we have a wide variety of stylish shoes to help you create the perfect look. From contemporary sneakers to classic loafers, we have something to match all tastes and occasions. Our shoes are designed to be comfortable, durable, and fashionable, so you can look and feel your best no matter what you’re wearing.</p>
            <button className={main.btn1}>Shop Now</button>
        </div>
      </div>
      <div className={main.trindeng}>
        <h1>Trending in 2023</h1>
      </div>
      <Card renderCount={renderCount}/>
      <Section1/>
    </>
  );
};
 