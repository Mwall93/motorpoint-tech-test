import express, { Express, Request, Response } from "express";
import VehicleRepository from "./repositories/vehicle-repository";
import { searchByMake, searchByModel } from "./utils/vehicleFilters";
import { apiReference } from "@scalar/express-api-reference";
import { openApiSpec } from "./openApi";

const app: Express = express();
const port = 3000;

const vehicleRepository = new VehicleRepository();

app.use(
  "/docs",
  apiReference({
    url: "/openapi.json",
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/vehicles", (req: Request, res: Response) => {
  try {
    const vehicles = vehicleRepository.getAll();
    res.json(vehicles);
  } catch (err) {
    console.error("Error fetching vehicles:", err);
    res.status(500).json({ message: "Internal server error" });
  }

});

app.get("/vehicles/make/:make", (req: Request, res: Response) => {
  try {
    const make = req.params.make;
    //Potential improvements:
    // Sorting
    // caching 
    // pagination
    // validation
    
    const vehicles = searchByMake(vehicleRepository.getAll(), make);
    if (vehicles.length === 0) {
      res.status(404).json({ message: "No vehicles found for the specified make." });
      return;
    }
    res.json(vehicles);
  } catch (err) {
    console.error("Error searching vehicles by make:", err);
    res.status(500).json({ message: "Internal server error" });
  }

});

app.get("/vehicles/model/:model", (req: Request, res: Response) => {
  try {
    const model = req.params.model;
    const vehicles = searchByModel(vehicleRepository.getAll(), model);
    if (vehicles.length === 0) {
      res.status(404).json({ message: "No vehicles found for the specified model." });
      return;
    }
    res.json(vehicles);
  } catch (err) {
    console.error("Error searching vehicles by model:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

if(require.main === module) {
  app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
  });
  app.get("/openapi.json", (req: Request, res: Response) => {
  res.json(openApiSpec);
  });
};

export default app;
