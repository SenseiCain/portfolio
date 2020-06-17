export default function loading(
    state = { status: false },
    action
) {
    switch(action.type) {
        case "START_ANIMATION":
            return { status: true }

        case "STOP_ANIMATION":
            return { status: false }

        default:
            return state;
    }
}