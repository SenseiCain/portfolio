export default function projectReducer( 
    state = {
        list: [
            {
                title: "HearthStone Deck Builder",
                description: "This is a project that I made yada yada yada....",
                img: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_weight_other/1800x1200_cat_weight_other.jpg?resize=600px:*",
                tech: ["Rails", "API", "SPA"],
                links: {
                    heroku: "https://www.youtube.com",
                    github: "https://github.com/SenseiCain/hearthstone-deck-builder"
                }
            },
            {
                title: "Clickyz",
                description: "Interactive mechanical keyboard editor. This was a personal project of mine portraying my appreciation of handmade things. It was a deep dive into the fundamentals of Sinatra, and a long rabbit hole into the wonders of JS.",
                img: "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg",
                tech: ["Sinatra", "WEBGL", "p5.js"],
                links: {
                    heroku: "https://clickyz.heroku.com",
                    github: "https://github.com/SenseiCain/clickyz"
                }
            },
            {
                title: "Sidetrack",
                description: "Reddit clone using client side rendering.",
                img: "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?resizemode=4&width=400",
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