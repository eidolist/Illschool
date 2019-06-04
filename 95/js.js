let row = document.querySelector(".row");
let search = document.querySelector(".search");
let btn = document.querySelector(".btn");

	let array =[
		{
			name:"Куртка",
			price:10000,
			url:"kurtka.jpg",
			brand:"h&m",
			size:"M",
			gender:"female"

		},
		
		{
			name:"Джинсы",
			price:8000,
			url:"5.jpg",
			brand:"levis",
			size:"L",
			gender:"male"

		},
		{
			name:"Жжинсы",
			price:2500,
			url:"jeanse1.jpg",
			brand:"zara",
			size:"M",
			gender:"female"

		},
		{
			name:"Вжинсы",
			price:3500,
			url:"jeanse2.jpg",
			brand:"zara",
			size:"L",
			gender:"female"

		},
		{
			name:"Футболка",
			price:1200,
			url:"tshirt2.jpg",
			brand:"asics",
			size:"L",
			gender:"male"

		},
		{
			name:"Футболка",
			price:900,
			url:"tshirt.jpg",
			brand:"h&m",
			size:"XS",
			gender:"female"

		},
		{
			name:"Куртка",
			price:15000,
			url:"20.jpg",
			brand:"the north face",
			size:"L",
			gender:"male"

		},
		{
			name:"Шапка",
			price:900,
			url:"9.jpg",
			brand:"nike",
			size:"nosize",
			gender:"male"

		},
		{
			name:"Носки",
			price:500,
			url:"socks.jpg",
			brand:"bonprix",
			size:"nosize",
			gender:"male"

		},
		// custom
		{
			name:"Ботинки",
			price:8900,
			url:"15.jpg",
			brand:"Gucci",
			size:"M",
			gender:"female"

		},

		{
			name:"Кепка",
			price:9999,
			url:"10.jpg",
			brand:"Levi's",
			size:"M",
			gender:"female"

		},

		{
			name:"noski",
			price:9887,
			url:"socks.jpg",
			brand:"РОСНЕФТЬ",
			size:"M",
			gender:"female"

		},

		{
			name:"asdsad",
			price:7540,
			url:"socks.jpg",
			brand:"bonprix",
			size:"nosize",
			gender:"male"

		},

	];


for (let i = 0; i<13; i++){
	
	
	gender = array[i].gender
	
	if(array[i].gender == "female" && array[i].size == "M" && array[i].price >= 500 && array[i].price <= 10000){
		let elem = document.createElement("div");
		elem.classList.add("col-3")
		elem.classList.add("h-100")
		row.appendChild(elem);

		let img = document.createElement("img");
		img.src = array[i].url;
		img.classList.add("w-100");
		elem.appendChild(img);

		let name = document.createElement('h2');
		name.innerText = array[i].name
		elem.appendChild(name);

		let price = document.createElement('p');
		price.innerText = "Цена: " + array[i].price
		elem.appendChild(price);

		let size = document.createElement('p');
		size.innerText = "Размер: " + array[i].size
		elem.appendChild(size);

		let gender = document.createElement('p');
		gender.innerText = "Пол: " + array[i].gender
		elem.appendChild(gender);

		let brand = document.createElement('p');
		brand.innerText = "Брэнд: " + array[i].brand
		elem.appendChild(brand);
	}
}
