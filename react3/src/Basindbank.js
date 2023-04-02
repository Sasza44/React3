import React, {Component} from 'react';

class Basindbank extends Component {
  
    render(){
      return (
        <table>
            <thead>
                <tr>
                    <td>Назва</td>
                    <td>Величина</td>
                </tr>
            </thead>
            <tbody>
                {this.props.items.map(item => {return(
                  <tr key={item.id_api}>
                    <td>{item.txt}</td>
                    <td>{item.value}</td>
                  </tr>
                )})}
            </tbody>
        </table>    
      )
    }
  }
  
export default Basindbank;