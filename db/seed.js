import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await db.connect()

  await createEmployee("Alice Johnson", "1988-04-12", 75000)
  await createEmployee("Bob Smith", "1979-11-23", 82000)
  await createEmployee("Carol White", "1992-06-15", 68000)
  await createEmployee ("David Lee", "1985-09-30", 91000)
  await createEmployee("Eva Green", "1990-02-10", 72000)
  await createEmployee("Eva Green", "1990-02-10", 72000,)
  await createEmployee("Frank Thomas", "1983-12-01", 87000)
  await createEmployee("Grace Kim", "1995-07-25", 67000)
  await createEmployee("Henry Wilson", "1987-03-14", 80000)
  await createEmployee("Sal Martinez", "1991-10-06", 76000)
  await createEmployee("Jack Robinson", "1984-05-18", 95000)
  
  await db.end()
}
