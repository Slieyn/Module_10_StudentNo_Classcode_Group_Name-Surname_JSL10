function findMostRecentBook(books) {
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}
const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'promises', 'async/await']);
function findIntersection(setA, setB) {
    return new Set([...setA].filter(item => setB.has(item)));
}
async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Awaiting the delay
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
document.getElementById("room3Result").textContent = message;
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("solveRoom").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                document.getElementById("resultRoom1").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'promises', 'async/await']);
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);  // Compare different sets
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                navigateLabyrinth(directions)
                    .then(message => {
                        document.getElementById("room3Result").textContent = message;  // Using textContent for safety
                    });
            });
    });
});

function findMostRecentBook(books) {
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    return new Set([...setA].filter(item => setB.has(item)));  // Correct logic
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        await new Promise(resolve => setTimeout(resolve, 1000));  // Adding async delay
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
document.addEventListener("DOMContentLoaded", () => {
    const solveRoomButton = document.getElementById("solveRoom");
    const resultRoom1Element = document.getElementById("resultRoom1");

    // Debugging: Check if the elements are found
    if (!solveRoomButton) {
        console.error("Element with ID 'solveRoom' not found.");
        return;
    }

    if (!resultRoom1Element) {
        console.error("Element with ID 'resultRoom1' not found.");
        return;
    }

    solveRoomButton.addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                resultRoom1Element.textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });
});
