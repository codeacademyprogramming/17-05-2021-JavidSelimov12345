import React from "react";
import ".././App.scss";
import json from ".././data.json";
import imag from ".././img/switch.png";

function Convertor() {
  let InputFromReferance = React.createRef();

  let SelectFromReferance = React.createRef();

  let SecondSelectReferance = React.createRef();

  return (
    <div className="col-12">
      <div className="main-div">
        <p id="lable">From</p>
        <p id="lable_to">To</p>
        <div className="inputMain">
          <input ref={InputFromReferance} id="from" placeholder="Type" />
        </div>{" "}
        <select
          ref={SelectFromReferance}
          name="currencyFrom"
          id="currencyFrom"
          className="currencyFrom"
        >
          {json.map((cur) => {
            return <option >{cur.code}</option>;
          })}
        </select>
        <img id="img" src={imag} />
        <select
          id="second"
          ref={SecondSelectReferance}
          className="currencyFrom"
        >
          {json.map((cur) => {
            return <option >{cur.code}</option>;
          })}
        </select>
        <div id="output"></div>
      </div>

      <div className="but">
        {" "}
        <button
          type="button"
          onClick={exchange}
          className="bnt btn-primary burt"
        >
          Exchange
        </button>
      </div>
    </div>
  );

  function exchange(event) {
    // fetch("https://v6.exchangerate-api.com/v6/aaa42e978e36305ca1680748/latest/USD")
    //     .then((response) => response.json())
    //     .then((data) => console.log(data.conversion_rates));
    let Val1 = json.find((e) => {
      return e.code == SelectFromReferance.current.value;
    });

    let Val2 = json.find((e) => {
      return e.code == SecondSelectReferance.current.value;
    });

    let Val3 = (InputFromReferance.current.value * Val1.value) / Val2.value;

    document.getElementById("output").innerText = Val3.toFixed(2);
  }
}

export default Convertor;
