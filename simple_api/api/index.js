const router = require("express").Router()
const { books } = require("./mock")
const { reply } = require("./utils")

router.get("/books", (req, res, next) => {
	let result = []
	books.map((el) => {
		let a = new Object()
		a.id = el.id
		a.name = el.name
		a.author = el.author
		a.genre = el.genre
		a.score = el.score
		a.price = el.price
		result.push(a)
	})
	reply(res, result)
})

router.get("/book/:name", (req, res, next) => {
	const name = req.params.name
	let book = {}
	books.map((el) => {
		if (el.name === name) {
			book = el
		}
	})
	reply(res, book)
})

module.exports = router
