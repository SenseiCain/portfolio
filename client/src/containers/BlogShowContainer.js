import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';

class BlogShowComponent extends Component {
    componentDidMount() {
        if (this.props.activeBlogTitle !== '') {
            const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@christian24cain";
            const activeBlogTitle = this.props.activeBlogTitle;
            
            const blogTitleEl = document.querySelector("#blog-title h1");
            const blogDateEl = document.querySelector("#blog-title h6");
            const blogContentEl = document.querySelector("#blog-content");

            this.props.startAnimation();

            fetch(url)
                .then(resp => resp.json())
                .then(json => {
                    const blog = json.items.find(b => b.title === activeBlogTitle);

                    blogTitleEl.innerHTML = blog.title;
                    blogDateEl.innerHTML = blog.pubDate;
                    blogContentEl.innerHTML = blog.content;

                    // Remove Medium GIFs
                    const aEls = document.querySelectorAll("#blog-content a");
                    aEls.forEach(a => {
                        if (a.href.includes("medium")) {
                            a.remove();
                        }
                    })

                    this.props.stopAnimation();
                })
        }
    }

    render() { 

        if (this.props.activeBlogTitle === '') {
            return <Redirect to={"/blog"} />
        } else {

            return (
                <div className="shadow">
                    <div id="blog-show">
                        <div id="blog-title">
                            <h1></h1>
                            <h6></h6>
                        </div>
                        <div id="blog-content"></div>
                        <Link to={"/blog"} className="back-btn">
                            Back
                        </Link>
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({ activeBlogTitle: state.blogs.activeBlogTitle });

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: () => dispatch({ type: "START_ANIMATION" }),
        stopAnimation: () => dispatch({ type: "STOP_ANIMATION" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogShowComponent)