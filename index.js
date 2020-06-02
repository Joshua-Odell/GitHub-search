

function pull(username){
    fetch(`https://api.github.com/users/${username}/repos`)
    // need to add in the .then logic including an invalid request
        .then(response => response.json())
        .then (responseJson => {
            //console.log(responseJson);
            if (true){ // this indicator for success is not working
                responseHandler(responseJson);
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
    //this should for loop through the returned data selecting the repo name and the link to the repo then appending to a list.
    //let result = response.map
    let result = ""
    console.log(response.length)
    for (i=0; i<response.length; i++){
        name = response[i].name;
        console.log(name);
        link = response[i].html_url;
        console.log(link);
        temp = `<li> <a href=${link}>${name}</a>`;
        console.log(temp);
        result = result + temp;
        console.log(result);
    }
    display(result);
}


function display(result){
    //this function will display the processed response
    $('.response-list').empty();
    $('.response-list').html(result);
    // remove hidden class
}

function begin(){
    $('.submit').on("click", function(e){
        e.preventDefault();
        let username = $('#handle').val();
        pull(username);
    });
}


$(begin);