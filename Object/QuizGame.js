const questions = [
  { category: "Math",
    question: "What is 2 + 3?",
    choices: ["4", "5", "6"],
    answer: "5" },

  { category: "HTML",
    question: "What is the purpose of the controls attribute in the audio element?",
    choices: [
      "It defines the audio file format for the browser to use.",
      "It adds built-in playback controls like play, pause, and volume adjustment.",
      "It specifies the source URL of the audio file."],
    answer: "It adds built-in playback controls like play, pause, and volume adjustment." },

  { category: "CSS",
    question: "What are some reasons why whitespace is important for good design?",
    choices: [
      "It improves readability and makes the layout easier to understand.",
      "It helps organize content into distinct sections.",
      "It reduces visual clutter and enhances user experience."],
    answer: "It improves readability and makes the layout easier to understand." },

  { category: "JavaScript",
    question: "What happens when you call (or execute) a function?",
    choices: [
      "The code inside the function will run and a value will be returned.",
      "The code inside the function will run and null will always be returned.",
      "A TypeError will be thrown and the program will crash."],
    answer: "The code inside the function will run and a value will be returned." },

  { category: "Math",
    question: "What is 100 / 4?",
    choices: ["25", "20", "30"],
    answer: "25" }
];


function getRandomQuestion (questions) {
  const question = Math.floor(Math.random() * questions.length);
  return questions[question];
}

function getRandomComputerChoice (choices) {
  const choice = Math.floor(Math.random() * choices.length)
  return choices[choice];
}

function getResults (getRandomQuestion, getRandomComputerChoice) {

}

console.log(questions);