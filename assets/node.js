class Shape{}


//The logic for the error tests
Shape.prototype.isLongEnough = (userResponse) => {
    if(userResponse.length < 3)
    {
        return false;
    }
    else
    {
        return true;
    }
}

//Text color and shape color can share the same one
Shape.prototype.isColor = (userResponse) => {
    const colorNames = [
    "red", "blue", "green", "yellow", "orange", "purple", "pink", "black",
     "white", "gray", "brown", "cyan", "magenta", "olive", "maroon", "navy",
     "teal", "silver", "gold", 
    ];

    for(i = 0; i < colorNames.length; i++)
    {
        if(userResponse.toLowerCase() == colorNames[i])
        {
            return true;
        }
    }

    return false;
}

module.exports = Shape;