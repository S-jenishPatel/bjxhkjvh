const { app } = require("./app.js");

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is running at port :", port);
});

console.log("hello");
