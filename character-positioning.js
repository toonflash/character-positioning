function characterPosition(string) {
    // add empty array for each character that logs it's index

    var noSpaceString = string.split(" ").join('');
    var letterCounts = {};

    for (var i = 0; i < noSpaceString.length; i++){

        if (!letterCounts[noSpaceString[i]]) {
            // add empty array for i current position starting at 0
            letterCounts[noSpaceString[i]] = [i];
        } else {
            // push aditional postion into array if more than
            // one instance of character
            letterCounts[noSpaceString[i]].push(i);
        }
    }

    console.log(letterCounts);

 };
 
 characterPosition("lighthouse in the house");