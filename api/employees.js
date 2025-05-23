import { createEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee } from "#db/queries/employees";
import express from "express";
const router = express.Router();
export default router;

//GET 
router.route('/').get(async(req, res)=>{
    const employees = await getEmployees()
    res.send(employees)
})

//POST
router.route('/').post(async (req, res) => {
    if (!req.body){
        return res.status(400).send("Missing req.body")
    }

    const {name, birthday, salary} = req.body

    if( !name || !birthday || !salary ){
        return res.status(400).send("Missing required field")
    }

    const employee = await createEmployee({name, birthday, salary})
    res.status(201).send(employee)
})

//GET (BY ID)
router.route('/:id').get(async (req, res)=>{
    const id = Number(req.params.id)
    if (id < 0){
        return res.status(400).send("Id must be a postivie number")
    }

    const employee = await getEmployee(id)

    if (!employee){
        return res.status(404).send("Employee does not exist")
    }
    res.send(employee)
})

//DELETE
router.route('/:id').delete(async (req, res)=>{
    const id = Number(req.params.id)
    if (!Number.isInteger(id) || id < 0){
        return res.status(400).send("Id must be a postivie number")
    }

    const deletedEmployee = await deleteEmployee(id)

    if (!deletedEmployee){
        return res.status(404).send("Employee does not exist")
    }
    res.sendStatus(204)
})

//UPDATE
router.route("/:id").put(async (req, res)=> {
  const id = Number(req.params.id)

    if(!req.body){
      return res.status(400).send("Missing req.body")
    }
    
    const {name, birthday, salary} = req.body

    if( !name || !birthday|| !salary){
      return res.status(400).send("Please send required fields")
    }

    if(id <0){
      return res.status(400).send("Id must be a postivie number")
    }

    const employee = await getEmployee(id)
    if(!employee){
      return res.status(404).send("Employee does not exist")
    }

    const updated = await updateEmployee({name, birthday, salary})
    res.status(200).send(updated)
})