import React from 'react';
import Cars from './Cars';
import MyContext from './MyContext';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  }
  
  render() {
    const contextValue = {
      ...this.state,
      moveCar: this.moveCar,
    };
    return(
      <MyContext.Provider value={ contextValue } >
       <Cars />
      </MyContext.Provider>
    )
    
  }
}

export default App;
