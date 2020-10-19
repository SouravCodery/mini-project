import React from 'react';

class Settings extends React.Component {
    render() {
        //this.iPodSize();
        return (
            <div className="Settings">
                <div> <i className="icon fa fa-fast-backward"></i> Decrease iPod's Size</div>
                <div> Increase <i className="fa fa-fast-forward icon"></i> iPod's Size</div>
            </div>
        );
    }  
}

export default Settings;