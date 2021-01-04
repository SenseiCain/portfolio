const fetchBlogTitles = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ANIMATION' });
        const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@christian24cain";

        fetch(url)
            .then(resp => resp.json())
            .then(json => {

                const formatDate = date => {
                    // 2020-12-16 to Dec. 2020
                    const d = new Date(date.split(' ')[0]);
                    const shortMonthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format;
                    const shortName = shortMonthName(d);
                    const year = d.getFullYear();
                    
                    return `${shortName} ${year}`
                }

                const blogs = json.items.map(i => ({ title: i.title, url: i.link, date: formatDate(i.pubDate) }));
                console.log(blogs)

                dispatch({ type: "ADD_BLOG_TITLES", blogs });
                dispatch({ type: "STOP_ANIMATION" })
            })
    }
}

export { fetchBlogTitles }