const get =() =>{
    var str = document.getElementById("text").value;
    string = str.replace(/\s+/g," ").trim()
    console.log(string)
    let word_count = 0;
    let char_count = 0;
    let sent_counter = 0;
    let space_counter = 0;
    let keywords ="";
    if (string.length == 0){
        word_count = -1
    }
    else{
        for(let i =0;i<string.length;i++){
        
            if (string[i] === ' '){
                word_count = word_count+1;
                space_counter += 1;
            }
            char_count++;
            if(string[i] ==='.'){
                sent_counter++;
            }
            
        }
    }
    let words = string.split(" ");
    
    for(let i=0;i<words.length;i++){
        if (words[i].length >7){
            keywords  += words[i]+" ";
        }
    }

    document.getElementById("words").innerHTML ='Total number of words detected : '+ parseInt(word_count+1);
    document.getElementById("characters").innerHTML ='Total number of characters detected : '+ parseInt(char_count);
    document.getElementById("spaces").innerHTML ='Total number of spaces detected : '+ parseInt(space_counter);
    document.getElementById("sentences").innerHTML ='Total number of sentences detected : '+ parseInt(sent_counter);
    document.getElementById("keyword").innerHTML ='keywords : '+ keywords;

}