import React from 'react';
import './App.css';
import './Display';
import Display from './Display';
import './Wheel';
import Wheel from './Wheel';
import './touch';
import ZingTouch from 'zingtouch';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        selected: 0,
        current: 1,
        prev: 1,
        CoverFlowCurrent: 0,
        CoverFlowPrev: 4,
        MusicPrev: 1,
        MusicCurrent: 1,
        MusicSelected: 0,
        scale: 1
    }
  }
 
  select = (val) => {
      this.setState({
          selected: val
      })
  }
  musicSelect = (val) => {
      this.setState({
          MusicSelected: val
      })
  }
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
