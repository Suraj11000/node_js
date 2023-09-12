const add = (a, b) => {
  console.log(a + b);
};

const mul = (a, b) => {
  console.log(a * b);
};

const sub = (a, b) => {
  console.log(a - b);
};

const div = (a, b) => {
  console.log(a / b);
};

module.exports = {
  addition: add,
  multi: mul,
  subs: sub,
  divide: div,
};
