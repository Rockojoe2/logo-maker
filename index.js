const inquirer = require("inquirer");
const fs = require("fs"); //Needed to perform file operations such as making a readme

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter text up to three characters!',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Enter the text color that you would like?',
      name: 'textColor',
    },
    {
        type: 'list',
        message: 'Select a shape from the following list',
        name: 'shape',
        choices: ["circle", "triangle", "square"],
    },
    {
        type: 'input',
        message: 'Enter the shape color that you would like?',
        name: 'shapeColor',
      },
    
  ])

  .then(function(response){
    //Used https://www.w3schools.com/graphics/svg_examples.asp to find a sample SVG. Below should give a red filled in circle with a height and width of 100.
    // const svgTest = `<svg width="100" height="100">
    // <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    // </svg>`;

    const text = response.text;
    const textColor = response.textColor;
    const shape = response.shape;
    const shapeColor = response.shapeColor;
    let svgCreated = "";

    if(shape == "circle")
    {
        svgCreated =`<svg width="300" height="200">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${shapeColor}" />
        <text x="35" y="55" fill="${textColor}" font-size="14">${text}</text>
        </svg>`;
    }
    else if(shape == "triangle")
    {
        svgCreated = `<svg width="300" height="200">
        <polygon points="50,5 90,90 10,90" fill="${shapeColor}" />
        <text x="35" y="65" fill="${textColor}" font-size="14">${text}</text>
        </svg>`;
    }
    else if(shape == "square")
    {
        svgCreated = `<svg width="300" height="200">
        <rect x="10" y="10" width="80" height="80" fill="${shapeColor}" />
        <text x="35" y="55" fill="${textColor}" font-size="14">${text}</text>
        </svg>`;
    }


    fs.writeFile('logo.svg', svgCreated, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg!')
    );

  }
  );