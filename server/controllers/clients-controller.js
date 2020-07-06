// bookshelf-app/server/controllers/books-controller.js
// Import database
const knex = require('./../db')
// Retrieve all books
exports.clientsAll = async (req, res) => {
  // Get all books from database
  knex
    .select('*') // select all records
    .from('clients') // from 'books' table
    .then(userData => {
      // Send books extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving clients: ${err}` })
    })
}
// Create new book
exports.clientsCreate = async (req, res) => {
  // Add new book to database
  knex('clients')
    .insert({ // insert new record, a book
      'email': req.body.email,
      'password': req.body.password,
      'firstName': req.body.firstName,
      'lastName': req.body.lastName
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Client \'${req.body.password}\' by ${req.body.email} created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.password} client: ${err}` })
    })
}
// Remove specific book
exports.clientsDelete = async (req, res) => {
  // Find specific book in the database and remove it
  knex('clients')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Client ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} client: ${err}` })
    })
}
// Remove all books on the list
exports.clientsReset = async (req, res) => {
  // Remove all books from database
  knex
    .select('*') // select all records
    .from('clients') // from 'books' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Client list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting client list: ${err}.` })
    })
}