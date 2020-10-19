import React from 'react';

//The Main Menu returns all the available component's name available for navigation

const MainMenu = (props) => {
    return (
        <div className="MainMenu">
            <div>iPod.js</div>
            <div id="items">
                <div>Cover Flow</div>
                <div>Music</div>
                <div>Games</div>
                <div>Settings</div>
            </div>
        </div>
    );
}

export default MainMenu;