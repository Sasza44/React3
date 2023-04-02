import React, {Component} from 'react';

class Exchange extends Component {
  
    render(){
      return (
        <table>
            <thead>
                <tr>
                    <td>Назва валюти</td>
                    <td>Ціна</td>
                    <td>Код</td>
                </tr>
            </thead>
            <tbody>
                {this.props.items.map(item => {return(
                  <tr key={item.r030}>
                    <td>{item.txt}</td>
                    <td>{item.rate}</td>
                    <td>{item.cc}</td>
                  </tr>
                )})}
            </tbody>
        </table>    
      )
    }
  }
  
export default Exchange;