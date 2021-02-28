


document.getElementById("wordSubmit").addEventListener("click", function(event){

    event.preventDefault(); //This prevents browser from sending form info to the server like it normally would -> results in entire page reload
    const value = document.getElementById("wordInput").value;

    if (value===""){
        return;
    }
    console.log(value)

    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value;
    fetch(url)
        .then(function(response) {
            console.log(response)
            return response.json();
        }).then(function(json){
            if (json.meals ==null){
                document.getElementById('title').innerHTML= "<h2>" + "Sorry, it looks like we don't have a recipe for that. Try again! (Try 'Arrabiata' or 'Cream Cheese'!)" + "</h2>"
                document.getElementById('instructions').innerHTML = ""
                document.getElementById('ingredients').innerHTML = ""
                document.getElementById('list_recipes').innerHTML = ""
                return;
            }
            ingredients = ""
            ingredients+="<h3> Ingredients </h3>"
            console.log(json)
            title =json.meals[0]['strMeal']
            ingredients += "<ul>"
            Object.keys(json.meals[0]).forEach(key => {
                
                console.log()
                if (String(key).includes("Ingredient") && json.meals[0][key] != null && json.meals[0][key] != ""){

                    ingredients+="<li>"
                    ingredients+=json.meals[0][key]
                    ingredients+="</li>"
                    console.log(ingredients)
                    
                }
            });
            ingredients+="</ul>"
            instructions = "<h3> Instructions: </h3> <p>" + json.meals[0].strInstructions + "</p>";


            document.getElementById('ingredients').innerHTML = ingredients
            document.getElementById('instructions').innerHTML= instructions
            document.getElementById('title').innerHTML= "<h1>" + title + "</h1>" + "<h2> <em> Categories: " + json.meals[0].strArea + ", " + json.meals[0].strCategory + " </em></h2>"
            document.getElementById('list_recipes').innerHTML = ""
        })




        

        
    });







    document.getElementById("randomSubmit").addEventListener("click", function(event){

        event.preventDefault(); //This prevents browser from sending form info to the server like it normally would -> results in entire page reload


    
        const url = "https://www.themealdb.com/api/json/v1/1/random.php" 
        fetch(url)
            .then(function(response) {
                console.log(response)
                return response.json();
            }).then(function(json){
                if (json.meals ==null){
                    document.getElementById('title').innerHTML= "<h2>" + "Sorry, it looks like we don't have a recipe for that. Try again! (Try 'Arrabiata' or 'Cream Cheese'!)" + "</h2>"
                    document.getElementById('instructions').innerHTML = ""
                    document.getElementById('ingredients').innerHTML = ""
                    document.getElementById('list_recipes').innerHTML = ""
                    return;
                }
                ingredients = ""
                ingredients+="<h3> Ingredients </h3>"
                console.log(json)
                title =json.meals[0]['strMeal']
                ingredients += "<ul>"
                Object.keys(json.meals[0]).forEach(key => {
                    
                    console.log()
                    if (String(key).includes("Ingredient") && json.meals[0][key] != null && json.meals[0][key] != ""){
    
                        ingredients+="<li>"
                        ingredients+=json.meals[0][key]
                        ingredients+="</li>"
                        console.log(ingredients)
                        
                    }
                });
                ingredients+="</ul>"
                instructions = "<h3> Instructions: </h3> <p>" + json.meals[0].strInstructions + "</p>";
    
    
                document.getElementById('ingredients').innerHTML = ingredients
                document.getElementById('instructions').innerHTML= instructions
                document.getElementById('title').innerHTML= "<h1>" + title + "</h1>" + "<h2> <em> Categories: " + json.meals[0].strArea + ", " + json.meals[0].strCategory + " </em></h2>"
                document.getElementById('list_recipes').innerHTML = ""
            })
    

            
        });
    





        

document.getElementById("charSubmit").addEventListener("click", function(event){
event.preventDefault();
const value = document.getElementById("charInput").value;

if (value===""){
    return;
}
 //This prevents browser from sending form info to the server like it normally would -> results in entire page reload



const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=' + value
fetch(url)
    .then(function(response) {
        console.log(response)
        return response.json();
    }).then(function(json){
        console.log(json)
        if (json.meals ==null){
            document.getElementById('title').innerHTML= "<h2>" + "Sorry, it looks like we don't have a recipe for that. Try again! (Try 'Arrabiata' or 'Cream Cheese'!)" + "</h2>"
            document.getElementById('instructions').innerHTML = ""
            document.getElementById('ingredients').innerHTML = ""
            document.getElementById('list_recipes').innerHTML = ""
            return;
        }


        ingredients = ""
        ingredients+="<h3> Ingredients </h3>"
        console.log(json)
        title =json.meals[0]['strMeal']
        ingredients += "<ul>";
        results=""
        json.meals.forEach(meal=>{
           console.log(String(meal.strMeal[0]))
            str = meal.strMeal
            results+= "<p>"+ meal.strMeal + "</p>";
            
        });


        document.getElementById('list_recipes').innerHTML= results
        document.getElementById('instructions').innerHTML = ""
        document.getElementById('ingredients').innerHTML = ""
        document.getElementById('title').innerHTML = ""
                

    })


    
});



function getRecipe(name_recipe){
    debugger
    console.log("HERRO")

    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name_recipe;
    fetch(url)
        .then(function(response) {
            console.log(response)
            return response.json();
        }).then(function(json){
            if (json.meals ==null){
                document.getElementById('title').innerHTML= "<h2>" + "Sorry, it looks like we don't have a recipe for that. Try again! (Try 'Arrabiata' or 'Cream Cheese'!)" + "</h2>"
                document.getElementById('instructions').innerHTML = "";
                document.getElementById('ingredients').innerHTML = "";
                return;
            }
            ingredients = ""
            ingredients+="<h3> Ingredients </h3>"
            console.log(json)
            title =json.meals[0]['strMeal']
            ingredients += "<ul>"
            Object.keys(json.meals[0]).forEach(key => {
                
                console.log()
                if (String(key).includes("Ingredient") && json.meals[0][key] != null && json.meals[0][key] != ""){

                    ingredients+="<li>"
                    ingredients+=json.meals[0][key]
                    ingredients+="</li>"
                    console.log(ingredients)
                    
                }
            });
            ingredients+="</ul>"
            instructions = "<h3> Instructions: </h3> <p>" + json.meals[0].strInstructions + "</p>";


            document.getElementById('ingredients').innerHTML = ingredients
            document.getElementById('instructions').innerHTML= instructions
            document.getElementById('title').innerHTML= "<h1>" + title + "</h1>" + "<h2> <em> Categories: " + json.meals[0].strArea + ", " + json.meals[0].strCategory + " </em></h2>"

        })



}