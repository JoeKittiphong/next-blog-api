const postModel = require("./mongo/blogModel")
require("mongoose")

exports.create = async(req, res)=>{
    await postModel.create(req.body)
    res.send("create complete")
}

exports.read = async(req, res)=>{
    const mongoData = await postModel.find()
    res.send(mongoData)
}

exports.readById = async(req, res)=>{
    const mongoData = await postModel.findById(req.params.id)
    res.send(mongoData)
}

exports.update = async(req, res)=>{
    await postModel.findByIdAndUpdate({_id : req.params.id}, req.body)
    res.send("update mongo complete")
}

exports.updateOne = async(req, res)=>{
    const mongoData = await postModel.findById(req.params.id)
    mongoData[req.body.filter] = req.body.value
    await postModel.findByIdAndUpdate({_id : req.params.id}, mongoData)
    res.send("update one complete")
}

exports.delete = async(req, res)=>{
    await postModel.findByIdAndDelete({_id : req.params.id})
    res.send("deleted")
}