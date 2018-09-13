const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
const mongoOp = require('./model/mongo.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: 'false'
}));

router.get('/', (req, res) => {
  res.json({
    error: false,
    message: 'Hello World'
  })
});

/*
  to remove redundant code we use route()
  it will allow HTTP operation with the same path
*/
router.route('/users')
  /* get all users login data */
  .get((req, res) => {
    let response = {};
    mongoOp.find({}, (err, data) => {
      err ? response = {
        error: true,
        message: 'Error fetching data'
      } : response = {
        error: false,
        message: data
      }
      res.json(response)
    })
  })

  /*add new users data*/
  .post((req, res) => {
    let db = new mongoOp
    let response = {}

    db.userName = req.body.email
    /*hash the password using SHA1 algorithm */
    db.userPassword = require('crypto')
      .createHash('sha1')
      .update(req.body.password)
      .digest('base64')

    /* db.save() will do insert command of mongoDB*/
    db.save((err) => {
      err ? response = {
        error: true,
        message: 'Error adding data'
      } : response = {
        error: false,
        message: 'Success'
      }
      res.json(response)
    })
  })

/* get user by id */
router.route('/users/:id')
  .get((req, res) => {
    let response = {}
    mongoOp.findById(req.params.id, (err, data) => {
      err ? response = {
        error: true,
        message: 'Error fetching data'
      } : response = {
        error: false,
        message: data
      }
      res.json(response)
    })
  })

  .put((req, res) => {
    let response = {}
    mongoOp.findById(req.params.id, (err, data) => {
      if (err) {
        response = {
          error: true,
          message: 'Update data error'
        }
      } else {
        /** when email need to be updated */
        if (req.body.email !== undefined) {
          data.userName = req.body.email
        }
        /** when password need to be updated */
        if (req.body.password !== undefined) {
          data.userPassword = req.body.password
        }

        data.save((err) => {
          if (err) {
            response = {
              error: true,
              message: 'Error when updating data'
            }
          } else {
            response = {
              error: false,
              message: 'Success update data for ' + req.params.id
            }
          }
          res.json(response)
        })
      }
    })
  })

  .delete((req, res) => {
    let response = {}
    mongoOp.findById(req.params.id, (err, data) => {
      if (err) {
        response = {
          error: true,
          message: 'Error fetching data'
        }
      } else {
        mongoOp.remove({
          _id: req.params.id
        }, (err) => {
          if (err) {
            response = {
              error: true,
              message: 'Error when deleting data'
            }
          } else {
            response = {
              error: false,
              message: 'User with id ' + req.params.id + ' succesfully deleted'
            }
          }
          res.json(response)
        })
      }
    })
  })
app.use('/', router);

app.listen(3000, () => console.log('listening on port 3000'));