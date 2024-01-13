const containerElement = document.querySelector('.container');

getRandomRecipe();




async function getRandomRecipe(){
    const response = await fetch('https://week11-uzmw.onrender.com/random');
    const recipe = await response.json();

    const recipeName = recipe.recipe.recipename;
    const imageUrl = recipe.recipe.imageurl;
    const recipeInstructions = recipe.recipe.instructions;
    const ingredientsArray = recipe.ingredients;

    const recipeNameTitle = document.createElement('h2');
    const recipeImage = document.createElement('img');
    const instructionsBlock = document.createElement('p');
    const ingredientsList = document.createElement('ul');

    ingredientsArray.forEach(ingredient => {
        const ingredientElement = document.createElement('li');
        ingredientElement.innerHTML = ingredient;
        ingredientsList.appendChild(ingredientElement);
    });
    
    recipeNameTitle.innerHTML = recipeName;
    recipeImage.src = imageUrl;
    instructionsBlock.innerHTML = recipeInstructions;

    const footer = document.createElement('footer');
    footer.innerHTML = '&#169 2024 MariliisT All Rights Reserved';

    containerElement.appendChild(recipeNameTitle);
    containerElement.appendChild(recipeImage);
    containerElement.appendChild(ingredientsList);
    containerElement.appendChild(instructionsBlock);
    containerElement.appendChild(footer);

    console.log(recipeName);
    console.log(imageUrl);
}


