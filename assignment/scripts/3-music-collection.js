console.log('***** Music Collection *****')

let collection = []; // Created array called collection.

function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}
// created function to add album/artist/year published to the array - collection, using the object - album. 
console.log(addToCollection('Revenge', 'XXXTENTACION', '2016'));
console.log(addToCollection('GO:OD AM', 'Mac Miller', '2015'));
console.log(addToCollection('Swimming', 'Mac Miller', '2018'));
console.log(addToCollection("LIFE'S A TRIP", 'Trippie Redd', '2018'));
console.log(addToCollection('Cozy Tapes, Vol.2: Too Cozy', 'A$AP Mob', '2017'));
console.log(addToCollection('LONG.LIVE.A$AP', 'A$AP Rocky', '2013'));
console.log(collection);

// creating empty array 
let z = []
// created an array with one item
let forty = ['six']
function showCollection(array) {
    console.log(array.length);
    for(let x = 0; x < array.length; x++) {
        if(x < array.length) {
            console.log(array[x].title + ' by ' + array[x].artist + ' published in ' + array[x].yearPublished);
        }
    }
}
showCollection(collection); // output looks good. shows all value's in the collection array and the number of items in the array.
showCollection(z); // output shows the number of values in the array only. 
showCollection(forty); 
// output shows the number of values in the array and undefined by undefined published 
// in undefined. this is because there are no titles/artists/year published added to the array forty. 



function findByArtist(artist) {
    let result = [];
    for (let i = 0; i < collection.length; i++) {
        if (artist == collection[i].artist) {
            result.push(artist);
            return result;
        }
    }
    return [];
}
console.log(findByArtist('Mac Miller'));
console.log(findByArtist('XXXTENTACION'));
console.log(findByArtist('Trippie Redd'));
console.log(findByArtist('A$AP Mob'));
console.log(findByArtist('A$AP Rocky'));
console.log(findByArtist('A$AP Rock'));
console.log(findByArtist('Beyonce'));

// artists that are in the collection array are logged to the console and added to the result array.
// artists that are not in the collection array are not logged to the console, they return an empty array. 


