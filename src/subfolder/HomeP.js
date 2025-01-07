import React from 'react';
import Intro from './Intro.jsx';
import Welcome from './welcome.jsx';
import Offers from './offers.jsx';
import Package from './package.js';
import Facility from './facility.js';
import Feature from './Feature.js';

import Popup from './Popup.js';
function HomeP () {

    return(

        <div>
            <Intro/>
            <Welcome/>
            {/* <About/> */}
            <Offers/>
            <Package/>
            <Feature/>
            <Facility/>
            <Popup/>
        </div>

    );

}

export default HomeP;