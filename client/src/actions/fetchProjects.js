const fetchProjects = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ANIMATION' });
        const url = "https://christiancain-api.herokuapp.com/projects";

        // LOCAL
        // const url = "http://localhost:3001/projects"

        fetch(url)
            .then(resp => resp.json())
            .then(json => {
                dispatch({ type: "ADD_PROJECTS", projects: json });
                dispatch({ type: "STOP_ANIMATION" });
            })

    }
}

export default fetchProjects;