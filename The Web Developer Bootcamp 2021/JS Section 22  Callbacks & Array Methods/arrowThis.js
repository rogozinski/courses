// const person = {
//     firstName: "Viggo",
//     lastName: "Mortensen",
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}` /* regular function: displays "Viggo Mortensen" */
//     }
// }

const person = {
    firstName: "Viggo",
    lastName: "Mortensen",
    fullName: () => {

        return `${this.firstName} ${this.lastName}` /* arrow function: displays "undefined undefined" */
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this); // "this" is a window object
            console.log(this.fullName())
        }, 3000)
    }

}

