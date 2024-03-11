
# Pokedex using PokeApi

This Pokedex retrieves all of its data from the PokeApi and features all 151 pokemon from the First Generation!

**Link to project:** http://recruiters-love-seeing-live-demos.com/
## Technologies

HTML /
TailwindCSS /
React
## 🚀 About This Project

This project is pretty straightforward to use, since it was just made to showcase all 151 of the 1st Generation pokemon and their types. You can scroll down the pokedex to see the full roster, click on each pokemon to see a little animation and also hear what each of them sound like. There's even a theme song in the background (only if you turn your autoplay settings **ON** in your broswer).
## Project's Purpose

The purpose of this project was to properly learn how to use the useEffect hook in React and fetch data from an API.

## Challenges

As stated in the about section, this pokedex features all 151 of the 1st Generation pokemon. 

The first challenge was trying to find a way to display all of those pokemon whilst not punishing the user with a **long loading time like GTA V** 😭.

The second challenge was trying to find a way to display a Pokemon's type(s), since some of them only had 1 type instead of 2.

## Solutions

For the loading time, my first solution was just about as long as GTA V's loading time 😭.

I basically used a for loop, stored all the fetched data in an array until the loop was done, then I stored it all in a useState array and displayed it to the user once all the data had been loaded. The user would have to wait about 30 seconds before they can use the pokedex.

My second solution was not much different from the first, but the loading time was drastically reduced! Some would say it was actually **Blazingly Fast**

For this one, I still used a for loop and stored the fetched data in an array, but I used the setState function inside of the for loop this time. When all of the data was being pushed into the array, I mapped the data from the array to the useState hook and displayed it to the user. The user would probably have to wait 1 second before being greeted with an interactive pokedex.


The solution to the second challenge was to basically check if the length of the pokemon type array was either 1 or 2 and get their types based on the outcome. If it was 1, the first type badge would display, but the second badge would be blank. If it was 2, both badges would be displayed.




Technologies used: HTML, TailwindCSS and React.
## Run Locally

Clone the project

```bash
  git clone https://github.com/Techin4Fun/pokedex-project.git
```

Go to the project directory

```bash
  cd pokedex-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Lessons Learned

I learned a lot about asynchronous JavaScript with fetching data from an API and the quirks of the useEffect hook.


Aside from that, I'm still trying to look for ways to properly optimize the code to make it **Blazingly Fast** (because I'm obsessed with performance) and refactor the codebase to increase readability for anyone that wants to dive into the code and see how it works.

**The greatest takeaway from this project:** Please don't forget to insert a second argument in the useEffect hook or you will suffer the consquences when fetching multiple pieces of data from an API 🔥💻🔥.


## License

[MIT](https://choosealicense.com/licenses/mit/)

