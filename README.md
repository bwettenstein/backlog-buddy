# backlog-buddy

This project is designed for users to search for films or television shows and add them to a backlog so they can keep track of what they want to watch. It's designed to help people keep track of the items they want to watch since we're living in a time where a plethora of quality television shows and films are releasing at a rapid rate.

It utilizes the [Omdb API](http://www.omdbapi.com) to make search requests and gather info on the shows and/or films that the user searches for. This was written in pure Javascript, while the styling was written in Sass. The Javascript was written using the module design pattern, where each Javascript file has code written in one giant Immediately Invoked Function Expression (IFFE). The project saves the backlog to your system using the LocalStorage method in Javascript. Additionally, the project is designed so that the webpage will dynamically update depending on what the user tries to do, instead of reloading the page each time the user interacts with the project.

As a huge fan of movies and film, I always found it really difficult to keep track of what I wanted to watch. Hence, I set out to make this app in order to make a simple, yet effective way for me to track my film/television content. Before, I was just using a OneNote document to keep track of stuff, but that proved to be cumbersome. Additionally, other apps that claim to track your watchlist require yyou to create an account, which I'm not a fan of, as I'd like to not give out my email unless I have to. This app allows me to keep track of the media I want to, without needing to give up my email.

# Url

https://backlog-buddy.netlify.app

# Credits

[Omdb API](http://www.omdbapi.com) - Providing the data and not giving me CORS errors.

[Fontawesome](https://fontawesome.com/) - Providing the icons I used for the back, add, and remove buttons.

[Webpack](https://webpack.js.org/) - Bundled the JS modules into one file.

[Live Server VSCode Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - GREATLY helped with local testing, so I didn't have to constantly reload the browser window whenever I modified the DOM.

[Live Sass Compiler VSCode Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) - Compiled all of the sass

[Traversy Media's Modern Javascript From the Beginning](https://www.udemy.com/course/modern-javascript-from-the-beginning/) - Introducing the module design method which I based the writing on. The "Tracalorie" project also introduced me to the uses of using the built in LocalStorage method.

# Struggles I encountered while creating this

I had never really worked with APIs in Javascript before this project; hence, this is basically my first introduction to JS promises and the fetch API. Because of that, choosing the API becamse a struggle as a lot of the movie/tv APIs were giving me CORS trouble whenever I made a request. Thankfully, OMDB never gave me such an issue which is why it was chosen.

This was also the first time I worked with JS modules, so keeping track of where code should go and how to import/export code was something I learned to get used to. Similarly, I started to use variables for the styling which made my life a lot easier. Upon advice from reddit and stack overflow, I put all the styling variables in its own folder which greatly cleaned up the main styling file.

The back button was also difficult to get working because I had to find a way to store the previous search results and make them reappear when the button would be clicked. I solved this by declaring a 'previousSearchTitle' variable in Omdb.js which would update whenever a new search result appeared, or the search result page changed. After doing this, I was able to just write methods that would grab whatever the previous search query was, which allowed me to repopulate the container with what was displayed to the user before they clicked on a specific search result.

Media Queries were also a brand new styling aspect that I used on this project to make it far more presentable on mobile/tablets than it was before. I also learned much more about flexbox while doing this because I had to change the flex-orientation to column instead of row or else the app would overflow on mobile devices.

On a minor note, I ended up using the forEach method throughout this project as it parsed through the API data with cleaner and less code than a regular for loop would have. Before I used forEach, I ended up copying the same for loop declarations throughout all the code, which got tedious to read.

# Possible future improvements

- Rewrite the API methods using Async and Await whenever applicable.
- Additionally, try to see if map, filter, and/or reduce could be used to parse the data in a quicker/cleaner way.
- Maybe rewrite this in a backend framework to reduce the necessary code

# Final thoughts

Despite being simple, I'm very glad I challenged myself and made this. It solved a problem, admittedly a small one, that I faced. I was able to walk out of this project knowing far more about how to interact with APIs in Javascript, how to use flexbox, and more about vanila JS as I never used a backend framework.
