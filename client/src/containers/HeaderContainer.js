import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as LampSVG} from '../images/lamp.svg';
import { ReactComponent as SkateboardSVG } from '../images/skateboard.svg';
import Person from '../components/Person';

class Header extends Component {
    render() {
        return (
            <section id="header" className="wrapper">
                <SkateboardSVG id="skateboard-1" className="skateboard show-desktop" />
                <SkateboardSVG id="skateboard-2" className="skateboard show-desktop" />
                <Person isLoading={this.props.isLoading} />
                <LampSVG id="lamp" className="show-desktop" />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return { isLoading: state.loading.status }
}

export default connect(mapStateToProps)(Header);