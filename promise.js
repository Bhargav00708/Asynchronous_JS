// !  Here only statment in resolve will be called asynchronusly. 

const p1 = new Promise((resolve, reject) => {
  const a = "wanda";
  if (a === "wanda") {
    console.log(`It will execute first`);
    resolve(`Resolve ${a}`);
  }
  console.log(`Second`);
  reject(`Reject ${a}`);
});

p1.then((msg) => {
  console.log(msg);
});

console.log(`It will execute before promise`);
