var request = require('superagent')
module.exports = function(server) {

  var Repo = server.models.Repo;

  request.get('https://api.github.com/orgs/strongloop/repos').end(function(err, response){
    Repo.create(response.body);
  })
}
