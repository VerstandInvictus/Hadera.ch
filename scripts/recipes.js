function addParaToRecipe(content) {
    $("div.body-text").append("<p>" + content + "</p>");
}

$.getJSON('scripts/recipes.json', function(data) {         
    console.log(data);
    data.recipelist[0].recipe.ingredients.forEach(function (obj){
        Object.keys(obj).forEach(function(prop) {
            addParaToRecipe(obj[prop])
            console.log(prop)
        })
  });
});