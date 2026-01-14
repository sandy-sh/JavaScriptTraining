/*
User Stories:

1. You should have an array of objects named books where each object in the array should have a string title, 
another string authorName, and a number releaseYear.
2. Your books array should have a minimum of three objects.
3. You should have a callback function named sortByYear that accepts two books as parameter for sorting the array.
4. The sortByYear function should return -1 if the releaseYear of the first book is smaller than that of the second book.
5. The sortByYear function should return 1 if the releaseYear of the first book is bigger than that of the second book.
6. The sortByYear function should return 0 if both releaseYear values are equal.
7. You should filter out books written after a certain year such as 1950 from the books array 
and save the filtered array in a new array named filteredBooks.
8. You should sort the books in the filteredBooks array according to their releaseYear in ascending order. 
You learned in a prior lesson that the sort() method will sort the array in place. This means the filteredBooks array will be mutated.
*/


const books = [
    {
        title: 'Your Next Five Moves: Master the Art of Business Strategy',
        authorName: 'Patrick Bet-David and Greg Dinkin',
        releaseYear: 2001,
    },
    {
        title: 'Atomic Habits',
        authorName: 'James Clear',
        releaseYear: 2002
    },
    {
        title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
        authorName: 'Patrick Bet-David',
        releaseYear: 2000
    },
    {
        title: 'The Embedded Entrepreneur',
        authorName: 'Arvid Kahl',
        releaseYear: 2003
    },
    {
        title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
        authorName: 'Jon Gordon',
        releaseYear: 2001
    },
    {
        title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
        authorName: 'Jeff DeGraff and Staney DeGraff',
        releaseYear: 2005
    },
    {
        title: 'Rich Dad Poor Dad',
        authorName: 'Robert Kiyosaki and Sharon Lechter',
        releaseYear: 1998
    },
    {
        title: 'Zero to Sold',
        authorName: 'Arvid Kahl',
        releaseYear: 1999
    },
];

function sortByYear(book1, book2) {
    if (book1.releaseYear < book2.releaseYear) return -1;
    else if (book1.releaseYear > book2.releaseYear) return 1;
    else return 0;
}

const filteredBooks = books.filter(book => book.releaseYear <= 2000);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
