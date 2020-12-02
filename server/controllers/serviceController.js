const User = require('../models/user');
const Service = require('../models/service');
const { set } = require('mongoose');
const { use } = require('../routes/auth');
const { ObjectID } = require('bson');

exports.create_service = async (req, res) => {
     const { userId } = req.params;
     const {price, name, description} = req.body; 
     const user = await User.findOne({_id: userId});
     const service = new Service({price, name, description, user});
     service.save();
};

exports.get_services_from_user = async (req, res) => {
    const { userId } = req.params;
    const userObjectId = await User.findOne({_id: userId});
    const userServices = await Service.find({user: userObjectId});
    res.send(userServices);
};

exports.get_all_services = async (req, res) => {
    const userServices = await Service.find();
    res.send(userServices);
};

exports.get_service = async (req, res) => {
    const { serviceId } = req.params;
    console.log(`Aui en back: ${serviceId}`);
    const service = await Service.findOne({_id: serviceId});
    console.log(service);
    res.send(service);
}; 

exports.delete_service = async (req, res) => {
    const { serviceId } = req.params;
    const operation = await Service.deleteOne({ _id: ObjectID(serviceId)}, function(err, doc){
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully deleted.');
    });
    res.send(operation);
};

exports.edit_service = async (req, res) => {
    const { serviceId } = req.params;
    var query = {_id: ObjectID(serviceId)};

    await Service.updateOne(query, req.body, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
};