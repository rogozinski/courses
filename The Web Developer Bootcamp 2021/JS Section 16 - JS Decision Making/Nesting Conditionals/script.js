//Password must be 6+ character
//Password cannot include space

const password = prompt("Please enter a new password: ");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid Password");
    }
    else {
        console.log("Password cannot contain spaces!");
    }
}
else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters!");
}