// variable types

let diff_variables = [6, "hi", true, [1, 2, 3], { name: "helen" }];

diff_variables.forEach((elem) => {
  let variable = elem;
  console.log(variable, typeof variable);
});
