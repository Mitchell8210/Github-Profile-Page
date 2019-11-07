import React from 'react'
import Icon from '../lib/Icon'

export default function Header(props){


    
    return (
        <div className="header">
            <div className="header-left">
            <div className="githubIcon"><Icon className="gitHub" icon="github"></Icon></div>
            <input className="searchBox" type='text'/>
            <div className="headerLinks">
                <div>Pull Requests</div>
                <div>Issues</div>
                <div>Marketplace</div>
                <div>Explore</div>
            </div>
            </div>
            <div className="rightSideIcons">
            <div className="bellIcon">bell</div>
            <div className="plusSign">+</div>
            <div className="littlePic">My Pic</div>
            </div>
        </div>

    )
}

