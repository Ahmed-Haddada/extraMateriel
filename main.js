//your code here 
function smoothie(ord) {
    let smooth = ord
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
// -------------------Methode 1-------------------

// var getCost = function () {
//     var res = 0
//     var ord = this.smooth
//     var obj = {}

//     for (var i = 0; i < this.ingredient.length; i++) {
//         var item = this.ingredient[i]
//         obj[item.ingredient] = item.price
//     }



//     for (var i = 0; i < ord.length; i++) {
//         var ingredientName = ord[i]
//         res += obj[ingredientName]
//     }

//     getPrice(res)
// }

// -------------------Methode 2-------------------

/* var getCost = function () {
    var ord = this.smooth
    var arr = []
    var res = 0
    for (var i of this.ingredient) {
        arr.push(i.ingredient)
    }
    var filter = arr.filter((ele) => {
        var pr, index;
        if (ord.length > 1) {
            for (var moreIng of ord) {
                if (moreIng == ele) {
                    index = arr.indexOf(moreIng)
                    pr = this.ingredient[index]
                    res += pr.price
                }
            }
        } else {
            index = arr.indexOf(...ord)
            pr = this.ingredient[index]
            res = pr.price
        }
    })
    getPrice(res)


} */

//---------------------Methode 3---------------
let getCost = function () {
    let ord = this.smooth
    let obj = {}
    let res = 0
    for (let key of this.ingredient) {
        obj[Object.values(key)[0]] = Object.values(key)[1]
    }

    ord.forEach(price => {
        res += obj[price]
    });

    console.log(`$${res}`)
    getPrice(res)
}

let getPrice = function (total) {
    let price = total + (total * 1.5)
    if (total) console.log(`$ ${price.toFixed(2)}`)
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
s1 = smoothie(["Mango"])
s1.getCost()
s1.getPrice()
s1.getName()

