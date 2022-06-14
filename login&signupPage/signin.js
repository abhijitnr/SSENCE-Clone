let mail = JSON.parse(localStorage.getItem("email"));

document.querySelector("form").addEventListener("submit", valData);
function valData(){
    event.preventDefault();
    let pass = document.querySelector("#password").value;
    for(let i = 0;i < mail.length; i++){
        if(pass === mail[i].password){
            document.querySelector("email").value = mail[i].email;
            //got the the homepage with the account logged in already, 
            // will add the same once the homepage is linked with all the pages
        }
        else{
            alert("Please enter the user id and password");
            document.querySelector("#password").value = "";
        }
    }
}