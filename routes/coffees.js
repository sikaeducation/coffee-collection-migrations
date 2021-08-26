const express = require("express")
const router = express.Router()

const Coffee = require("../models/Coffee")

router.get("/", async (request, response) => {
  const coffees = await Coffee.query()
  response.json({ coffees })
})

router.get("/:id", async (request, response) => {
  const coffee = await Coffee.query().findById(request.params.id)
  response.json({ coffee })
})

router.post("/", async (request, response) => {
  const coffee = await Coffee.query().insert({ request.body.coffee })
  response.json({ coffee })
})

router.delete("/:id", async (request, response) => {
  const coffee = await Coffee.query().deleteById(request.params.id)

  response.sendStatus(204)
})

router.put("/:id", async (request, response) => {
  const coffee = await Coffee
    .query()
    .findById(request.params.id)
    .patch({ request.body.coffee })
})

module.exports = router
