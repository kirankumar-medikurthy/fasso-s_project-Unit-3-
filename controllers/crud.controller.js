const post = (modal) => async(req, res) => {
    const items = await modal.create(req.body)
    return res.status(201).send({ items });
}

const get = (modal) => async(req, res) => {
    const items = await modal.find().lean().exec();
    return res.status(200).send({ items });
}

const patch = (modal) => async(req, res) => {
    const items = await modal.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec()
    return res.status(200).send({ items });
}


const Delete = (modal) => async(req, res) => {
    const items = await modal.findByIdAndRemove(req.params.id)
    return res.status(200).send({ items });
}

const findOne = (modal) => async(req, res) => {
    const items = await modal.findById(req.params.id).lean().exec()
    return res.status(200).send({ items });
}

const FoodItemSearch = (modal) => async(req, res) => {
    const items = await modal.find().populate("category").lean().exec()
    return res.status(200).send({ items });
}

module.exports = {
    post,
    get,
    Delete,
    findOne,
    patch,
    FoodItemSearch
}