// Long javascript JS solution, faster than 89.39% of JavaScript online submissions 

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) 
{
   
    var myMap=new Map(), max1=0, resultWord="";
    var bannedSet=new Set();
    
    var newString = paragraph.toLowerCase().replace( /[.!?';]/g ,"");
    newString=newString.replace(/[,]/g," ")
    
    banned.forEach(function(value){
        bannedSet.add(value);
    })

    newString = newString.split(' ');

    for(var word of newString)
    {
        if(word=="")
            continue;
        if(bannedSet.has(word)==false)
        {
            if(myMap.get(word)==undefined)
             {
                 myMap.set(word,1);
             }
            else
            {
                 myMap.set(word,(myMap.get(word)+1) );
            }
        }   
    }

    myMap.forEach(function(value,key)
    {
        max1=Math.max(max1,value);
        if(max1==value)
            resultWord=key;          
    })

    return resultWord;
};