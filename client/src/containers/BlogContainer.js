import React, { Component } from 'react';
import BlogLink from '../components/BlogLink';
import Footer from '../components/Footer';

class BlogContainer extends Component {
    constructor() {
        super();
        this.state = {
            titles: [
                "MVC Overview",
                "HearthStone Deck Builder application",
                "Clickyz application",
                "My Experience at Flatiron",
                "Some other blog I have yet to write"
            ]
        }
    }

    generateBlogItems = () => {
        return this.state.titles.map((t, i) => {
            return <BlogLink key={i} blog={{title: t}} />
        })
    }
    
    render() {
        return (
            <div className="wrapper">
                <div className="blog-container">
                    <h1>Blogs</h1>
                    <div id="blog-list">
                        {this.generateBlogItems()}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default BlogContainer;