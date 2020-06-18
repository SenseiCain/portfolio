clickyz = Project.create(
    title: "Clickyz",
    description: "Interactive mechanical keyboard editor. Made using a custom 3D keyboard model and p5.js for interactivity.",
    img: "",
    github: "https://github.com/SenseiCain/clickyz",
    heroku: ""
)
clickyz.technologies.build([{title: "Sinatra"}, {title: "WEBGL"}, {title: "p5.js"}, {title: "Google Cloud"}])
clickyz.save

hearthstone = Project.create(
    title: "HearthStone Deck Builder",
    description: "SPA deck building application referencing a personal API, which is sourcing data from a community API.",
    img: "https://raw.githubusercontent.com/SenseiCain/hearthstone-deck-builder/master/screenshot.png",
    github: "https://github.com/SenseiCain/hearthstone-deck-builder",
    heroku: ""
)
hearthstone.technologies.build([{title: "OO JS"}, {title: "fetch API"}, {title: "SPA"}])
hearthstone.save

sidetrack = Project.create(
    title: "Sidetrack",
    description: "Server side rendered Reddit clone. This was a Flatiron project demonstrating key Rails fundamentals.",
    img: "",
    github: "https://github.com/SenseiCain/sidetrack",
    heroku: ""
)
sidetrack.technologies.build([{title: "MVC"}, {title: "ORM"}, {title: "Omniauth"}])
sidetrack.save