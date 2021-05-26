const router = require('express').Router();
const{addComment, 
    removeComment, 
    addReply, 
    removeReply} = require('../../controllers/comment-controller');

// route to add comment `/api/comments/<pizzaId>`
router.route('/:pizzaId').post(addComment);

// route to handle addNewReply() `/api/comments/:pizzaId/:commentId`
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// route to remove a reply
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;