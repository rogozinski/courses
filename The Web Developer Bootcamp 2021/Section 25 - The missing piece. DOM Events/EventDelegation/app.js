const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

/* if we leave our loop like this then we will be able to remove list element which are aready implemented in html code. but it won't work if we add new items by input */
// const liS = document.querySelectorAll("li");
// for (li of liS) {
//     li.addEventListener("click", function () {
//         li.remove();
//     })
// }

/* event delegation is a solution for that problem */
tweetsContainer.addEventListener("click", function (e) {

    e.target.nodeName === "LI" && e.target.remove();
});


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