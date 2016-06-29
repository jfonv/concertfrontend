import React from 'react';
import Seat from './Seat';

class Section extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <table style={{width: '400px'}}>
          <thead>
            <tr>
              <td colSpan='8' style={{textAlign: 'center'}}>
                <h3>{this.props.sectionData.type}</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Quantity: {this.props.sectionData.quantity}
              </td>
              <td>
                Price: ${this.props.sectionData.price}
              </td>
              <td>
                Money Made: ${this.props.sectionData.moneyMade}
              </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>
              { this.props.sectionData.seats.map((v,i) => <Seat key={i*i} update={this.props.update} seat={v} /> ) }
              </td>
            </tr>
            </tbody>
      </table>
    )
  }
}

export default Section;
