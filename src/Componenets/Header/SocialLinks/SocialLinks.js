import React from 'react';
import facebook from '../../../Icons/facebook.svg'
import instagram from '../../../Icons/instagram.svg';
import linkedin from '../../../Icons/linkedin.svg';

function SocialLinks() {
    return (
        <div className="socialIcons">

            <a
                className="socialLinks"
                target="_newblank"
                href="https://www.facebook.com/SmartCode.am/">
                <img alt="facebook" src={facebook} className="facebook"/></a>
            <a
                className="socialLinks"
                target="_newblank"
                href="https://www.instagram.com/smartcode.am/">
                <img alt="facebook" src={instagram}/></a>
            <a
                className="socialLinks"
                target="_newblank"
                href="https://www.linkedin.com/company/smarttechnologyllc/">
                <img alt="facebook" src={linkedin}/></a>

        </div>
    )
}

export default SocialLinks