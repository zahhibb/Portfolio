import React, { Component } from 'react';
import './App.css';
import posed from 'react-pose';
import { bookingSlots } from './constants.js';

const ListParent = posed.ul({
  enabled: { delayChildren: 200, staggerChildren: 50 }
});
const ListChild = posed.li({
  enabled: { y:10, opacity: 1 }
});
const SeatName = posed.div({
  seatEnabled: { y:10, opacity:1 },
  seatDisabled: { y:0, opacity:0 }
})
const openStyle = { color: '#0F0' }
const closedStyle = { color: '#F00' }

function ListChildContainer({available, ...props}){
  return <ListChild {...props} className={available === true ? 'seat-open' : 'seat-taken' }></ListChild>;
}

function SeatSelection({id, name, seat, available, onClick}){
  return(
    <div className="selection-info">
      <h3><u>Selected seat</u></h3>
      <div>
        <span>ID:</span>
        <span>{id}</span>
      </div>
      <div>
        <span>Seat:</span>
        <span>{seat}</span>
      </div>
      <div>
        <span>Available:</span>
        <span style={available === "Yes" ? openStyle : closedStyle }>{available}</span>
      </div>
      <div>
        <span>Name:</span>
        <span>{name}</span>
      </div>

      <SeatSelectionButton available={available} onClick={onClick} />
    </div>    
  );
}

function SeatSelectionButton({available, onClick}){
  const showButton = available;  
  let button = '';
  if (showButton === 'Yes') {
     button = <button className="seat-select-button" onClick={onClick}>Choose seat</button>;
  }
  return button;
}

function SeatNameContainer({...props}){
  return(
    <SeatName {...props}>
      <div className="select-name">
        <label>Enter name:</label>
        <input type="text" className="select-name-field" placeholder="e.g. Mark Cerny.." />
        <input type="submit" value="Choose seat" /* onClick={} */ />
      </div>
    </SeatName>
  );
}

class Other extends Component {
  state = {
    isEnabled: false,
    seatState: false,
    selectId: null,
    selectName: null,
    selectSeat: null,
    selectAvailable: null,
    selectIndex: null
  };

  componentDidMount() {
    this.setState({ isEnabled: true })
  }

  clickSelection(index, e) {
    this.setState({
      selectIndex:index,
      seatState:false
    });
    
    // add active selection class on current target
    let className = e.currentTarget.className;
    className += " selection-active";

    let targetVal = e.currentTarget.dataset.value;
    {bookingSlots.map(item => {
      let correctAvailableTerm = item.available === false ? 'No' : 'Yes';
      if (targetVal === item.id) {
        if (item.available === false) {
          this.setState({
            selectId: `${item.id}`,
            selectSeat: `${item.seat}`,
            selectAvailable: correctAvailableTerm,
            selectName: `${item.name}`
          });
        }else {
          this.setState({
            selectId: `${item.id}`,
            selectSeat: `${item.seat}`,
            selectAvailable: correctAvailableTerm,
            selectName: ''
          });
        }
      }
    })}
  }

  chooseSeatButton = e => {
    this.setState({
      seatState: true
    })
    const dummyName = "Joakim Hedman";

    let selectedSeat = bookingSlots[this.state.selectIndex];    
    selectedSeat.name = dummyName;
    selectedSeat.available = false;

    let correctAvailableTerm = selectedSeat.available === false ? 'No' : 'Yes';
    this.setState({
      selectId: selectedSeat.id,
      selectSeat: selectedSeat.seat,
      selectAvailable: correctAvailableTerm,
      selectName: selectedSeat.name
    })
  }

  render() {  
    const {
      isEnabled,
      seatState,
      selectId,
      selectName,
      selectSeat,
      selectAvailable
    } = this.state;

    return (      
      <div className="other-content">
        <h2>Seating chart</h2>
        <ListParent pose={isEnabled ? 'enabled' : 'deactivated'}>
          {bookingSlots.map((item, index) =>
            <ListChildContainer key={index} data-value={item.id} onClick={(e) => this.clickSelection(index, e)} available={item.available}></ListChildContainer>
          )}
        </ListParent>
        <SeatSelection id={selectId} name={selectName} seat={selectSeat} available={selectAvailable} onClick={this.chooseSeatButton} />
        <SeatNameContainer pose={seatState ? 'seatEnabled' : 'seatDisabled'} className="seat-name-container" />
      </div>
    );
  }
}
export default Other;