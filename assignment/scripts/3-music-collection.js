console.log('***** Music Collection *****')
//- Create a variable `collection` that starts as an empty array.
let collection = [];
//- Add a function named `addToCollection`. This function should:
//  - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//  - Create a new object having the above properties
//  - Add the new object to the end of the `collection` array
//  - Return the newly created object
function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}
//- Test the `addToCollection` function:
//  - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//  - Console.log each album as added using the returned value.
//  - After all are added, console.log the `collection` array.
console.log(addToCollection('Revenge', 'XXXTENTACION', '2016'));
console.log(addToCollection('The Carter IV', 'Lil Wayne', '2011'));
console.log(addToCollection('Swimming', 'Mac Miller', '2018'));
console.log(addToCollection("LIFE'S A TRIP", 'Trippie Redd', '2018'));
console.log(addToCollection('Cozy Tapes, Vol.2: Too Cozy', 'A$AP Mob', '2017'));
console.log(addToCollection('LONG.LIVE.A$AP', 'A$AP Rocky', '2013'));
console.log(collection);
//- Add a function named `showCollection`. This function should:
//  - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//  - Console.log the number of items in the array.
//  - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
function showCollection(array) {
    console.log(collection.length);
    for(let i = 0; i < array.length; i++) {
        if(i < array.length) {
            console.log(collection[i].title + ' by ' + collection[i].artist + ' published in ' + collection[i].yearPublished);
        }
    }
}
showCollection(collection);
//- Test the `showCollection` function.
//- Add a function named `findByArtist`. This function should:
//  - Take in `artist` (a string) parameter
//  - Create an array to hold any results, empty to start
//  - Loop through the `collection` and add any objects with a matching artist to the array.
//  - Return the array with the matching results. If no results are found, return an empty array.

//- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

//> When testing your functions, write all tests in the JavaScript file!
let result = [];
function findByArtist(artist) {
    for (x = 0; x < collection.length; x++) {
        if (artist == collection[x].artist) {
            result.push(artist);
            return artist;
        }
    }
    return [];
}
console.log(findByArtist('Mac Miller'));
console.log(findByArtist('XXXTENTACION'));
console.log(findByArtist('Lil Wayne'));
console.log(findByArtist('Trippie Redd'));
console.log(findByArtist('A$AP Mob'));
console.log(findByArtist('A$AP Rocky'));
console.log(findByArtist('A$AP Rock'));
console.log(findByArtist('Beyonce'));
console.log(result);


//### Stretch goals

//- Create a function called `search`. This function should:
//  - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
  //```
//  { artist: 'Ray Charles', year: 1957 }
//  ```
//  - The returned output from `search` should meet these requirements:
//    - Return a new array of all items in the `collection` matching *all* of the search criteria.
  //  - If no results are found, return an empty array.
//    - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

//- Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//  - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//  - Update `search` to allow a `trackName` search criteria.
//  - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
//```
//    TITLE by ARTIST, published in YEAR:
//    1. NAME: DURATION
//    2. NAME: DURATION
//    3. NAME: DURATION
//    TITLE by ARTIST, published in YEAR:
//    1. NAME: DURATION
//    2. NAME: DURATION
//```

//> Make sure to test all your code!



//## Assignment Submission
//Check in your repo, then turn in your work via the Assignment Portal, as usual and don't hesitate to hit up the Slack channel as needed!