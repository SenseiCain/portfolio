export default function blogs(
    state = {
        titles: []
    }, action
) {
    switch(action.type) {
        case("ADD_BLOG_TITLES"):
            return { ...state, titles: action.titles };

        default:
            return state;
    }
}