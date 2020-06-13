import React from 'react';
import { ReactComponent as PersonSVG } from '../images/person-at-computer-v2.svg';
import { ReactComponent as LampSVG} from '../images/lamp.svg';
import { ReactComponent as SkateboardSVG } from '../images/skateboard.svg';

const Header = () => {
    return (
        <div className="wrapper">
            <div className="header-container">
                <SkateboardSVG className="svg-skateboard-1" />
                <SkateboardSVG className="svg-skateboard-2" />
                <PersonSVG className="svg-person" />
                <LampSVG className="svg-lamp" />
            </div>
        </div>
    )
}

export default Header;