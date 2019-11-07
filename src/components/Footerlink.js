import React from 'react'
import Icon from '../lib/Icon'

export default function Footer(){


    return (
        <div className="footerContainer">
            <div className="footerLinks">
                <div className="copywrite">@2019 GitHub, Inc.</div>
                <div className="leftFooterLinks">
                <div>Terms</div>
                <div>Privacy</div>
                <div>Security</div>
                <div>Status</div>
                <div>Help</div>
                </div>
                <div><Icon icon="github"></Icon></div>
                <div className="rightFooterLinks">
                <div>Contact GitHub</div>
                <div>Pricing</div>
                <div>API</div>
                <div>Training</div>
                <div>Blog</div>
                <div>About</div>
                </div>
                
            </div>
        </div>
    )
}