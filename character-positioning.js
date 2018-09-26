function letterPosition(string) {

    var noSpaceString = string.split(" ").join('');
    var letterCounts = {};

    for (var i = 0; i < noSpaceString.length; i++){
        // go one leter at a time
        // increment count for each leter
        // store each count into object

        // if letter doesn not yet exist in object initiate to 1
        if (!letterCounts[noSpaceString[i]]) {
            letterCounts[noSpaceString[i]] = 1;
        // otherwise increment
        } else {
            letterCounts[noSpaceString[i]] += 1;
        }
    }

    console.log(letterCounts);

 };
 
 letterPosition("lighthouse in the house");