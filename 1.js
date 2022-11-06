var userObj = {
  firstName: 'John',
  lastName: 'Doe',
  age: 21,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(userObj.fullName());


function defUpperStr(str) {
  return (str || 'DEFAULT TEXT').toUpperCase();
}

function evenFn(n) {
  var arr = [];

  for (var i = 2; i <= n; i += 2) arr.push(i);
  return arr;
}

console.log(evenFn(10)); // [2, 4, 6, 8, 10]

function weekFn(n) {
  switch (n) {
    case 1:
      return 'Понедельник';
    case 2:
      return 'Вторник';
    case 3:
      return 'Среда';
    case 4:
      return 'Четверг';
    case 5: 
      return 'Пятница';
    case 6:
      return 'Суббота';
    case 7:
      return 'Воскресенье';

    default:
      return null;
  }
}

console.log(weekFn(1)); // 'Понедельник'

console.log(weekFn(3)); // 'Среда'

console.log(weekFn(7)); // 'Воскресенье'

console.log(weekFn(9)); // null

console.log(weekFn(1.5)); // null

console.log(weekFn('2')); // null

function ageClassification(n) {
   return n >= 0
   ? n > 24
    ? n > 44 
      ? n > 65 
        ? n > 75 
          ? n > 90
            ? n > 122 
              ? null
              : 'долгожители'
            : 'старческий возраст'
          : 'пожилой возраст'
        : 'средний возраст'
      : 'молодой возраст'  
    : 'детский возраст'
  : null;
}

console.log('-1 :', ageClassification(-1)); // -1 : null

console.log('5 :', ageClassification(5)); // 5 : детский возраст

console.log('34 :', ageClassification(34)); // 34 : молодой возраст

console.log('50 :', ageClassification(50)); // 50 : средний возраст

console.log('65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст

console.log('80 :', ageClassification(80)); // 80 : старческий возраст

console.log('110 :', ageClassification(110)); // 110 : долгожители

console.log('130 :', ageClassification(130)); // 130 : null

function oddFn(n) {
  var arr = [];
  var i = 1;

  while (i <= n) {
    if (i % 2 == 1) arr.push(i);
    i++;
  }
  return arr;
}

console.log(oddFn(10)); // [1, 3, 5, 7, 9]

console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]

console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

function mainFunc(a, b, func) {
  if (func && typeof func === 'function') return func(a, b);
}

function cbRandom(max, min) {
  return Math.random() * (max - min) + min;
}

function cbPow(value, index) {
  return Math.pow(value, index);
}

function cbAdd(a, b) {
  return a + b;
}