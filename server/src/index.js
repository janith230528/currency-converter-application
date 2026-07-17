const express = require("express");

const app =express();

//listen to a port
app.listen(5000, () => {
    console.log("Server is running on port 5000");
})