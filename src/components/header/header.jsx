import React from "react";
import header from './header.module.scss'
import search from './img/search.svg'
import korzinka from './img/korzinka.svg'
import user from './img/user.svg'
import { Link } from "react-router-dom";


export const Header = (count) => {


  return <>
    <nav className={header.nav}>
      <div className={header.box_right}>
        <Link to={'/'}>
      <h1 className={header.home}>Rapture Athletics</h1>
        </Link>
      </div>
      <ul className={header.list}>
        <li className={header.item}>
          <a href="#">Men</a>
        </li>
        <li className={header.item}>
          <a href="#">Women</a>
        </li>
        <li className={header.item}>
          <a href="#">Kids</a>
        </li>
        <li className={header.item}>
          <a href="#">Customize</a>
        </li>
        <li className={header.item}>
          <a href="#">Customize</a>
        </li>
      </ul>
      <div className={header.box_left}>
        <button className={header.btn}><img src={search} alt="img" /></button>
        <Link to={"shopcard"}>
        <button className={header.btn5}><img src={korzinka} alt="img" /><button className={header.korzinkaCount}>{count.count}</button></button>
      </Link>
        <button className={header.btn}><img src={user} alt="img" /></button>
      </div>

    </nav>
  </>
}