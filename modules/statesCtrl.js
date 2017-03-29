module.exports = {
    getStates: function(req, res, next) {
      var db = req.app.get('db');
      db.get_states(function(err, states) {
        res.send(states);
      })
    }
  }
