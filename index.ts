import express, { Express, Request, Response } from "express";
import VehicleRepository from "./repositories/vehicle-repository";

const app: Express = express();
const port = 3000;

const vehicleRepository = new VehicleRepository();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/vehicles", (req: Request, res: Response) => {

  const vehicles = vehicleRepository.getAll();

  res.json(vehicles);

});
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
