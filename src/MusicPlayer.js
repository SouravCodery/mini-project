import React from 'react';
//React Audion Player has been used for Audio Player
import ReactAudioPlayer from 'react-audio-player';

//Music Player returns the Music Player Component with Song Cover, Title, Artist and Player Options

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