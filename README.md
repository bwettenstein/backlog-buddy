# backlog-buddy

This project is designed for users to search for films or television shows and add them to a backlog so they can keep track of what they want to watch. It's designed to help people keep track of the items they want to watch since we're living in a time where a plethora of quality television shows and films are releasing at a rapid rate.

It utilizes the [Omdb API](http://www.omdbapi.com) to make search requests and gather info on the shows and/or films that the user searches for. This was written in pure Javascript, while the styling was written in Sass. The Javascript was written using the module design pattern, where each Javascript file has code written in one giant Immediately Invoked Function Expression (IFFE). The project saves the backlog to your system using the LocalStorage method in Javascript. Additionally, the project is designed so that the webpage will dynamically update depending on what the user tries to do, instead of reloading the page each time the user interacts with the project.

# Url

https://backlog-buddy.netlify.app

# Credits

[Omdb API](http://www.omdbapi.com) - Providing the data
[Traversy Media's Modern Javascript From the Beginning](https://www.udemy.com/course/modern-javascript-from-the-beginning/) - Introducing the module design method which I based the writing on. The "Tracalorie" project also introduced me to the uses of using the built in LocalStorage method
