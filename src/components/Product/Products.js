import React from "react";
import "./Products.css";
import ProductCard from "./ProductCard";

const Products = () => {
  
  return (
    
    <section className="product-wrapper">
      {/* header section start */}
      <header className="product-header">
        <h1>Onze desserts</h1>
      </header>
      {/* headersection end */}

      {/* product layout  start*/}
      <div>
        <h3>Heerlijke desserts-1</h3>
        <section className="products">
          <ProductCard image="./Images/Bossche_bol.png" productName="Bossche bol" />
          <ProductCard image="./Images/apple.png" productName="Appeltaart" />
          <ProductCard image="./Images/poffertjes.png" productName="Poffertjes" />
        </section>

        <h3>Heerlijke desserts-2</h3>
        <section className="products">
          <ProductCard image="./Images/butterC.png" productName="Boterkoek" />
          <ProductCard image="./Images/ontbijtkoek.png" productName="Ontbijtkoek" />
          <ProductCard image="./Images/stroopwafel.png" productName="Stroopwafels" />
        </section>
        <h3>Heerlijke desserts-3</h3>
        <section className="products">
          <ProductCard image="./Images/bokkepoten.png" productName="Bokkepoten" />
          <ProductCard image="./Images/GevuldeKoek.png" productName="GevuldeKoek" />
          <ProductCard image="./Images/tompouce.png" productName="Tompouce" />
        </section>
      </div>
      {/* Product layout ends */}
    </section>
  );
};

export default Products;

