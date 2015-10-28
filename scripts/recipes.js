function addIngToRecipe(content) {
    $("div.body-text").append(
        [
        "<p>",
        content.quantity,
        content.unit,
        content.name,
        "</p>"
        ].join(" "))
}

$.getJSON('scripts/recipes.json', function(data) {         
    console.log(data);
    data.recipelist[0].recipe.ingredients.forEach(function (obj){
        addIngToRecipe(obj)
        })
  });