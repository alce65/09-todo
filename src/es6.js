// ES6 Destructuring

// En la declaración

function datos() {
    return {
        name: "Pepe",
        age: 23,
    };
}

function foo({ age }) {}

const { name } = datos();
console.log(name);

foo({
    name: "Pepe",
    age: 23,
});

// ... (spreed / rest) operator

const bbj = {
    name: "Pepe",
    age: 23,
};

const bbj1 = { ...bbj };

function rest(a, ...r) {}

rest(1, 2, 3, 4);
