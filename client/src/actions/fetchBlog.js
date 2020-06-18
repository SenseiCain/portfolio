const fetchBlogTitles = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ANIMATION' });
        const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@christian24cain";

        fetch(url)
            .then(resp => resp.json())
            .then(json => {
                const blogs = json.items.map(i => ({ title: i.title, url: i.link }));

                dispatch({ type: "ADD_BLOG_TITLES", blogs });
                dispatch({ type: "STOP_ANIMATION" })
            })
    }
}

export { fetchBlogTitles }