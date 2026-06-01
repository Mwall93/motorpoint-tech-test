import { Vehicle } from "../repositories/vehicle-repository";

export const searchByMake = (vehicles: Vehicle[], make: string): Vehicle[] => {
  return vehicles.filter(v => v.make.toLowerCase() === make.toLowerCase());
};

export const searchByModel = (vehicles: Vehicle[], model: string): Vehicle[] => {
  return vehicles.filter(v => v.model.toLowerCase() === model.toLowerCase());
};
