export default function blogs(
    state = {
        items: [],
        activeBlogTitle: ''
    }, action
) {
    switch(action.type) {
        case("ADD_BLOG_TITLES"):
            return { ...state, items: action.blogs};

        case("SET_ACTIVE_BLOG"):
            console.log(action)
            return { ...state, activeBlogTitle: action.title}

        default:
            return state;
    }
}