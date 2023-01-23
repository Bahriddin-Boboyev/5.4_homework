import React from "react";
import section from './section.module.scss'
import img1 from './img/section-img1.png' 
import img2 from './img/section-img2.png' 
import img3 from './img/section-img3.png' 
import img4 from './img/section-img4.png' 


export const Section1 = ()=> {


  return <>
    <div className={section.box}>
      <h1>Our Shoes Reviews</h1>
      <p className={section.text}>Check the comments and ratings given by users</p>
      <div className={section.block}>
        <div>
    <img src={img1} alt="img" />
        </div>
        <div className={section.img_block}>
        <img src={img2} alt="img" />
        <div className={section.imgblock2}>
        <img src={img3} alt="img" />
        </div>
        </div>
      </div>
    </div>

    <div className={section.box2}>
      <div className={section.block2}>
        <h3>Subscribe Us to get monthly voucher or <span>25 % off</span></h3>
        <input type="email" placeholder="you@company.com" /> <br />
        <button>Subscribe</button>
      </div>
      <div className={section.img_block2}>
        <img src={img4} alt="img" />
      </div>
    </div>
  </>
}