import express, { Express, Request, Response } from "express";
import VehicleRepository from "./repositories/vehicle-repository";
import { searchByMake, searchByModel } from "./utils/vehicleFilters";

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

app.get("/vehicles/make/:make", (req: Request, res: Response) => {

  const make = req.params.make;
  //Potential improvements:
  // Sorting?
  // Error handling - invalid search term, no results, etc.
  // caching 
  // pagination
  // validation
  
  const vehicles = searchByMake(vehicleRepository.getAll(), make);
  if (vehicles.length === 0) {
    res.status(404).json({ message: "No vehicles found for the specified make." });
    return;
  }
  res.json(vehicles);

});

app.get("/vehicles/model/:model", (req: Request, res: Response) => {

  const model = req.params.model;
  //Potential improvements: as above
  
  const vehicles = searchByModel(vehicleRepository.getAll(), model);
  if (vehicles.length === 0) {
    res.status(404).json({ message: "No vehicles found for the specified model." });
    return;
  }
  res.json(vehicles);

});

if(require.main === module) {
  app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
  });
};

export default app;
