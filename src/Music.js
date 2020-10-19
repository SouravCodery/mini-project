import React from 'react';
import MusicPlayer from './MusicPlayer';
import MusicMenu from './MusicMenu';

//Music handles all the different music components available

class Music extends React.Component {
    render(){
        const item = () => {
            //As only two components were made in Music. So, We are returning the same component for different states
            switch(this.props.musicSelected) {
                case 0: return <MusicMenu/>;
                case 1: return <MusicPlayer/>;
                case 2: return <MusicPlayer/>;
                case 3: return <MusicPlayer/>;
                case 4: return <MusicPlayer/>;

                default: return <MusicMenu/>;
            }
        }
        return (
            <div className="Music">
                {item()}
            </div>
        );
    }
    
}

export default Music;