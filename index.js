let username = '';

function pull(username){
    fetch(`https://api.github.com/users/${username}/repos`)
    // need to add in the .then logic including an invalid request
        .then(response => response.json())
        .then (responseJson => {
            if (true){ // this indicator for success is not working
                responseHandler(responseJson.message);
                console.log("success");
            }
            else {
                console.log("error")
                //throw new Error (responseJson);
            }
        });
}

function responseHandler(response){
    //this function will format the API response
    console.log(response);
}

function display(){
    //this function will display the processed response
}

function begin(){
    $('.submit').on("click", function(e){
        e.preventDefault();
        username = $('#handle').val();
        pull(username);
    });
}


$(begin);