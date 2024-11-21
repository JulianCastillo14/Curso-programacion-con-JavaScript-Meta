/*
Este programa nos permite recorrer las posiciones de una palabra y revisar si tiene una letra que deseemos revisar si la contiene.

Por ejemplo, si tenemos la palabra test y queremos revisar si tiene la letra t y en que posiciones la tiene. Esto lo podemos solucinar con la siguiente función letterFinder 
*/

//Definimos nuestra función
function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++){
        if (word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}

//Invocamos la función
letterFinder('test','t');