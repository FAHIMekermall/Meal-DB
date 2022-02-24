const loadData = () => {
    const inputField = document.getElementById("searchInputField");
    const inputFieldValue = inputField.value;
    inputField.value = '';
    if(inputFieldValue == ''){
        Swal.fire({
            icon: 'info',
            title: 'Input field is empty',
            width: 600,
            padding: '3em',
            color: '#716add',
            backdrop: `
              rgba(0,0,123,0.4)
              left top
              no-repeat
            `
          })
    }
    else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldValue}`)
        .then(res => res.json())
        .then(data => dataLoadDisplay(data.meals))
        .catch(error => console.log(error))
    }   
};

const dataLoadDisplay = meals => {
    meals.forEach(meal => {
        const cardContainer = document.getElementById("cardContainer")
        const newCard = document.createElement('div');
        newCard.classList.add('col')
        newCard.innerHTML = `
                  <div title="click for more instruction details" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">${meal.strInstructions.slice(0,100)}....</p>
                    </div>
                  </div>
        `
        cardContainer.appendChild(newCard)
        newCard.addEventListener("click", function(){
            const alertText = meal.strInstructions;
            Swal.fire(
                alertText
            )
        })
    });
}