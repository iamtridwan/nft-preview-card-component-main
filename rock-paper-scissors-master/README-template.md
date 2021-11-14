# Frontend Mentor - Rock, Paper, Scissors solution

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer

### Screenshot

![](images/rockpaper-desktop.png, images/rockpaper-inner.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/iamtridwan/rockpaperscissors)
- Live Site URL: [Add live site URL here](https://game-rock.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

During the course of the project, I learnt how to use the HTML storage API. The storage API,
lets us store data that can be referenced for future use. The storage comprise of the Local Storage and The Session Storage(Which was used for the project.) The session storage allows data be stored in the browser(more like cookie). This data is persist until the browser tab is
closed. for a longer storage the Local Storage could be used. The session storage is implemented in the javascript file as below:

```js
if (sessionStorage.length === 0) {
  sessionStorage.setItem("score", 0); // set initial score value
} else {
  scoreText.textContent = sessionStorage.getItem("score"); // update value as game plays
}
```

### Continued development

This is the bonus part of the project, and so I would love to include the other version comprising of only three buttons(rock, paper, scissors) only.Workin on making it an SPA.

### Useful resources

- [HTML Storage API](https://www.w3schools.org) - This helped me figure how to store persistent data for latter reference.

## Author

- Website - [iamridwan](https://github.com/iamtridwan.com)
- Frontend Mentor - [@iamtridwan](https://www.frontendmentor.io/profile/iamtridwan)
- Twitter - [@iamtridwan](https://www.twitter.com/iamtridwan)

## Acknowledgments

I like to give thanks to frontend mentor for the opportunity to work on this project.
Also W3schools for their tutorial on HTML Storage API
