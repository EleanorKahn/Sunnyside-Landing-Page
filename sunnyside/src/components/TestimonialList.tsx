import React from 'react'

const Testimonials = () => {
    return (
        <div className='testimony-list'>
            <h3>CLIENT TESTIMONIALS</h3>
            {/* goal would be to render this dynamically */}
            <li>
                <ul>
                    <li>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <h4>Name</h4>
                            <h5>Title</h5>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <h4>Name</h4>
                            <h5>Title</h5>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <h4>Name</h4>
                            <h5>Title</h5>
                        </div>
                    </li>
                </ul>
            </li>
        </div>
    );
};

export default Testimonials;