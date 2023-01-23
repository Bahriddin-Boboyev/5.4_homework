import React from "react";
import footer from './footer.module.scss'


export const Footer = () => {


  return <>
  <div className={footer.box}>
    <div className={footer.block}>
      <div className={footer.block2}>
          <h3>Rapture Athletics</h3>
      </div>
      <ul className={footer.list}>
        <li className={footer.item}>
          <h3>Links</h3>
          <div className={footer.box4}>
          <button>Home</button>
          <button>About</button>
          <button>Cart Page</button>
          <button>Contact Us</button>

          </div>
        </li>
        <li className={footer.item}>
          <h3>Contact</h3>
          <div className={footer.box4}>

          <button>Email</button>
          <button>LinkedIn</button>
          <button>Instagram</button>
          <button>Twitter</button>
          </div>
        </li>
        <li className={footer.item}>
          <h3>Collection</h3>
          <div className={footer.box4}>
          <button>Men</button>
          <button>Women</button>
          <button>Children</button>

          </div>
        </li>
      </ul>
    </div>
  </div>
  </>
}