import React from 'react';

//The Settings Component has the ability to increase and decrease the size of the iPod

class Settings extends React.Component {
    render() {
        return (
            <div className="Settings">
                <div> <i className="icon fa fa-fast-backward"></i> Decrease iPod's Size</div>
                <div> Increase <i className="fa fa-fast-forward icon"></i> iPod's Size</div>
            </div>
        );
    }  
}

export default Settings;