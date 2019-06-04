let num = 100; //переменная- число
let text ="text"; //переменная-текст
let object = { //переменная - объект
	key1:"что-то" ,//ключ со значением
	key2:"что-то еще"
}
onclick = function(){} // клики(нажатие) на различные html элементы

style.height = "100px"; //меняет различные css свойства элементов
document.querySelector() // находит нужный элемент в html по классу 
alert() //всплывающее окно на странице
.innerHTML = num; //заменяет содержимое элемента
let proverka = function() {//создание функции
	alert('privet')
}
setTimeout(proverka,1000) //таймер

let elems = document.querySelectorAll(".название класса") //находит все элементы с одинаковым классом
elems[0]

let array = ["lol","kek",21,"hello"]; //массив
array[0];

for(let index = 0; index<2; index = index + 1){//цикл
	alert(index);
}

//получить то, что написано в <input>
.value;



if (   ==   ) {//условие
	alert("правильно")
} 


let func = function(arg) { //функция с аргументом
	alert(arg)
}
func(5000)


let rand = Math.random()*5 //случайное число до 5
let round = Math.round(rand) //округлить число 

.length //количество элементов 


//возвращение числа
let x = function(){
	return 17;
}

alert(x())


//функция вызывается каждую секунду
let interv = function(){
	alert("lol");
}

setInterval(interv,1000)

//создание div через javascript
let elem = document.createElement("div")
//поместить div в body
document.body.appendChild(elem)

if(color == "green"){

}else if(color == "red"){

}else if(color=="blue"){

}else{

}
//строгое условие ИИ, обязательно цена больше 800 и пол женский
if(price>=800 && gender=="female"){
	//что-то происходит
}

//нестрогое условие ИЛИ, если хотя бы одно из них правильно
if(text == "Привет" || text == "привет"){
	//что-то происходит
}