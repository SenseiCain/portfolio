import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as LampSVG} from '../images/lamp.svg';
import { ReactComponent as SkateboardSVG } from '../images/skateboard.svg';
import Person from '../components/Person';
import { updateSVGColors } from '../scripts/Helper';

class Header extends Component {

    componentDidMount() {
        updateSVGColors();
    }

    render() {
        return (
            <div className="wrapper">
                <div className="header-container">
                    <SkateboardSVG className="svg-skateboard-1" />
                    <SkateboardSVG className="svg-skateboard-2" />
                    <Person isLoading={this.props.isLoading} />
                    <LampSVG className="svg-lamp" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { isLoading: state.loading.status }
}

export default connect(mapStateToProps)(Header);