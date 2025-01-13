var buton = document.querySelectorAll(".btn")
var numberOfItems = document.querySelector(".cart .num")
var total = document.querySelector(".totalPrice")
var purchasedCars = document.querySelector(".purchasedCars")

var totalPrice = 0
var cars = ""


buton.forEach(function(item){
  item.onclick = function(){
    var itemParent = item.parentElement
    var price = itemParent.querySelector(".price").getAttribute("price")
    var info = itemParent.querySelector(".info")

    numberOfItems.textContent++
    totalPrice += +(price)
    total.innerHTML = "Total Price = " + totalPrice +"$"
    
    cars += (info.textContent + "&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;")
    purchasedCars.innerHTML = "Purchased Cars Are : " + cars
  }
})
