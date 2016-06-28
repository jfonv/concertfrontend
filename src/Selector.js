import React from 'react';

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 8940, type: '', price: 0 };
    this.update = this.update.bind(this);
  }

  componentWillMount() {
  // Update dropdown with list of types
  }

  update() {
    const quantity = this.refs.quantity.value;
    const type = this.refs.type.value; // change value to text
    const price = this.refs.price.value;
    const url = '//localhost:3333/sections/update';
    // call database
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ quantity, type, price }),
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
    this.setState({ quantity, type, price });
    this.props.update();
  }


  render() {
    console.log('THIS IS A SELECTOR RENDER');
    return (
      <div>
        <button onClick={this.update}>Submit</button>
        <div>
          <label>Quantity: </label>
          <input ref="quantity" type="number"/>

        </div>
        <div>
          <label>Seat Type: </label>
          <input ref="type" type="text" />
        </div>
        <div>
          <label>Price: </label>
          <input ref="price" type="number" />
        </div>
        <h3></h3>
      </div>
    );
  }
}

export default Selector;
