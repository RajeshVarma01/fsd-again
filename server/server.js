import Express from "express";
import route from "./Routes/studentRoutes.js";

const app = Express()

app.use("/api", route)

app.listen(5000, () => {
    console.log("Listening on port no 5000 in ---")
})