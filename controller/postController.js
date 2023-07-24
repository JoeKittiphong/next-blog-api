const postModel = require("../mongo/blogModel")

exports.create = async (req, res) => {
    try {
        const { author, title, cover, tag, content } = req.body
        if (!(author && title && cover && tag && content)) {
            return res.send("all field are required")
        }
        await postModel.create({
            author, title, cover, tag, content, views: 0
        })
        res.send("create complete")
    } catch {
        res.send("can not create new user")
    }
}

exports.read = async (req, res) => {
    try {
        const mongoData = await postModel.find()
        res.send(mongoData)
    } catch {
        res.send("can not read post")
    }
}

exports.readById = async (req, res) => {
    try {
        const mongoData = await postModel.findById(req.params.id)
        res.send(mongoData)
    } catch {
        res.send(`${req.params.id} is not match`)
    }
}

exports.update = async (req, res) => {
    try {
        if (!req.body) {
            return res.send("can not update")
        }
        await postModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
        return res.send("update mongo complete")
    } catch {
        res.send("can not update post")
    }
}

exports.delete = async (req, res) => {
    try {
        await postModel.findByIdAndDelete({ _id: req.params.id })
        res.send("deleted")
    } catch {
        res.send(`${req.params.id} not match`)
    }
}