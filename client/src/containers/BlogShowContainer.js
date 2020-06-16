import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class BlogShowComponent extends Component {
    componentDidMount() {
        if (this.props.activeBlogTitle !== '') {
            const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@christian24cain";
            const activeBlogTitle = this.props.activeBlogTitle;
            
            const blogTitleEl = document.querySelector("#blog-title");
            const blogContentEl = document.querySelector("#blog-content");

            fetch(url)
                .then(resp => resp.json())
                .then(json => {
                    const blog = json.items.find(b => b.title === activeBlogTitle)
                    blogTitleEl.innerHTML = blog.title;
                    blogContentEl.innerHTML = blog.content;
                })
        }
    }

    render() { 

        if (this.props.activeBlogTitle === '') {
            return <Redirect to={"/blog"} />
        } else {

            return (
                <div id="blog-show" className="shadow">
                    <h1 id="blog-title"></h1>
                    <div id="blog-content"></div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({ activeBlogTitle: state.blogs.activeBlogTitle })

export default connect(mapStateToProps)(BlogShowComponent)