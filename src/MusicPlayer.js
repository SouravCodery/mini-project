import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const MusicPlayer = () => {
    return (
        <div className="MusicPlayer">
            <div id="song">
                <div id="songCover">
                    
                </div>
                <div id="songDetail">
                    <h3>
                        Ukele
                    </h3>
                    <h5>
                        Bensound
                    </h5>
                </div>
            </div>
                <ReactAudioPlayer id="player"
                    controls
                    src='https://www.bensound.com/bensound-music/bensound-ukulele.mp3'
                    autoPlay
                />
        </div>
    );
}

export default MusicPlayer;