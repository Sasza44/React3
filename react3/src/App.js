import './App.css';
import React, {Component} from 'react';
import Exchange from './Exchange.js';
import Basindbank from './Basindbank.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      pressedButton: 0,
    };
    this.click1 = this.click1.bind(this);
    this.click2 = this.click2.bind(this);
    this.click0 = this.click0.bind(this);
  }

  data = async(url) => {
    const data1 = await fetch(url)
    return await data1.json()
  }

  click1(){
    this.data('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(data1 => {
      this.setState({
        items: data1,
        pressedButton: 1,
      })
      //console.log(data1)
    })
  }

  click2(){
    this.data('https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank?date=20160101&period=m&json')
    .then(data1 => {
      this.setState({
        items: data1,
        pressedButton: 2,
      })
      //console.log(data1)
    })
  }
  
  click0(){
    this.setState({
      pressedButton: 0,
    });
  }

  render(){
    return (
      <>
        <header>
          <button onClick={this.click1}>Курси валют</button>
          <button onClick={this.click2}>Банківська інформація</button>
          <button onClick={this.click0}>Reset</button>
        </header>
          <section>
            {this.state.pressedButton === 1 &&
              <Exchange items={this.state.items} />
            }
            {this.state.pressedButton === 2 &&
              <Basindbank items={this.state.items} />
            }
          </section>
      </>
    )
  }
}

//https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json
//https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank?date=20160101&period=m&json
export default App;