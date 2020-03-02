import React, { useState, useContext } from "react";
import InputRange from "react-input-range";
import { ShoppingContext } from "../../context/shopping-context";
import "./Filter.scss";

const minValue = 100;
const maxValue = 1000;

const Filter = props => {
  const { filterItem } = useContext(ShoppingContext);
  const [min, setMin] = useState(minValue);
  const [max, setMax] = useState(maxValue);

  const setPrice = params => {
    const { min, max } = params;
    setMin(min);
    setMax(max);
  };
  return (
    <div className="filter">
      <h4 className="filter__title">Filter Option</h4>
      <InputRange
        maxValue={maxValue}
        minValue={minValue}
        value={{ min, max }}
        onChange={value => {
          value.min = value.min <= minValue ? minValue : value.min;
          value.max = value.max >= maxValue ? maxValue : value.max;
          setPrice(value);
        }}
      />
      <button onClick={() => filterItem({ min, max })}>Apply</button>
    </div>
  );
};

// class Filter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: { min: 100, max: 10000 }
//     };
//   }

//   render() {
//     return (
//       <div className="filter">
//         <InputRange
//           maxValue={10000}
//           minValue={100}
//           value={this.state.value}
//           onChange={value => this.setState({ value })}
//         />
//         <h4 className="filter__title">Price</h4>
//       </div>
//     );
//   }
// }
export default Filter;
