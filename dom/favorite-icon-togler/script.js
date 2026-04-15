const favoriteIcons = document.querySelectorAll(".favorite-icon");

favoriteIcons.forEach((favoriteIcon) => {
    favoriteIcon.addEventListener("click", () => {
        if (favoriteIcon.classList.contains("filled")) {
            favoriteIcon.classList.remove("filled");
            favoriteIcon.innerHTML = "&#9825;"; // Empty heart
        } else {
            favoriteIcon.classList.add("filled");
            favoriteIcon.innerHTML = "&#10084;"; // Filled heart
        }
    });
});

// const favoriteIcons = document.querySelectorAll(".favorite-icon");

// favoriteIcons.forEach((favoriteIcon) => {
//     favoriteIcon.addEventListener("click", () => {
//         const isFilled = favoriteIcon.classList.toggle("filled");
//         favoriteIcon.innerHTML = isFilled ? "&#9829;" : "&#9825;";
//     });
// });