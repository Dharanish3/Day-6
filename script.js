// 1.Class - Movie

class Movie {
    constructor (title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating
    }

}
const movie = new Movie("Casino Royale","Eon Productions" , "PG13" )
const movie1 = new Movie("Rohini","Ags "  )

console.log(movie.title)
console.log(movie.studio)
console.log(movie.rating)
console.log(movie1.rating)



/*---------------------------------------------- */



// 2.Circle 

class Circle {
    constructor(radius , color){
        this.radius = radius;
        this.color = color

    }

    get radiusCircle (){
        return this.radius;
    }
    set radiusCircle (radius){
         this.radius = radius
    }

    get colorCircle (){
        return this.color;
    }

    set colorCircle (color){
       this.color = color
    }

    get toString(){
        return (`Circle [radius = ${this.radius},color = ${this.color}]`)
    }

    get areaCircle(){
        return Math.PI * this.radius * this.radius;
    }

    get circumferenceCircle(){
        return 2 * Math.PI * this.radius;
    }

}

var obj2 = new Circle (1.0 , "red")

console.log(obj2.radiusCircle);
obj2.radiusCircle =  2.2
console.log(obj2.radiusCircle);

console.log(obj2.colorCircle);
obj2.colorCircle =  "blue"
console.log(obj2.colorCircle);

console.log(obj2.toString)

console.log(obj2.areaCircle)

console.log(obj2.circumferenceCircle)




/*---------------------------------------------- */





// 3.Write a “person” class to hold all the details.

class Person {
    constructor (name,age,gender,salary){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
    }
}

var method = new Person ("Dharanish" , 23 , "Male" , 7)

console.log(method.name)
console.log(method.age)
console.log(method.gender)
console.log(method.salary)




/*---------------------------------------------- */



// 4.write a class to calculate the uber price.
class UberPrice {
    constructor (kilometer , price=30){
        this.kilometer = kilometer;
        this.price = price;
        
    }
    get Price (){
        return this.kilometer * this.price
    }
}

var uber = new UberPrice(3 , 70)
var uber2 = new UberPrice(3 )
console.log(uber.Price)
console.log(uber2.Price)














