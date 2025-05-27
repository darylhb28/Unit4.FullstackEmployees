import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {

await createEmployee({name:'Alice Johnson', birthday:'1988-04-12', salary: 75000})
await createEmployee({name: 'Bob Smith', birthday: '1990-06-25', salary: 68000});
await createEmployee({name: 'Carol Martinez', birthday: '1985-11-03', salary: 82000});
await createEmployee({name: 'David Lee', birthday: '1979-02-14', salary: 91000});
await createEmployee({name: 'Ella Brown', birthday: '1993-08-30', salary: 60000});
await createEmployee({name: 'Frank Wilson', birthday: '1982-01-19', salary: 73000});
await createEmployee({name: 'Grace Kim', birthday: '1987-07-09', salary: 78000});
await createEmployee({name: 'Henry Thompson', birthday: '1995-03-22', salary: 65000});
await createEmployee({name: 'Isabel Garcia', birthday: '1980-10-11', salary: 87000});
await createEmployee({name: 'Jack Nguyen', birthday: '1992-12-05', salary: 71000});
  
}
