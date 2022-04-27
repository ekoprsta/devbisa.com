const Controller = require('../controllers')
const errorHandler = require('../midldleware/errorHandlingMiddleware')
const router = require('express').Router()
const multer  = require('multer');
const authenticationMiddleWare = require('../midldleware/authenticationMiddleWare');
var maxSize = 1 * 1000 * 1000;
const upload = multer({
    limits: { fileSize: maxSize }
})



router.get('/',(req, res) => {
  res.status(200).json({
      message: 'home'
  })
})

router.post('/login', Controller.userLogin)
router.post('/google-sign-in', Controller.googleSignIn)
router.post('/register', Controller.register)
router.post('/project', upload.single('image'), Controller.createProject)
router.get('/project', Controller.showAllActiveProject)
router.get('/project/:id', Controller.showProjectDetail)
router.use(authenticationMiddleWare)
router.post('/projectmember',Controller.addProjetMember)
router.use(errorHandler)

module.exports = router