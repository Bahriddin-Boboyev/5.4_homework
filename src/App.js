import React from "react";
import { Header } from "./components/header/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer/footer";
import { Route, Routes } from "react-router-dom";
import ShopCard from "./components/header/shopcard/shop-card";


function App() {
  const [count, setCount] = React.useState(0);
  const renderCount = ()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
      return setCount(products.length);
    } else {
      return setCount(0);
    }
  }
  React.useEffect(()=> {
    renderCount()
  }, [])


  return (
    <div className="App">
      <div className="wrapper">
      <header>
        <Header count={count} key={'nimadir2'} />
      </header>
      <main className="container">
      <Routes>
      <Route path="/" element={<Main renderCount={renderCount} key={'nimadir'}/>}/>
      <Route path="/shopcard" element={<ShopCard renderCount={renderCount}/>}/>
      <Route path="*" element={<h2>Page not Found....</h2>}/>
      </Routes>
      </main>

      <footer>
      <Footer/>
      </footer>
      </div>
    </div>
  );
}

export default App;
