// ! var is a function scope variable so only one value persist acrros all the loop itaration.
for (var i = 0; i < 5; ++i) {
  setTimeout(() => {
    console.log(i * 1000);
  }, i * 1000);
}

console.log(`Start`);

// ! let is a block scope variable so different value persist acrros all the loop itaration.

for (let i = 0; i < 5; ++i) {
  setTimeout(() => {
    console.log(i * 1000);
  }, i * 1000);
}

// ! and if we want to do this type of behaviour in var then we can create callback into that.
// ! here is a self invoking fucntion.
for (var i = 0; i < 5; ++i) {
  ((i) => {
    setTimeout(() => {
      console.log(i * 1000);
    }, i * 1000);
  })(i);
}
