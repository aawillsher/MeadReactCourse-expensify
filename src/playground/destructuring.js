console.log('destructuring file');

const person = {
    name: 'John',
    age: 28,
    location: {
        city: 'Winnipeg',
        temp: 15
    }
};

const { name: firstName = 'First name', middleName = 'Middle name', age } = person;

console.log(firstName + ' ' + middleName + ' is ' + age);

const book = {
    title: 'Ego',
    author: 'Ryan',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'self-published'} = book.publisher;

console.log(publisherName);

const array = ['apple', 'banana', 'cherry'];
const [a, b, c = 'cantaloupe'] = array;
console.log(a, b, c);


