/*
class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType
    }
    print() {
        console.log(`ballType =  ${this.ballType}`);
    }
}

let ball1 = new Ball();
ball1.print();

let ball2 = new Ball("super");
ball2.print();
*/

                                          
const ul = document.getElementById('myList');
let node = "";
const passed = document.getElementById('passed');
const checkExam = document.getElementById('checkExam');
let nameInput = document.getElementById('name');
let age = document.getElementById('age');


checkExam.addEventListener('click', () => {
   
    let person1 = new Person(nameInput.value, age.value);
    person1.info();
    person1.write();
    if(passed.checked == true){
        node.style.color = "green";
    } else {
        node.style.color = "red";
    }
})

class Person {
    constructor(name, alter) {
        this.name = name;
        this.alter = alter;
    }
    info() {
        console.log(`My name is: ${this.name} and I am ${this.alter} years old.`);
    }
    write() {
        node = document.createElement("li")
        let textnode = document.createTextNode(`${this.name} ${this.alter}`);
        node.appendChild(textnode);
        myList.appendChild(node);
    }
}

