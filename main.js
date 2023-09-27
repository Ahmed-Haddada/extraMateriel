//your code here 
function smoothie(ord) {
    var smooth = ord
    let obj = {}
    obj.ingredient = [
        { ingredient: "Strawberries", price: 1.5 },
        { ingredient: "Banana", price: 0.5 },
        { ingredient: "Mango", price: 2.5 },
        { ingredient: "Blueberries", price: 1.0 },
        { ingredient: "Raspberries", price: 1.0 },
        { ingredient: "Apple", price: 1.75 },
        { ingredient: "Pineapple", price: 3.5 },
    ];
    obj.smooth = smooth
    obj.getCost = getCost
    obj.getPrice = getPrice
    obj.getName = getName
    return obj
}

let getCost = function () {
    let ord = this.smooth
    let obj = {}
    let res = 0
    for (let key of this.ingredient) {
        obj[Object.values(key)[0]] = Object.values(key)[1]
    }
    if (Object.keys(obj).length > 1) {
        ord.forEach(price => {
            res += obj[price]
        });
    } else {
        res = obj[ord]
    }
    console.log(`$${res}`)
    getPrice(res)
}
let getPrice = function (total) {
    let price = total + (total * 1.5)
    if (total) console.log(`$ ${price}`)
    return price
}
let getName = function () {

    let sort = this.smooth.sort()
    if (sort.length > 1) {
        console.log(`${sort} Fusion`)
    } else {
        console.log(`${sort} Smoothie`)
    }
}
s1 = smoothie(["Raspberries", "Strawberries", "Blueberries"])
s1.getCost()
s1.getPrice()
s1.getName()

