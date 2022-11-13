const reply = (res, body, timeout = 300, status = 200) =>
	setTimeout(() => {
		res.status(status).json(body)
	}, timeout)

module.exports = { reply }
