const getBooks = async (req, res) => {
    res.json({
        message: "Show all books"
    })
}

module.exports = {
    getBooks
}
