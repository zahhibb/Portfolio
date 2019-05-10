import React, { Component } from 'react';
import './App.css';
import posed from 'react-pose';
import { bookingSlots } from './constants.js';

var classNames = require('classnames');

const ListParent = posed.ul({
  enabled: { delayChildren: 200, staggerChildren: 50 }
});
const ListChild = posed.li({
  enabled: { y:10, opacity: 1 }
});
const openStyle = { color: '#0F0' }
const closedStyle = { color: '#F00' } 

function SeatSelection({id, name, seat, available}){
  return(
    <div className="selection-info">
      <h3><u>Selected seat</u></h3>
      <div>
        <span>Available:</span>
        <span style={available === "true" ? openStyle : closedStyle }>{available}</span>
      </div>
      <div>
        <span>ID:</span>
        <span>{id}</span>
      </div>
      <div>
        <span>Name:</span>
        <span>{name}</span>
      </div>
      <div>
        <span>Seat:</span>
        <span>{seat}</span>
      </div>
    </div>
  );
}

class Other extends Component {
  state = {
    isEnabled: false,
    /* isHighlighted: false, */
    selectId: null,
    selectName: null,
    selectSeat: null,
    selectAvailable: null
  };

  componentDidMount() {
    this.setState({ isEnabled: true })
  }

  clickSelection = e => {
    // set highlight class of selected seat
    /* this.setState(prevState => ({
      isHighlighted: !prevState.isHighlighted
    })) */

    // compare and fetch data from seat
    let val = e.currentTarget.dataset.value;
    /* e.currentTarget.className */
    {bookingSlots.map(item => {
      if (val === item.id) {
        this.setState({
          selectId: `${item.id}`,
          selectName: `${item.name}`,
          selectSeat: `${item.seat}`,
          selectAvailable: `${item.available}`
        });
      }
    })}
  }

  render() {  
    const {
      isEnabled,
      selectId,
      selectName,
      selectSeat,
      selectAvailable
    } = this.state;

    var classes = classNames(this.props.className, {
      'selected': (this.props.selected === this.props.className)
    });

    return (      
      <div className="other-content">
        <h2>Seating chart</h2>
        <ListParent pose={isEnabled ? 'enabled' : 'deactivated'}>
          {bookingSlots.map((item, index) =>
            <ListChild key={index} data-value={item.id} title={item.name} onClick={this.clickSelection} className={classes} /* className={`${isHighlighted ? "highlight" : ""}`} */ ></ListChild>
          )}
        </ListParent>
        <SeatSelection id={selectId} name={selectName} seat={selectSeat} available={selectAvailable} />
      </div>
    );
  }
}
export default Other;