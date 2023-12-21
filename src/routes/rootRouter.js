import express from "express"

import brusselsSproutsRouter from "./brusselsSproutsRouter.js"

const rootRouter = express.Router()

rootRouter.get("/", (req, res) => {
  res.send("VEGGIE POWER")
})

// rootRouter.get("/brussels-sprouts", (req, res) => {
//   res.render("brussels-sprouts")
// })


rootRouter.use("/brussels-sprouts", brusselsSproutsRouter)

export default rootRouter