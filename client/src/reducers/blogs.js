export default function blogs(
    state = {
        items: []
    }, action
) {
    switch(action.type) {
        case("ADD_BLOG_TITLES"):
            return { ...state, items: action.blogs};

        default:
            return state;
    }
}