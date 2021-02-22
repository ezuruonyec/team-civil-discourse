/** Requires a user to be logged in to perform a given call
 * @module middlewares/requireLogin
 */
module.exports = (req, res, next) => {
    if (!req.user) {
      return res.status(401).send({ error: 'You must log in!' });
    }
    next();
  };