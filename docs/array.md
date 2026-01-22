# JavaScript Arrays

## JavaScript Array Basics

- **Definition**: A JavaScript array is an ordered collection of values, each identified by a numeric index. The values in a JavaScript array can be of different data types, including numbers, strings, booleans, objects, and even other arrays. Arrays are contiguous in memory, which means that all elements are stored in a single, continuous block of memory locations, allowing for efficient indexing and fast access to elements by their index.

```JavaScript
    const developers = ["Jessica", "Naomi", "Tom"];
```

- **Accessing Elements From Arrays**: To access elements from an array, you will need to reference the array followed by its index number inside square brackets. JavaScript arrays are zero based indexed which means the first element is at index 0, the second element is at index 1, etc. If you try to access an index that doesn't exist for the array, then JavaScript will return ``undefined``.

```JavaScript
    const developers = ["Jessica", "Naomi", "Tom"];
    console.log(developers[0]) // "Jessica"
    console.log(developers[1]) // "Naomi"

    console.log(developers[10]) // undefined
```

- **``length`` Property**: This property is used to return the number of items in an array.

```JavaScript
    const developers = ["Jessica", "Naomi", "Tom"];
    console.log(developers.length) // 3
```

- **Updating Elements in an Array**: To update an element in an array, you use the assignment operator (``=``) to assign a new value to the element at a specific index.

```JavaScript
    const fruits = ['apple', 'banana', 'cherry'];
    fruits[1] = 'blueberry';

    console.log(fruits); // ['apple', 'blueberry', 'cherry']
```

## Two Dimensional Arrays

- **Definition**: A two-dimensional array is essentially an array of arrays. It's used to represent data that has a natural grid-like structure, such as a chessboard, a spreadsheet, or pixels in an image. To access an element in a two-dimensional array, you need two indices: one for the row and one for the column.

```JavaScript
    const chessboard = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    ];

    console.log(chessboard[0][3]); // "Q"
```

## Array Destructuring

- **Definition**: Array destructuring is a feature in JavaScript that allows you to extract values from arrays and assign them to variables in a more concise and readable way. It provides a convenient syntax for unpacking array elements into distinct variables.

```JavaScript
    const fruits = ["apple", "banana", "orange"];

    const [first, second, third] = fruits;

    console.log(first); // "apple"
    console.log(second); // "banana"
    console.log(third); // "orange"
```

- **Rest Syntax**: This allows you to capture the remaining elements of an array that haven't been destructured into a new array.

```JavaScript
    const fruits = ["apple", "banana", "orange", "mango", "kiwi"];
    const [first, second, ...rest] = fruits;

    console.log(first); // "apple"
    console.log(second); // "banana"
    console.log(rest); // ["orange", "mango", "kiwi"]
```

## Common Array Methods

- **``push()`` Method**: This method is used to add elements to the end of the array and will return the new length.

```JavaScript
    const desserts = ["cake", "cookies", "pie"];
    desserts.push("ice cream");

    console.log(desserts); // ["cake", "cookies", "pie", "ice cream"];
```

- **``pop()`` Method**: This method is used to remove the last element from an array and will return that removed element. If the array is empty, then the value will be ``undefined``.

```JavaScript
    const desserts = ["cake", "cookies", "pie"];
    desserts.pop();

    console.log(desserts); // ["cake", "cookies"];
```

