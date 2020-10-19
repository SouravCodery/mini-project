
import React from 'react';
import MusicPlayer from './MusicPlayer';
import MusicMenu from './MusicMenu';


class Music extends React.Component {
    render(){
        const item = () => {
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