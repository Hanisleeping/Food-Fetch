async function food() {
    let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
        );
        let obj = await response.json();
        let foods = obj.meals;
        
        container.innerHTML = "";
        for (let food of foods) {
            let div = document.createElement("div");
            let h2 = document.createElement("h2");
            let img = document.createElement("img");


            div.className = "card bg-green-200 shadow-sm";
            img.className = "image";
            h2.className = "title mt-2 font-semibold text-lg";
            if (food.strMealThumb) {
                img.src = food.strMealThumb;
                img.alt = food.strMeal;
            }
            if (food.strMeal) {
                h2.textContent = food.strMeal;
            }
            div.appendChild(img);
            div.appendChild(h2);
            container.appendChild(div);
        }
}

let country = "";
let container = document.querySelector(".container");
let input = document.querySelector("#countryInput");
let button = document.querySelector("#searchBtn");

button.addEventListener("click", () => {
    country = input.value.trim();
    if (country) {
        food();
    }
});

document.addEventListener("keypress", (e) => {
    country = input.value.trim();
    if (e.key === "Enter" && country) {
        food();
    }
});