document.addEventListener("DOMContentLoaded", () => {
    const solveRoomButton = document.getElementById("solveRoom");
    const resultRoom1Element = document.getElementById("resultRoom1");

    // Check if the elements are correctly referenced
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
document.getElementById("solveRoom3").addEventListener("click", () => {
    fetch('directions.json')
        .then(response => response.json())
        .then(directions => {
            navigateLabyrinth(directions)
                .then(message => {
                    // Use textContent for safety, unless you're inserting HTML
                    document.getElementById("room3Result").textContent = message;
                });
        });
});

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        await new Promise(resolve => setTimeout(resolve, 1000));  // Add await to pause
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React!";
}

