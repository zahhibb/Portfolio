import React, { Component } from 'react';
import './App.css';
import posed from 'react-pose';

const Parent = posed.ul({
  open: { delayChildren: 200, staggerChildren: 50 },
  closed: { delay: 300 }
});
const Child = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

const items = ['Joakim Hedman', 'Joakim Wahman', 'Joakim Kanon'];
const listItems = items.map((item, key) => <Child key={key}>{item}</Child>);

class App extends Component {
  state = { isOpen: false };

  showList(){
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const buttonText = isOpen ? 'Shrink' : 'Expand';

    return (      
      <div className="main">
        <div className="content">
          <button className="content-button" onClick={() => {this.showList()}}>Press me ({buttonText})</button>
          <div>            
            <Parent pose={isOpen ? 'open' : 'closed'}>
              {listItems}
            </Parent>            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
