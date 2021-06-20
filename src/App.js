import React, { useState } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";
const App = () => {
  // usestate
  const [data, setData] = useState(Data);
  // intialized state and send to the child
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  //  when user type in to the searchbar
  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };
  // to search on search bar user input to lower case and and trim it , it will search with the initial

  const lookUp = () => {
    const userText = userInput.toLocaleLowerCase().trim();
    const userTextLength = userText.length;
    // const searchText = userText ? userText : "";
    let newArr = data.filter((item) => {
      const slicedProductName = item.productName.slice(0, userTextLength);
      return slicedProductName === userText;
    });
    setFilteredData(newArr);
  };
  // on submit in form

  const handleSubmit = (e) => {
    e.preventDefault();
    lookUp();
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>Welcome to My online store</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={changeHandle}
            value={userInput}
            className="inputText"
          />
          <input type="submit" value="Search" className="inputSubmit" />
        </form>
        <ProductList data={userInput ? filteredData : data} />
      </div>
    </React.Fragment>
  );
};

export default App;
