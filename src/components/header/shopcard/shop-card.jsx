import React, { useState } from "react";
import shopcard from "./shopcard.module.scss";
import del from "../img/del.svg";

function ShopCard(renderCount) {
  const [counts, setCounts] = useState({});
  const [data, setData] = useState(JSON.parse(localStorage.getItem("products")) || []);

  function cutLength(data) {
    if (data.length > 40) {
      return data.slice(0, 40) + "...";
    } else {
      return data;
    }
  }

  function handleIncrement(id) {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 1) + 1,
    }));
  }

  function handleDecrement(id) {
    setCounts((prevCounts) => {
      const newCount = (prevCounts[id] || 1) - 1;
      if (newCount < 1) {
        return prevCounts;
      } else {
        return {
          ...prevCounts,
          [id]: newCount,
        };
      }
    });
  }

  let totalCost = 0;
  for (const product of data) {
    const quantity = counts[product.id] || 1;
    totalCost += product.price * quantity;
  }

  function deleteRender(remove) {
    let arr = data.filter((item) => item.id !== remove.id);
    setData(arr);
    localStorage.setItem("products", JSON.stringify(arr));
    renderCount.renderCount()
  }



  return (
    <>
      <div className={shopcard.box}>
        <div className={shopcard.texReact}>
          <h3 className={shopcard.h3}>PRODUCT</h3>
          <div className={shopcard.texReact2}>
            <h3>HOME</h3>
            <h3>BAGS</h3>
            <h3>SNEAKERS</h3>
            <h3>BELT</h3>
            <h3>CONTACT</h3>
          </div>
        </div>
        <hr className={shopcard.hr1} />

        <div className={shopcard.block}>
          {data.length ? (
            <>
          {data.map((item) => (
            <div>
            <div className={shopcard.cards}>
              <div className={shopcard.box2}>
                <div className={shopcard.cardsIcon}>
                  <button onClick={()=> deleteRender(item)} className={shopcard.remove}>
                    <img src={del} alt="img" />
                  </button>
                </div>
                <div className={shopcard.img}>
                  <img src={item.image} alt="img" />
                </div>
                <div className={shopcard.title}>
                  <h3>{cutLength(item.title)}</h3>
                </div>
              </div>
              <div className={shopcard.box3}>
                <div className={shopcard.price}>
                  <h3>${item.price}</h3>
                </div>
                <div className={shopcard.count}>
                  <button onClick={() => handleDecrement(item.id)} className={shopcard.minus}>-</button>
                  <span>{counts[item.id] || 1}</span>
                  <button onClick={() => handleIncrement(item.id)} className={shopcard.plus}>+</button>
                </div>
                <div className={shopcard.price2}>
                  <h3>${(item.price * (counts[item.id] || 1)).toFixed(2)}</h3>
                </div>
              </div>
            </div>
              </div>
          ))}
            <div className={shopcard.total}><h2>Total Price: ${totalCost.toFixed(2)}</h2></div>
            </>
            ) : (
              <h1 className={shopcard.notfound}>No cards found...</h1>
      
              )}
        </div>
      </div>
    </>
  );
}
export default ShopCard;
