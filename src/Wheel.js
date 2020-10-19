import React from 'react';

//The Wheel Component handles all the Interativity with the iPod WebApp

class Wheel extends React.Component {
  //Wheel Set and Wheel Menu calls on the MusicSelect and Select function to change the MusicSelected and Selected States
  WheelSet = () => {
    if(this.props.selected === 2)
    {
      this.props.musicSelect(this.props.musicCurrent);
    }
    else
    {
      this.props.set(this.props.current);
    }
    
  }
  WheelMenu = () => {
    console.log(this.props.MusicSelected)
    if(this.props.selected === 2 && this.props.MusicSelected !== 0)
    {
      this.props.musicSelect(0);
    }
    else
    {
      this.props.set(0);
    }
    
  }
  render() {
    return (
      <div className="Wheel">
          <div id="plate"></div>
          <div id="menu" onClick = {() => this.WheelMenu()}>MENU</div>
          <div id="next" onClick = {() => this.props.iPodInc()}><i className="fa fa-fast-forward icon"></i></div>
          <div id="playpause"><i className="icon fa fa-play"></i><i className="icon fa fa-pause"></i></div>
          <div id="prev" onClick = {() => this.props.iPodDec()}><i className="icon fa fa-fast-backward"></i></div>
          <div id="center" onClick = {() => this.WheelSet()}></div>
      </div>
    );
  }
}

export default Wheel;