
import React from 'react';
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";

const  Widget = ()=>{

    (function(){
        var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
        i.src = "https://cdn.curator.io/published/ae0376e3-b4bc-4ae4-8cae-c25c8f45edd8.js";
        e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
    })();
    
    return(
        <div className="">
            <div id="curator-feed-default-feed-layout">
                <a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a>
            </div>
        </div> 
    )
}

Widget.prototype = {
    state: PropTypes.object,
}

export default setup(Widget);   