const router = require('express').Router();
const{addComment, removeComment} = require('../../controllers/comment-controller');
const { remove } = require('../../models/Pizza');

module.exports = router;

// route to add comment `/api/comments/<pizzaId>`
router.route('/:pizzaId').post(addComment);

// route to delete comment `/api/comments/<pizzaId>/<commentId>`
router.route('/:pizzaId/:commentId').delete(removeComment);