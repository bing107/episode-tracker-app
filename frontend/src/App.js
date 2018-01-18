import React, { Component } from 'react';
import cheerio from 'cheerio';
import jsonframe from 'jsonframe-cheerio';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      seasonList: []
    }
  }
  
  componentDidMount() {
    // this.fetchData('http://www.primewire.is/watch-11054-Supernatural');
    // this.fetchData();
    // this.fetchData('https://coinmarketcap.com/all/views/all/');
    // this.foo('https://coinmarketcap.com/all/views/all/');
  }
  
  async fetchData(url) {
    console.log(cheerio.load(url))
    let $ = cheerio.load(url);
    jsonframe($);
    console.log($('body'));
    
    let seasonList = [];
    let frame = {
      bar: {
        _s: ".season-toggle",  // the selector
        _d: [{  // allow you to get an array of data, not just the first item
          "Foo": "#first > div.tv_container > h2:nth-child(1) > a"
        }]
      }
    };
    // let frame = {
    //   currency: {
    //     _s: "tr",  // the selector
    //     _d: [{  // allow you to get an array of data, not just the first item
    //       "Coin": "td.no-wrap.currency-name > a",
    //       "Url": "td.no-wrap.currency-name > a @ href",
    //       "Symbol": "td.text-left.col-symbol",
    //       "Price": "td:nth-child(5) > a"
    //     }]
    //   }
    // }
    seasonList = await $('body').scrape(frame);
    console.log(seasonList); // Output the data in the terminal
    return seasonList;
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
