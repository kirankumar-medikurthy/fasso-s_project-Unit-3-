function cartController() {
    return {
        index(req, res) {
            res.render('collection/cart')
        },
        update(req, res) {
            return res.json({ data: "All ok" })
        }
    }
}