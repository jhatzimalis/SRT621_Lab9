exports.sendReqParam = (req, res) => {
    if (req.url == "/home") {
        res.render("home")

    } else if (req.url == "/style") {
        res.sendFile(`./public/css/style.css`, {root: "./"})
    }
}

exports.respondWithImage = (req, res) => {
    let book = req.params.book;
    res.render(`image${book}`)
}