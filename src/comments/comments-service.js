
const CommentsService = {
  getById(db, id) {
    return db
      .from('blogful_comments')
      .where({ id })
      .first()
  },

  insertComment(db, newComment) {
    return db
      .insert(newComment)
      .into('blogful_comments')
      .returning('*')
      .then(([comment]) => comment)
  },

  updateComment(db, id, newCommentFields) {
    return db('blogful_comments')
      .where({ id })
      .update(newCommentFields)
  },

  deleteComment(db, id) {
    return db('blogful_comments')
      .where({ id })
      .delete()
  },

  /* hasComment(db, id) {
    return db('blogful_comments')
      .select('id')
      .where({ id })
      .first()
      .then(comment => !!comment)
  }, */
}

module.exports = CommentsService
