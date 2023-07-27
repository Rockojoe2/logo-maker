const inquirer = require("inquirer");
const fs = require("fs"); //Needed to perform file operations such as making a readme

//Created a function to check if userInput is longer than three characters. Won't continue on unless true.
const isTextTooLong = function(userInput)
{
  if(userInput.length > 3)
  {
    return "Please make your input 3 characters or less";
  }
  return true;
}

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter text up to three characters!',
      name: 'text',
      validate: isTextTooLong,
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

    //If the shape is a circle, svgCreated will be a string that creates an index.html with the svg's of a circle inside of it.
    if(shape == "circle")
    {
        // svgCreated = `<svg width="300" height="200">
        // <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${shapeColor}" />
        // <text x="35" y="55" fill="${textColor}" font-size="14">${text}</text>
        // </svg>`;

        svgCreated = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        
        <svg width="300" height="200">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${shapeColor}" />
        <text x="35" y="55" fill="${textColor}" font-size="14">${text}</text>
        </svg>
            
        </body>
        </html>`
        
    }

     //If the shape is a triangle, svgCreated will be a string that creates an index.html with the svg's of a triangle inside of it.
    else if(shape == "triangle")
    {
        // svgCreated = `<svg width="300" height="200">
        // <polygon points="50,5 90,90 10,90" fill="${shapeColor}" />
        // <text x="35" y="65" fill="${textColor}" font-size="14">${text}</text>
        // </svg>`;

        svgCreated = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        
        <svg width="300" height="200">
        <polygon points="50,5 90,90 10,90" fill="${shapeColor}" />
        <text x="35" y="65" fill="${textColor}" font-size="14">${text}</text>
        </svg>
            
        </body>
        </html>`
    }

     //If the shape is a square, svgCreated will be a string that creates an index.html with the svg's of a square inside of it.
    else if(shape == "square")
    {
        // svgCreated = `<svg width="300" height="200">
        // <rect x="10" y="10" width="80" height="80" fill="${shapeColor}" />
        // <text x="35" y="55" fill="${textColor}" font-size="14">${text}</text>
        // </svg>`;

        svgCreated = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        
        <svg width="300" height="200">
        <rect x="10" y="10" width="80" height="80" fill="${shapeColor}" />
        <text x="35" y="55" fill="${textColor}" font-size="14">${text}</text>
        </svg>
            
        </body>
        </html>`
    }


    fs.writeFile('index.html', svgCreated, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg inside index.html!')
    );

  }
  );