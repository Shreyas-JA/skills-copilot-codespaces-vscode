// Create web server
// 1. Create web server
// 2. Create router
// 3. Create controller
// 4. Create model
// 5. Create view
// 6. Create database

// 1. Create web server
const express = require('express');
const app = express();

// 2. Create router
const router = express.Router();

// 3. Create controller
const controller = require('../controllers/commentsController');

// 4. Create model
const model = require('../models/commentsModel');

// 5. Create view
const view = require('../views/commentsView');

// 6. Create database
const db = require('../db');

// 7. Create route
router.get('/', controller.getComments);

router.get('/create', controller.getCreateComment);

router.post('/create', controller.postCreateComment);

router.get('/:id/delete', controller.getDeleteComment);

router.get('/:id/update', controller.getUpdateComment);

router.post('/:id/update', controller.postUpdateComment);

// 8. Export router
module.exports = router;