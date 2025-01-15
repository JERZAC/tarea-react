import React from "react";
import FilterableProductTable from "./components/Home/Product/FilterableProductTable";
import PRODUCTS from "./data";

function App() {
  return (
    <div>
      <h1>Product Filter</h1>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
