Zadania ze Zmiennych
// a) Zadeklaruj zmienną typu number i przypisz do niej dowolną liczbę całkowitą.
let someNumber =5;
console.log(someNumber);//5
// b) Utwórz zmienną typu string przechowującą twoje imię.
const myName="Paulina";
console.log(myName);//Paulina
// c) Zainicjalizuj zmienną bez wartości, a następnie przypisz do niej dowolny tekst.
let someText
someText="Jak się masz?";
console.log(someText);//Jak się masz?
// d) Stwórz zmienną const i przypisz do niej obiekt z dwoma kluczami: name (string) i age (number).
const newPerson = {
    name: "Paulina ",
    age: 30,
}
console.log(newPerson);//Paulina30
// e) Zadeklaruj dwie zmienne: jedną używając let, drugą const i przypisz do nich wartości logiczne.
let isSunny=true;
const isWindy=false;
// f) Stwórz zmienną, która będzie przechowywać sumę dwóch liczb.
let num1=10;
let num2=3;
let sum=num1+num2
console.log(sum);//13
// g) Utwórz zmienną przechowującą twoje pełne imię i nazwisko jako jedną wartość typu string.
const fullName="Paulina Kamont";
console.log(fullName);//Paulina Kamont 
// h) Zainicjalizuj zmienną z liczbą zmiennoprzecinkową.
let a=3.1415;
console.log(a);//3.1415
// i) Zadeklaruj zmienną i przypisz do niej wynik działania matematycznego (np. dodawanie).
let a=5;
let b=3
let productOfNumbers=a*b;
console.log(productOfNumbers);//15
// j) Stwórz zmienną przechowującą twoje miasto jako ciąg znaków.
let myCity="W"+"A"+"R"+"S"+"Z"+"A"+"W"+"A";
console.log(myCity);//Warszawa
​
// Zadania z Prostych i Złożonych Typów Danych
// a) Utwórz tablicę zawierającą trzy różne typy danych.
let someArray = ["Miasto", 5, false];
console.log(someArray);
// b) Stwórz obiekt car z właściwościami make, model i year.
let arrayOfCar={
    make:"Skoda",
    model:"Octavia", 
    year:2020,
}
// c) Zadeklaruj tablicę z trzema różnymi wartościami liczbowymi.
let arrayOfNumbers= [13, 33, 43];
// d) Utwórz obiekt reprezentujący osobę, zawierający klucze name, age i isStudent (boolean).
let newPerson1 = {
    name: "Paweł",
    age: 16,
    isStudent: false,
}
console.log(newPerson1);//
// e) Zadeklaruj zmienną przechowującą pusty obiekt, a następnie dodaj do niego klucz color z wartością typu string.
let emptyObject;
emptyObject = {color: "pink"};
console.log(emptyObject);//
// f) Stwórz tablicę obiektów, gdzie każdy obiekt reprezentuje zwierzę z kluczami name (string) i age (number).
let animals = [
    dog = {
        name: "Reksio",
        age: 7,
    },
    cat = {
        name: "Mruczek",
        age: 3,
    },
    sheep= {
        name: "Dolly",
        age: 10
    },
];
// g) Utwórz zmienną przechowującą tablicę z różnymi wartościami boolean.
const someArrayofBools = [true, false, false, true];
// h) Stwórz obiekt student z kluczami name (string), grades (tablica liczb) i isActive (boolean).
let student = {
    name: "Magda",
    grades: [3, 2, 2],
    isActive: false,
}
// i) Zadeklaruj tablicę zawierającą różne typy danych, w tym co najmniej jeden obiekt.
const arrayOfMyRoom [
    isNoisy=false, 
    size: 18, 
    furniture={
        name: desk,
        color: brown,
    }
    isCormfortable=true,
]
// j) Utwórz obiekt reprezentujący książkę z kluczami title, author i yearPublished.
let myBook = {
    title: "11 papierowych serc",
    author: "Kelsey Hartwell",
    yearPublished: 2023, 
};
​
// Zadania z Warunków i Operatorów Trójargumentowych
// a) Napisz warunek if, który sprawdzi, czy zmienna typu number jest większa od 10.
let number=12;

if (number > 10) {
  console.log("Liczba jest większa od 10");
}

// b) Stwórz warunek if, który sprawdzi, czy zmienna tekstowa jest równa "Hello".
let someText1="Hello";
if (someText1==="Hello"){
console.log("Wyświetl tekst Hello");
}


// c) Użyj operatora ternarnego do przypisania do zmiennej wartości w zależności od innego warunku logicznego.
const age = 17;
const isAdult = age >= 18 ? true : "jestes niepelnoletnia";
console.log(isAdult);
// d) Napisz warunek, który sprawdzi, czy zmienna age jest większa lub równa 18.
let isAdult;
const age = 15;

if (age >= 18) {
  isAdult = true;
} else {
  isAdult = false;
}
// e) Stwórz warunek if-else, który sprawdzi, czy tablica jest pusta.
let array2=[1,2, 3]
if (array2<=0) {
    console.log("Tablica jest pusta");
  } else {
   console.log("Tablica nie jest pusta");
  }
// f) Użyj operatora ternarnego do sprawdzenia, czy zmienna isMember jest prawdziwa, i na tej podstawie przypisz rabat.
let isMember=true;
isMember===true?"Jeteś członkiem i dostajesz rabat" : "Nie jesteś członkiem i zniżka się nie należy";

// g) Napisz warunek if, który sprawdzi, czy długość ciągu znaków w zmiennej jest większa niż 5.
let arrayOfnewWord=["W", "A", "R", "K", "O" ,"C", "Z"]
if(newWord.length >5){
    console.log("Długość ciągu znaków jest większa niż 5");
} else {
    console.log("Długość ciągu znaków jest mniejsza niż 5")
}
// h) Stwórz warunek if-else, który sprawdzi, czy liczba jest parzysta lub nieparzysta.
let number2 = 10;
if (number2 % 2 == 0) {
  console.log("Liczba jest parzysta");
} else {
  console.log("Liczba jest nieparzysta");
}
// i) Użyj operatora ternarnego do wyboru między dwoma różnymi wartościami tekstowymi w zależności od warunku.
let hourNow=13;
let morning="Dzień dobry";
let evening="Dobry wieczór";

morning=== true ? "Dzień dobry": "Dobry wieczór";

// j)Napisz warunek if, który sprawdzi, czy obiekt ma określony klucz.
let newPatient={
    name:"Hanna", 
    age:55, 
    symptoms:"fever, pain, chills",
};

if ("symptopms" in newPatient);
{  console.log(Nowy pacjent ma wpisane objawy);
} else {
    console.log(Nowy pacjent nie ma wpisanych objawów);

}

