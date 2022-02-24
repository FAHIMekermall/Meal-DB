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
        .then(data => dataLoadDisplay(data))
        .catch(error => console.log(error))
    }   
};

const dataLoadDisplay = meals => {
    console.log(meals);
}