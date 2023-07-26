class Shape{}

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