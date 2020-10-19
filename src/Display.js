import React from 'react';
import MainMenu from './MainMenu';
import CoverFlow from './CoverFlow';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';

//Here we have used the selected state to navigate throught the different components

class Display extends React.Component {
    render(){
        //Function to render the component as per the state
        const item = () => {
            switch(this.props.selected) {
                case 0: return <MainMenu/>;
                case 1: return <CoverFlow />;
                case 2: return <Music musicSelected = {this.props.musicSelected} />;
                case 3: return <Games />;
                case 4: return <Settings />;

                default: return <MainMenu/>;
            }
        }
        return (
            <div className="Display">
                {item()}
            </div>
        );
    }
    
}

export default Display;