const { User, Project, ProjectMember } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jwtHelper')
const {OAuth2Client} = require('google-auth-library')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const fs = require("fs");
var nodemailer = require('nodemailer');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ekoprasetia23@gmail.com',
    pass: 'rfbsvqwrfdlwnvse'
  }
});

class Controller {

  static userLogin(req, res, next){
    const { email, password } = req.body
    User.findOne({ where : { email }})
    .then((user) => {
        if(!email || !password) throw { name : 'BadRequest'}
        if(!user) throw { name : "Unauthorized" }
        const compareResult = comparePassword(password, user.password)
        if (!compareResult) throw { name : "Unauthorized" }

        const accesstoken = sign({ id : user.id, email : user.email })
        res.status(200).json({ accesstoken, email : user.dataValues.email })
    })
    .catch((err) => {
        next(err)
    })

  }

  static register(req, res, next){
    const{ fullName, email, password, githubAccount, discordAccount, phoneNumber } = req.body
    User.create({
      fullName, email, password, githubAccount, discordAccount, phoneNumber
    })
    .then((data) => {
        res.status(201).json({id: data.id, email: data.email})
        var mailOptions = {
          from: 'ekopraseti23@gmail.com',
          to: data.email,
          subject: '[on behalf Devbisa.com]Congratulation, you just join to Devbisa.com',
          text: 'Congratulation, you just join to Devbisa.com'
        };

        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
    })
    .catch((err) => {
      console.log(err);
        next(err)
    })
  }

  static createProject(req, res, next){
    Project.create({
      name : req.body.name,
      description : req.body.description,
      imageUrl: req.body.imageUrl
    })
      .then((data) => {
        res.status(201).json({ data })
      })
      .catch((err) => {
      next(err)
      console.log(err);
    })
  }

  static showAllProjectUser(req, res, next){
    let dataProject = []
    User.findAll({
      where : { id : req.user.id },
      include: [{
        model : Project
      }]
    })
      .then((data) => {
        let dataBaru = data
        console.log(data[0].Projects);
        res.status(200).json(data[0].Projects)
      })
      .catch((err) => {
        console.log(err);
        next(err)
      })
  }

  static showAllActiveProject(req, res, next){
    Project.findAll()
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        next(err)
      })
  }

  static showProjectDetail(req, res, next){
    Project.findOne({
      where: { id: req.params.id },
      include: [{model : User, attributes: { exclude: ['password'] }}]
    })
      .then((data) => {
        if(!data) throw { name: 'Not Found'}
        // let newImage = data.imageData.toString('base64')
        // console.log(newImage);
        res.status(200).json(data)
      })
      .catch((err) => {
        console.log(err);
        next(err)
      })
  }

  static addProjetMember(req, res, next){
    const { ProjectId, role }  = req.body
    const UserId = req.user.id
    let dataName

    Project.findOne({
      where: { id: ProjectId },
      include: [{model : User, attributes: { exclude: ['password'] }}]
    })
      .then((data) => {
        dataName = data.dataValues.name
        if(!data) throw { name: 'Not Found'}
        data.Users.forEach(el => {
          if(el.id === req.user.id) throw  { name: 'Exists' }
        })
        return ProjectMember.create({
          ProjectId, UserId, role 
        })
      })
    .then((data) => {
      res.status(201).json(data)
      var mailOptions = {
        from: 'ekopraseti23@gmail.com',
        to: req.user.email,
        subject: `[on behalf Devbisa.com]Congratulation, you just enroll to project ${dataName}`,
        text: `Congratulation, you just enroll to project ${dataName}`
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    })
    .catch((err) => {
      console.log(err);
        next(err)
    })
  }

  static async googleSignIn(req, res, next){
    const ticket = await client.verifyIdToken({
        idToken : req.body.id_token,
        audience : process.env.GOOGLE_CLIENT_ID
    })
    const payload = ticket.getPayload()

    const { email } = payload
    User.findOrCreate({
        where : { email },
        defaults : {
            fullName : 'user',
            password : '342898632379-ig57h3',
            githubAccount : 'user',
            discordAccount: 'user',
            phoneNumber: '0888'
        }
    })
    .then((data) => {
        let code = 200
        if (data[1]) code = 201
        const accesstoken = sign({ id : data[0].id, email : data[0].email })
        const { role, email } = data[0].dataValues
        res.status(code).json({ accesstoken, role, email })
    })
    .catch((error) => {
        next(error)
    })
}

}

module.exports = Controller