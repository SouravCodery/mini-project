import React from 'react';

//returns the circular neon div

const Games = () => {

    return (
        <div className="Games">
            <div id="gamePlate">
                    {/* Four span with class plates has been used to give blur filter of different values. It is visible when the border is hovered.  */}
                    <span class="plates"></span>
                    <span class="plates"></span>
                    <span class="plates"></span>
                    <span class="plates"></span>
                </div>
        </div>
    );
}

export default Games;