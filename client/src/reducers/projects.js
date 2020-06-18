export default function projectReducer( 
    state = {
        list: [],
        activeIndex: 0
    }, 
    action) {

    let prevIndex;
    let newIndex;

    switch(action.type) {
        case "ADD_PROJECTS":
            return { ...state, list: action.projects }

        case "NEXT_PROJECT":
            prevIndex = state.activeIndex;
            newIndex = prevIndex + 1;

            if ( prevIndex === state.list.length - 1) {
                return { ...state, activeIndex: 0 }
                
            } else {
                newIndex = prevIndex + 1;
                return { ...state, activeIndex: newIndex }
            }

        case "PREVIOUS_PROJECT":
            prevIndex = state.activeIndex;
            newIndex = prevIndex + 1;

            if ( prevIndex === 0 ) {
                return { ...state, activeIndex: state.list.length - 1 }
                
            } else {
                newIndex = prevIndex - 1;
                return { ...state, activeIndex: newIndex }
            }
            

        default:
            return state;
    }
}