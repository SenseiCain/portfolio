export default function fetchBlogTitles() {
    return (dispatch) => {
        // dispatch({ type: 'STARTING_FETCH_REQUEST' });
        const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@christian24cain";

        fetch(url)
            .then(resp => resp.json())
            .then(json => {
                const titles = json.items.map(i => i.title);
                dispatch({ type: "ADD_BLOG_TITLES", titles });
            })
    }
}