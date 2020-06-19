# Personal Portfolio

I created this portfolio for my final project at Flatiron.

This was made using create-react-app, in conjunction with Redux and React-Router. Data is being served from a seperate Rails server.

## Screenshot

<img src="https://raw.githubusercontent.com/SenseiCain/portfolio/master/preview.png" width="500px />

## APIs

Blog posts are being sourced in from Medium using a combination of Medium's RSS feed, and <a href="https://rss2json.com/" target="_blank">rss2json</a>.

Project information is loaded from an independent Rails API.

|   Name    |           Path            | HTTP Verb |                     Purpose                     |
| :-------: | :-----------------------: | :-------: | :---------------------------------------------: |
|   Index   |        /projects/         |    GET    |             Displays all project info           |

## Future Goals

Would like to have the Header component more interactive, and add a section overviewing technologies & skills.
