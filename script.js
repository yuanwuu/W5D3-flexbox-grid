let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  const mainTitle = document.getElementById("main-title");
  mainTitle.innerHTML = "Hi, Welcom to Dom's! ";
  // document.getElementById('main-title').innerHTML = "Hi, welcome to DOM's!" <-- 1 liner.

  // Part 2
  //Select the bodyand change the background-color to a new color of your choice.
  document.body.style.backgroundColor = '#F7E197';
  // const bodyEl = document.getElementById('body');
  // bodyEl.style.backgroundColor = "blue";
  // document.getElementById('body').style.backgroundColor = 'blue';

  // Part 3
  //Select DOM's Favorite Things list and remove the last list item.
  const rmChild = document.getElementById("favorite-things");
  rmChild.removeChild(rmChild.children[5]);



  // Part 4
  //Select all .special-titleclass elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements

  const ftSize = document.querySelectorAll(".special-title");
  ftSize.forEach((title) => {
    title.style.fontSize = '2rem';
    
  });


  // Part 5
  //Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  const pastRaces = document.getElementById('past-races')
  pastRaces.removeChild(pastRaces.children[3])


  // Part 6
  // Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.
  const newLi = document.createElement('li');
  newLi.textContent = 'New York';
  document.getElementById('past-races').appendChild(newLi)
  //console.log(pastRaces)


  // Part 7
//Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. Think about what order you want to create the elements, and what order you want to append them in.
  // const post = document.createElement('div');
  // post.classList.add('blog-post', 'purple');
  // post.textContent = '<h2>NEW YORK</h2>';
  
  //document.getElementById('blog-post').append(post)

  const post = document.createElement('div');
  post.classList.add('blog-post', 'purple');
  const heading = document.createElement('h2');
  heading.textContent = 'NEW YORK';
  post.appendChild(heading);
  //document.getElementById('blog-post').appendChild(post);

  console.log(post)

  // Part 8

  // Part 9
});
