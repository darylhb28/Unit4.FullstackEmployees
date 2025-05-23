import express from "express";
const app = express();
import employeeRouter from "./api/employees.js"
export default app;

app.use(express.json());

app.route('/').get((req, res)=>{
    res.send("Welcome to the Fullstack Employees API.")
})

app.use("/employees", employeeRouter)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong :(");
});
