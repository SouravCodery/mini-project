import React from 'react';
import './App.css';
import './Display';
import Display from './Display';
import './Wheel';
import Wheel from './Wheel';
import ZingTouch from 'zingtouch';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        selected: 0, //This defines the Component we are currently on among music, games, settings, etc
        current: 1,  //This defines the Current Option we are currently on in Main Menu
        prev: 1,     //This defines the Previous Option we were on in Main Menu
        CoverFlowCurrent: 0, //This defines the Current Picture we are on currently on in Cover FLow
        CoverFlowPrev: 4,  //This defines the Previous Picture we were on in Cover FLow
        MusicPrev: 1,   //This defines the Previous Music Option we were on in Music
        MusicCurrent: 1,  //This defines the Current Music Option we are on currently on in Music
        MusicSelected: 0, //This defines the Music Option we have selected on in Music
        scale: 1          //This defines the scale(tranform) of the iPod
    }
  }
  // Selected State 0 is for <MainMenu/>
  // Selected State 1 is for <CoverFlow />
  // Selected State 2 is for <Music/>
  // Selected State 3 is for <Games />
  // Selected State 4 is for <Settings />

  //Function to Change the Selected State
  select = (val) => {
      this.setState({
          selected: val
      })
  }
  //Function to Change the MusicSelected State
  musicSelect = (val) => {
      this.setState({
          MusicSelected: val
      })
  }
  //Function to traverse through the different components and options. This function set the state as well the css properties.
  currentSet = (val) => {
    if(this.state.selected === 0)
    {
      const {current, prev} = this.state;

      this.setState({
          prev: current,
          current: val 
      })
      var k = document.body.querySelectorAll("#items>div");
      k[this.state.prev - 1].style.background = "white";
      k[this.state.prev - 1].style.color = "black";
      k[this.state.current - 1].style.background = "rgb(34, 128, 252)";
      k[this.state.current - 1].style.color = "white";
    }   

    else if(this.state.selected === 1)
    {
      var {CoverFlowCurrent, CoverFlowPrev} = this.state;
      var CoverFlowDivs = document.body.querySelectorAll(".CoverFlow>div");
        const slideShow = () => {
            CoverFlowDivs[CoverFlowPrev].style.height = '80px';
            CoverFlowDivs[CoverFlowPrev].style.width = '80px';
            CoverFlowDivs[CoverFlowPrev].style.position = 'relative';
            CoverFlowDivs[CoverFlowPrev].style.zIndex = '0';
            CoverFlowDivs[CoverFlowPrev].style.transform = 'skewY(-30deg)';

            CoverFlowDivs[CoverFlowCurrent].style.height = '100px';
            CoverFlowDivs[CoverFlowCurrent].style.width = '100px';
            CoverFlowDivs[CoverFlowCurrent].style.transform = 'skewY(0deg)';
            CoverFlowDivs[CoverFlowCurrent].style.position = 'absolute';
            CoverFlowDivs[CoverFlowCurrent].style.zIndex = '2';

            CoverFlowCurrent = (CoverFlowCurrent + 1) % 5;
            CoverFlowPrev = (CoverFlowPrev + 1) % 5;
            this.setState({
              CoverFlowPrev : CoverFlowPrev,
              CoverFlowCurrent: CoverFlowCurrent
          })
        }
        slideShow();
    }
    else if(this.state.selected === 2 && this.state.MusicSelected === 0)
    {
      var {MusicPrev, MusicCurrent} = this.state;
      if(MusicCurrent < 1)
        MusicCurrent = 1;
      this.setState({
          MusicPrev: MusicCurrent,
          MusicCurrent: val 
      })
      var k = document.body.querySelectorAll("#items>div");
      k[this.state.MusicPrev - 1].style.background = "white";
      k[this.state.MusicPrev - 1].style.color = "black";
      k[this.state.MusicCurrent - 1].style.background = "rgb(34, 128, 252)";
      k[this.state.MusicCurrent - 1].style.color = "white";
    } 
 
  }
  //This Function when called increases the size of the iPod
  iPodInc = () => {
    if(this.state.selected !== 4)
      return;
    var iPod = document.body.querySelector('.iPod');
    var scaleVal = this.state.scale;
    scaleVal += 0.1;
    this.setState ({
      scale: scaleVal
    })
    iPod.style.transform = 'scale(' + scaleVal + ')';
  }
  //This Function when called decreases the size of the iPod
  iPodDec = () => {
    if(this.state.selected !== 4)
      return;
    var iPod = document.body.querySelector('.iPod');
    var scaleVal = this.state.scale;
    scaleVal -= 0.1;
    this.setState ({
      scale: scaleVal
    })
    iPod.style.transform = 'scale(' + scaleVal + ')';
  }
  //componentDidMount has been used to put the zing touch's rotate logic into the action
  componentDidMount() {
    const currentSet = this.currentSet;
    var angle = 0;
    var zt = new ZingTouch.Region(document.body.querySelector('.iPod'));
    var myElement = document.querySelector('#plate');
    var rot = 0;
    var prevRot = 0;
    zt.bind(myElement, 'rotate', function(e){
        angle = ((e.detail.distanceFromOrigin)%360);
        prevRot = rot;
        rot = Math.abs(Math.floor((angle) / 30) % 4);
        if(rot !== prevRot)
          currentSet(rot + 1);
    }, false);
  }
  render() 
  {
    return (
      <div>
        <div className="iPod">
          <Display 
            selected = {this.state.selected}
            musicSelected = {this.state.MusicSelected}
          />
          <Wheel
            set = {this.select}
            current = {this.state.current}
            musicSelect = {this.musicSelect}
            musicCurrent = {this.state.MusicCurrent}
            selected = {this.state.selected}
            MusicSelected = {this.state.MusicSelected}
            iPodInc = {this.iPodInc}
            iPodDec = {this.iPodDec}
          />
        </div>
      </div>
    );
  }
}

export default App;
