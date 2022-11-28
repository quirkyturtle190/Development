# Development

### Link to Deployed Website
https://quirkyturtle190.github.io/Development

### Goal and Value of the Application
The goal of the application is to be able to create a team of Pokemon based on your preferences. Currently, there are 
only a few pokemon and the only real stat to consider is base stats, but in the future more stats could be added. This
could later be used to build a team focusing solely on attack, defense, etc. The goal is to be able to use this Website
to build the best team that you can.

### Usability Principles Considered
I wanted this interface to be simplistic and easy on the eyes. For that reason there is a simple color scheme. Furthermore,
buttons can be easily differentiated by the change in color when hovering over them. Since a team of pokemon is only 6 pokemon, 
only 6 pokemon can be added at a team to stay true to the game. Futhermore, for ease of use, the pokemon can be filtered and sorted by 
attributes one might be interested in such as base stats, name, weight, etc.

### Organization of Components
The components are mostly organized into two parts, a cart item and a pokemon card. The pokemon cards contain a description of the
pokemon and their weight, height, pokedex number, and base stats. Whereas the cart item only consists of the attribute being aggregated
which in this case is base stats

### How Data is Passed Down Through Components
Data is passed down through components by utilizing props which are passed into the Components within the main app.


### How the User Triggers State Changes
The use triggers state change by either sorting, filtering, adding to cart, or removing from cart. This changes the state variables
which leads to the website changing to account for this change of state

