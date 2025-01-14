const mongoose = require("mongoose");
const { MONGODB_URI, PORT } = require("./utils/config");
const app = require("./app");

console.log("Connecting to the Database");
mongoose
  .connect(MONGODB_URI)

  .then(() => {
    console.log("Connected to the Database");

    //start the server
    app.listen(PORT, () => {
        console.log(`Server running @http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the Database:", err.message); // Log error message
  });
