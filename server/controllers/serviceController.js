const User = require('../models/user');
const Service = require('../models/service');
const { set } = require('mongoose');
const { use } = require('../routes/auth');

exports.create_service = async (req, res) =>{
     const { userId } = req.params;
     const {price, name, description} = req.body; 
     const user = await User.findOne({email: userId});
     //TODO: validar cuando no se encuentre el usuario.
     const service = new Service({price, name, description, user});
     service.save();
};

exports.get_services_from_user = async (req, res) =>{
    const { userId } = req.params;
    const userObjectId = await User.findOne({email: userId});
    const userServices = await Service.find({user: userObjectId});
    console.log(userServices)
}; 