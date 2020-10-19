import React from 'react';

//The Music Menu returns all the available component's name available for navigation in Music

const MusicMenu = () => {

    return (
        <div className="MusicMenu">
            <div>Music</div>
            <div id="items">
                <div>All Songs</div>
                <div>Artists</div>
                <div>Albums</div>
                <div>Genre</div>
            </div>
        </div>
    );
}

export default MusicMenu;