"use strict";

const renderBtn = (pick) => {
  switch (pick) {
    case "scissors":
      return `<h3>The House Picked</h3>
             <article  class="scissors" aria-label="button">
                <div class="grey">
                <div class="scissors_img"></div>
                </div>
            </article>
            
            `;

    case "paper":
      return `<h3>The House Picked</h3>
             <article  class="paper" aria-label="button">
                <div class="grey">
                <div class="paper_img"></div>
                </div>
            </article>
            
            `;

    case "rock":
      return `<h3>The House Picked</h3>
        <article  class="rock" aria-label="button">
                <div class="grey">
                <div class="rock_img"></div>
                </div>
            </article>
        
        `;

    case "lizard":
      return `<h3>The House Picked</h3>
      <article  class="lizard" aria-label="button">
                <div class="grey">
                <div class="lizard_img"></div>
                </div>
            </article>`;

    case "spock":
      return `<h3>The House Picked</h3>
      <article  class="spock" aria-label="button">
                <div class="grey">
                <div class="spock_img"></div>
                </div>
            </article>`;
  }
};

export default renderBtn;
