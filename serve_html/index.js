const port = 3000,
    express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController.js");
    
app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(
    express.urlencoded({
        extended: false
    })
)
app.get("/home", homeController.sendReqParam)
app.get("/style", homeController.sendReqParam)
app.get("/images/:book", homeController.respondWithImage)

.listen(port, () => {
    console.log(`The express.js server has started and is listening on port number: ${port}`);
});
