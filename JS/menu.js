let foodContainer = document.querySelector(".food-container");

let footitem = [
	{
		itemID: "a1",
		FoodName: "Chicken and Rice Bake",
		foodimg: "img/Chicken and rice bake.jpeg",
		price: "$13.88",
		type: "Entree",
		des: "Mexican chicken and rice, Mexican chicken and rice.",
		quantity: 0,
	},
	{
		itemID: "a2",
		FoodName: "Chilli con Canre",
		foodimg: "img/chilli_con_carne.jpeg",
		price: "$13.88",
		type: "Entree",
		des: "Served  over rice and with some corn chips for a hearty, warming meal full of Mexican spices.",
		quantity: 0,
	},
	{
		itemID: "a3",
		FoodName: "Family Nachos Tray Bake",
		foodimg: "img/FamilyNachosTrayBake.jpeg",
		price: "$13.88",
		type: "Entree",
		des: "Very cheesy, this Nachos Tray bake is perfect for sharing.",
		quantity: 0,
	},
	{
		itemID: "a4",
		FoodName: "Pulled Pork Tacos",
		foodimg: "img/Pulled Pork Tacos.jpeg",
		price: "$13.88",
		type: "Entree",
		des: "Mexican pulled pork tacos Made with a blend of Mexican flavour taco seasonings. Superb taco sauce that flavours the slow-cooked pork perfectly. Topped with melted Perfect Italiano Mexican Cheese and enjoy.",
		quantity: 0,
	},
	{
		itemID: "a5",
		FoodName: "Taquitos",
		foodimg: "img/Taquitos.jpeg",
		price: "$13.88",
		type: "Entree",
		des: "Mexican pulled pork tacos Made with a blend of Mexican flavour taco seasonings. Superb taco sauce that flavours the slow-cooked pork perfectly. Topped with melted Perfect Italiano Mexican Cheese and enjoy.",
		quantity: 0,
	},
	{
		itemID: "b1",
		FoodName: "Churros",
		foodimg: "img/churros.jpg",
		price: "$13.88",
		type: "Dessert",
		des: "Deep-fried dough coated in cinnamon sugar and dipped in chocolate or caramel",
		quantity: 0,
	},
	{
		itemID: "b2",
		FoodName: "Fried Ice Cream",
		foodimg: "img/fried ice cream.jpg",
		price: "$13.88",
		type: "Dessert",
		des: "Vanilla ice cream is already glorious, but when you fry it, All that crunch and flavor oh-so-dynamite!",
		quantity: 0,
	},
	{
		itemID: "b3",
		FoodName: "Dulce de Leche",
		foodimg: "img/dulce-de-leche.jpg",
		price: "$13.88",
		type: "Dessert",
		des: "Dulce de leche is sweetened milk, and it is phenomenal. It's a lot like caramel, but much better!",
		quantity: 0,
	},
	{
		itemID: "b4",
		FoodName: "Caramel Flan",
		foodimg: "img/Caramel-Flan.jpg",
		price: "$13.88",
		type: "Dessert",
		des: "Sweet and melt-in-you-mouth custard oozing with caramel sauce",
		quantity: 0,
	},
	{
		itemID: "c1",
		FoodName: "Horchata",
		foodimg: "img/horchata.jpg",
		price: "$13.88",
		type: "Drink",
		des: "Horchata, or orxata, is a name given to various beverages, which are generally plant-based, but sometimes contain animal milk.",
		quantity: 0,
	},
	{
		itemID: "c2",
		FoodName: "Lemonade",
		foodimg: "img/Lemonade.jpg",
		price: "$13.88",
		type: "Drink",
		des: "Lemon drink with salt",
		quantity: 0,
	},
	{
		itemID: "c3",
		FoodName: "Soda",
		foodimg: "img/Sodas.jpg",
		price: "$13.88",
		type: "Drink",
		des: "A choice of 4 different sodas",
		quantity: 0,
	},
];

const food = footitem.map((item) => {
	const listitem = `<div class="foodbox ${item.type}" id="${item.itemID}">
        <div class="content">
            <div class="c-image">
                <img src="${item.foodimg}" alt="">
            </div>
            <div class="c-info">
                <span class="c-title">${item.FoodName}</span>
                <p class="c-des">${item.des}</p>
                <span class="c-price">${item.price}</span>
                <div class="button-container">
                    <input onclick="subtract(${item.itemID})" type="image" src="img/dash.svg" class="minusbtn" name="minus" id="minusbtn"/>
                    <p id="itemQuantity">${item.quantity}</p>
                    <input onclick="add(${item.itemID})" type="image" src="img/plus.svg" class="plusbtn" name="plus" />
                </div>
            </div>
        </div>
    </div>`;
	foodContainer.innerHTML += listitem;
});

const foodbox = document.querySelectorAll(".foodbox");
const menu = document.querySelectorAll(".menu-nav");

menu.forEach((m) => {
	m.addEventListener("click", (e) => {
		console.log(e.target.innerHTML);
		foodbox.forEach((box) => {
			box.style.display = "none";
			if (e.target.innerHTML === "Entree") {
				if (box.classList.contains("Entree")) {
					box.style.display = "block";
				}
			} else if (e.target.innerHTML === "Dessert") {
				if (box.classList.contains("Dessert")) {
					box.style.display = "block";
				}
			} else if (e.target.innerHTML === "Drink") {
				if (box.classList.contains("Drink")) {
					box.style.display = "block";
				}
			}
		});
	});
});

function add(id) {
	let quant = id.querySelector("#itemQuantity");
	if (parseInt(quant.innerHTML) < 10) {
		quant.innerHTML = parseInt(quant.innerHTML) + 1;
	}
}
function subtract(id) {
	let quant = id.querySelector("#itemQuantity");

	if (parseInt(quant.innerHTML) > 0) {
		quant.innerHTML = parseInt(quant.innerHTML) - 1;
	}
}

// document.getElementById("minusbtn").onclick = subtract();
