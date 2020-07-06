// Import deps
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Import components
import { ClientList } from './client-list'

// Import styles
// import './../styles/bookshelf.css'

// Create Bookshelf component
export const Clients = () => {
  // Prepare states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch all books on initial render
  useEffect(() => {
    fetchClients()
  }, [])

  // Fetch all books
  const fetchClients = async () => {
    // Send GET request to 'books/all' endpoint
    axios
      .get('http://localhost:4001/clients/all')
      .then(response => {
        // Update the books state
        setClients(response.data)

        // Update loading state
        setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the book list: ${error}`))
  }

  // Reset all input fields
  const handleInputsReset = () => {
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  // Create new book
  const handleClientCreate = () => {
    // Send POST request to 'books/create' endpoint
    axios
      .post('http://localhost:4001/clients/create', {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
      })
      .then(res => {
        console.log(res.data)

        // Fetch all books to refresh
        // the books on the bookshelf list
        fetchClients()
      })
      .catch(error => console.error(`There was an error creating the ${password} book: ${error}`))
  }

  // Submit new book
  const handleClientSubmit = () => {
    // Check if all fields are filled
    if (email.length > 0 && password.length > 0 && firstName.length > 0 && lastName.length > 0) {
      // Create new Client
      handleClientCreate()

      console.info(`Client ${password} by ${email} added.`)

      // Reset all input fields
      handleInputsReset()
    }
  }

  // Remove book
  const handleClientRemove = (id: number, title: string) => {
    // Send PUT request to 'books/delete' endpoint
    axios
      .put('http://localhost:4001/clients/delete', { id: id })
      .then(() => {
        console.log(`Client ${title} removed.`)

        // Fetch all books to refresh
        // the books on the bookshelf list
        fetchClients()
      })
      .catch(error => console.error(`There was an error removing the ${title} book: ${error}`))
  }

  // Reset book list (remove all books)
  const handleListReset = () => {
    // Send PUT request to 'books/reset' endpoint
    axios.put('http://localhost:4001/books/reset')
    .then(() => {
      // Fetch all books to refresh
      // the books on the bookshelf list
      fetchClients()
    })
    .catch(error => console.error(`There was an error resetting the book list: ${error}`))
  }

  return (
    <div className="client-list-wrapper">
      {/* Form for creating new book */}
      <div className="client-list-form">
        <div className="form-wrapper" onSubmit={handleClientSubmit}>
          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="title">Enter title:</label>
              <input className="form-input" type="text" id="title" name="title" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="author">Enter author:</label>
              <input className="form-input" type="text" id="author" name="author" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
            </fieldset>
          </div>

          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="pubDate">Enter publication date:</label>
              <input className="form-input" type="text" id="pubDate" name="pubDate" value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="rating">Enter rating:</label>
              <input className="form-input" type="text" id="rating" name="rating" value={lastName} onChange={(e) => setLastName(e.currentTarget.value)} />
            </fieldset>
          </div>
        </div>

        <button onClick={handleClientSubmit} className="btn btn-add">Add the client</button>
      </div>

      {/* Render bookshelf list component */}
      <ClientList clients={clients} loading={loading} handleClientRemove={handleClientRemove} />

      {/* Show reset button if list contains at least one book */}
      {clients.length > 0 && (
        <button className="btn btn-reset" onClick={handleListReset}>Reset clients list.</button>
      )}
    </div>
  )
}
