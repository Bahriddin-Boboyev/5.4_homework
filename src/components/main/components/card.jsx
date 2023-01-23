import React from "react";
import card from "./card.module.scss";
import {request} from '../../../config/request'

export const Card = ({ renderData, renderCount}) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  // const [product, setProduct] = React.useState([]);

  console.log();

  React.useEffect(() => {
    request
      .get("/products")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const renderFunc = (data)=> {
    let korzinka = JSON.parse(localStorage.getItem('products')) || []
    if(korzinka.some((el)=> el.id === data.id)){
      alert("avval qo'shilgan")
    } else{
      korzinka.push(data)
      localStorage.setItem("products", JSON.stringify(korzinka))
    }
    renderCount.renderCount()
  }

    
 


  function checkLinght(data) {
    if (data.length > 12) {
      return data.slice(0, 12) + "...";
    }
  }
  function checkLinght2(data) {
    if (data.length > 30) {
      return data.slice(0, 30) + "...";
    }
  }

  return (
    <>
      {loading ? (
        <div className={card.loadingBox}>
          <div className={card.loader}></div>
        </div>
      ) : (
        <div className={card.box}>
          <ul className={card.list}>
            {data.map((item) => (
              <li key={item.id} className={card.item}>
                <div className={card.imgBlock}>
                  <img className={card.img} src={item?.image} alt="img" />
                </div>
                <h3 className={card.itemTitle}>{checkLinght(item.title)}</h3>
                <p className={card.itemText}>
                  {checkLinght2(item?.description)}
                </p>
                <button
                  onClick={() => renderFunc(item)}
                  className={card.itemBtn}
                >
                  Purchase Now
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
