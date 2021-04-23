// Initializes the `users` service on path `/users`
const { Users } = require('./users.class')
const hooks = require('./users.hooks')

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/users', new Users(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('users')

  service.hooks(hooks)
}
