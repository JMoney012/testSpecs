function logIn(username, password) {
    if (username.length === 0 || password.length === 0) {
        return false;
    } else  if (username=== "luke" || password === "pass"){
        return true;
    } else {
        return false;
    }
}

function createAccount(){

}



module.exports = {logIn};