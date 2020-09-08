import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			const scrollToTop = () => {
				const c = document.documentElement.scrollTop || document.body.scrollTop;
				if (c > 0) {
				  window.requestAnimationFrame(scrollToTop);
				  window.scrollTo(0, c - c / 6);
				}
			  };
			  scrollToTop();
		}
	}

	render() {
		return (
			<Fragment></Fragment>
		)
	}
}

export default withRouter(ScrollToTop)