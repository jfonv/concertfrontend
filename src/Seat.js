import React from 'react';

class Seat extends React.Component {
  constructor(props) {
    super(props);
    const purchased = this.props.seat.purchased;
   this.state ={ purchased };
   this.update = this.update.bind(this);
  }

  update(){
    const url = '//localhost:3333/sections/purchase_seat';
    const body = { ObjectId: this.props.seat._id };
    console.log('ID: ', this.props.seat._id);
    this.setState({purchased: true});
    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    }).then(function(response) {
      response.status     //=> number 100–599
      response.statusText //=> String
      response.headers    //=> Headers
      response.url        //=> String

      //response.text().then(function(responseText) { ... })
    }, function(error) {
      error.message //=> String
    });
  }

  render(){
    const styleBought = {
      width: '40px',
      backgroundColor: 'Pink'
    };
    const styleAvail = {
      width: '40px',
      backgroundColor: 'LightGreen'
    };
    if (this.state.purchased) {
      return (
        <span>
          <button style={styleBought} >{ this.props.seat.seatNumber }</button>
        </span>
      );
    } else {
      return (
        <span>
          <button onClick={this.update} style={styleAvail} >{ this.props.seat.seatNumber }</button>
        </span>
      );
    }
  }
}

export default Seat;
