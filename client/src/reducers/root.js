export default function root( 
    state = {
        projects: [
            {
                title: "HearthStone Deck Builder",
                description: "This is a project that I made yada yada yada....",
                img: '',
                tech: ["Rails", "API", "SPA"],
                links: {
                    heroku: "https://www.youtube.com",
                    github: "https://github.com/SenseiCain/hearthstone-deck-builder"
                }
            },
            {
                title: "Clickyz",
                description: "Interactive mechanical keyboard editor. This was a personal project of mine portraying my appreciation of handmade things. It was a deep dive into the fundamentals of Sinatra, and a long rabbit hole into the wonders of JS.",
                img: '',
                tech: ["Sinatra", "WEBGL", "p5.js"],
                links: {
                    heroku: "https://clickyz.heroku.com",
                    github: "https://github.com/SenseiCain/clickyz"
                }
            },
            {
                title: "Sidetrack",
                description: "Reddit clone using client side rendering.",
                img: '',
                tech: ["Rails", "Auth", "MVC", "OOP"],
                links: {
                    heroku: "https://www.youtube.com",
                    github: "https://github.com/SenseiCain"
                }
            }
        ],
        activeIndex: 0
    }, 
    action) {
    let prevIndex;
    let newIndex;

    switch(action.type) {
        case "NEXT_PROJECT":
            prevIndex = state.activeIndex;
            newIndex = prevIndex + 1;

            if ( prevIndex === state.projects.length - 1) {
                return { ...state, activeIndex: 0 }
                
            } else {
                newIndex = prevIndex + 1;
                return { ...state, activeIndex: newIndex }
            }

        case "PREVIOUS_PROJECT":
            prevIndex = state.activeIndex;
            newIndex = prevIndex + 1;

            if ( prevIndex === 0 ) {
                return { ...state, activeIndex: state.projects.length - 1 }
                
            } else {
                newIndex = prevIndex - 1;
                return { ...state, activeIndex: newIndex }
            }
            

        default:
            return state;
    }
}