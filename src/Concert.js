import React from 'react';
import Selector from './Selector';
import Section from './Section';

class Concert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { changeme: true, sections: [] };
    this.updatePage = this.updatePage.bind(this);
    this.populate = this.populate.bind(this);
    this.populate();
    this.arraytest = [1,2,3];
  }

  populate() {
    const url = '//localhost:3333/sections/pull';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then((response) => {
      response.text().then((responseText) => {
        const sections = JSON.parse(responseText);
        for (let i = 0; i < sections.length; i++) {
          sections[i].moneyMade = sections[i].seats.reduce((a, v) => a + (v.purchased ? 1 : 0), 0);
          sections[i].moneyMade *= sections[i].price;
        }
        this.setState({ sections, changeme: true });
      })
    }, (error) => {
      console.log(error.message); // => String
    });
  }

  updatePage() {
    this.populate();
    this.setState({ sections: this.state.sections, changeme: false });
  }

  render() {
    if (this.state.sections.length <= 0) {
      return (
        <div>
          <Selector update={this.updatePage} />
          <h2>Sections </h2>
          <h3>Sorry, there are no sections available yet.</h3>
        </div>
      );
    }
    return (
      <div>
        <Selector update={this.updatePage} />
        <h2>Sections </h2>
          { this.state.sections.map((v,i) => <Section key={i} update={this.updatePage} sectionData={v}/> ) }
      </div>
    );
  }
}

export default Concert;
