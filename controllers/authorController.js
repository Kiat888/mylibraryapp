// link to author model
const authors = require('../models/author')

// handle request to get all authors
const getAllAuthors = (req,res) => {
	res.send(authors)
}

// get particular author
const getAuthorByID = (req, res) => {
	const author = authors.find(author => author.id === req.params.id)

	if (author) {
		res.send(author) // we fouind an author
	} else {
		res.send([]) // return empty list for now
	}
}

const addAuthor = (req, res, next) => {
	console.log("WE GOT POST", req.body)
	// make a new author
	newAuthor = req.body

	// add to database
	authors.push(newAuthor)

	// return this
	res.send(authors)
}

module.exports = {
	getAllAuthors, getAuthorByID, addAuthor
}