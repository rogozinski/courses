const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function (e) {
    /* preventing us from sending data from inputs to the website included in form properties */
    e.preventDefault();
    // const usernameInput = document.querySelectorAll("input")[0];
    // const tweetInput = document.querySelectorAll("input")[1];

    //username is taken from "name" property in our input
    //"this" stands for tweetForm
    const usernameInput = this.elements.username;
    const tweetInput = this.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);

    usernameInput.value = "";
    tweetInput.value = "";

});

const addTweet = (usernameInput, tweetInput) => {
    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");

    bTag.append(usernameInput);
    newTweet.append(bTag);
    newTweet.append(` - ${tweetInput}`);
    tweetsContainer.append(newTweet);
}