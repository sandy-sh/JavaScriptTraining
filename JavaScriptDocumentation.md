JavaScript Documentation

## String Basics

- Definition: A string is a sequence of characters wrapped in either single quotes, double quotes or backticks. Strings are primitive data types and they are immutable. Immutability means that once a string is created, it cannot be changed.
-  Characters from a String: To access a character from a string you can use bracket notation and pass in the index number. An index is the position of a character within a string, and it is zero-based.

```JavaScript
    const developer = "Jessica";
    developer[0] // J
```
- \n (Newline Character): You can create a newline in a string by using the \n newline character.

```JavaScript
    const poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
    console.log(poem);
```

- Escaping Strings: You can escape characters in a string by placing backlashes (\) in front of the quotes.

```JavaScript
    const statement = "She said, \"Hello!\"";
    console.log(statement); // She said, "Hello!"
```

## Template Literals (Template Strings) and String Interpolation

- Definition: Template literals are defined with backticks (`). They allow for easier string manipulation, including embedding variables directly inside a string, a feature known as string interpolation.

```JavaScript
    const name = "Jessica";
    const greeting = `Hello, ${name}!`; // "Hello, Jessica!"
```