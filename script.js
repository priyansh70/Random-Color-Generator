// select container by class
const container = document.querySelector(".container");

// Now create 30 color container by js using loop
for (let i = 0; i < 30; i++) {
  // create color container
  const colorContainer = document.createElement("div");

  // now add class of .color-container
  colorContainer.classList.add("color-container");

  // now append it into main container
  container.appendChild(colorContainer);

  const color = randomColor();
  // now give them random color
  colorContainer.style.backgroundColor = color;

//   now add color code into color container 

colorContainer.innerText = color;
}

// Create random color function 

function randomColor()
{
    const char = '0123456789abcdef';
    let color = '#';
    for(let i=0; i<6; i++)
    {
        color += char[Math.floor(Math.random()*16)];
    }
    return color;
}