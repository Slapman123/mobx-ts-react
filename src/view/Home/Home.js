import React from "react";
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

const Home = ({ helpers, actions }) => {
  const array = [];
  for (let i = 1; i < 101; i++) {
    array.push(i);
  }
  let array1 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 9) {
      let sum=0;
      let array2 = array.slice(array[i-10],array.indexOf(array[i]));
      for (let j=0; j<array2.length; j++){
          sum=sum+array2[j];
      }
      array1.push(sum/10)
    }else{
        array1.push("Dont have previous 10 for average")
    }
  }
  console.log(array1)

  return (
    <div className="home_component">
      <label>{helpers.app.testValue}</label>
      <button onClick={actions.app.increaseTest}>+1</button>
      <button onClick={actions.app.decreaseTest}>-1</button>
      <label>{helpers.app.inputValue}</label>
      <input name="inputValue" onChange={actions.app.handleChange}></input>
    </div>
  );
};

Home.prototype = {
  state: PropTypes.object,
};

export default setup(Home);
