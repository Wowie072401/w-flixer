function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

function handleLogin(event) {
    event.preventDefault(); 
    alert("Login successful! (This is just a placeholder)");
    closeLoginModal();
}
// Sample list of movies and TV shows
const mediaList = [
    "Breaking Bad",
    "Stranger Things",
    "The Witcher",
    "Avengers: Endgame",
    "Game of Thrones",
    "Interstellar",
    "The Dark Knight",
    "Inception",
    "The Mandalorian",
    "Dune",
    "Squid Game",
    "Money Heist",
    "Black Mirror"
];

function toggleSearch() {
    document.getElementById("searchInput").focus();
}

function filterResults() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let resultsDiv = document.getElementById("searchResults");

    // Clear previous results
    resultsDiv.innerHTML = "";

    // Filter the media list
    let filteredResults = mediaList.filter(item => item.toLowerCase().includes(input));

    // Show results if input is not empty
    if (input !== "" && filteredResults.length > 0) {
        resultsDiv.style.display = "block";
        filteredResults.forEach(item => {
            let link = document.createElement("a");
            link.href = "#"; // Change this to the actual movie/show page link
            link.innerText = item;
            resultsDiv.appendChild(link);
        });
    } else {
        resultsDiv.style.display = "none";
    }
}
