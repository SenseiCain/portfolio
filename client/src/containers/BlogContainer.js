import React, { Component } from 'react';
import Footer from '../components/Footer';
import BlogLink from '../components/BlogLink';

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
                    <ul>
                        {this.generateBlogItems()}
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }
}

export default BlogContainer;