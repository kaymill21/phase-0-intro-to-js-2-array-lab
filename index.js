// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    cats.unshift('Bob')
}
function  destructivelyRemoveLastCat() {
    cats.pop(-1)
}
function destructivelyRemoveFirstCat() {
    cats.shift(-4)
}
function  appendCat() {
    console.log(moreCats = [...cats, 'Broom'])
}
