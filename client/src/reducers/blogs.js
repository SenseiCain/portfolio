export default function blogs(
    state = [], action
) {
    switch(action.type) {
        case("ADD_BLOG_TITLES"):
            return action.blogs;

        default:
            return state;
    }
}