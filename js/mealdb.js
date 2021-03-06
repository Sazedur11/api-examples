/*
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
    // console.log(url);
}
const displaySearchResult = meals => {
    const searchresult = document.getElementById('search-result');
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 20)}</p>
                </div>
            </div>
        `
        searchresult.appendChild(div)
    })
}
*/

const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const emtyMessage = document.getElementById('emty-field')
    if (searchText == '') {
        emtyMessage.innerHTML = 'No result found';
    }
    else {
        const mealDetails = document.getElementById('meal-details');
        mealDetails.innerHTML = '';
        emtyMessage.innerText = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

        const res = await fetch(url);
        const data = await res.json();
        displayFoodResult(data.meals)

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displayFoodResult(data.meals))
    }

}

/*
    asyns await and normal fetch same jinis. async use korle fetch ta ke amra variable diye likhte pari thle variable er pore await likhte hoi....
*/

const displayFoodResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';

    if (meals == null) {
        const errorMessage = document.getElementById('error-field')
        const div = document.createElement('div');
        div.classList.add('error')
        div.innerHTML = `<p class=" p-5 bg-danger text-center">Result Not Found</p>`
        searchResult.appendChild(div);
    }
    // console.log(meals)
    else {
        meals.forEach(meal => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="mealDetails(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `
            searchResult.appendChild(div)
        })
    }

}
/*-- single meal details --*/

const mealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
    // console.log(meal)
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text ">${meal.strInstructions.slice(0, 200)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary ">Go somewhere</a>
        </div>
    `;
    mealDetails.appendChild(div)
}