import React from 'react'

// would be good to dynamically render the Grid, will review long-term

const Grid = () => {
    return (
        <div className='landing-grid'>
            <div>
                <div>
                    <h3>Transform your brand</h3>
                    <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <button>LEARN MORE</button>
                </div>
                <div>image</div>
                <div>image</div>
                <div>
                    <h3>Stand out to the right audience</h3>
                    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Grid;