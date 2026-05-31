import { searchByMake, searchByModel } from "../../utils/vehicleFilters";

const vehicles = [
  { make: "BMW", model: "1 SERIES" },
  { make: "Ford", model: "Fiesta" },
] as any[];

describe("Vehicle filters", () => {
  describe("searchByMake", () => {
    it("should return vehicles matching the make", () => {
      const result = searchByMake(vehicles, "BMW");
      expect(result).toEqual([{ make: "BMW", model: "1 SERIES" }]);
    });

    it("should be case insensitive", () => {
      const result = searchByMake(vehicles, "ford");
      expect(result).toEqual([{ make: "Ford", model: "Fiesta" }]);
    });

    it("should return an empty array if no matches are found", () => {
      const result = searchByMake(vehicles, "Toyota");
      expect(result).toEqual([]);
    });
  });

  describe("searchByModel", () => {
    it("should return vehicles matching the model", () => {
      const result = searchByModel(vehicles, "Fiesta");
      expect(result).toEqual([{ make: "Ford", model: "Fiesta" }]);
    });

    it("should be case insensitive", () => {
      const result = searchByModel(vehicles, "1 series");
      expect(result).toEqual([{ make: "BMW", model: "1 SERIES" }]);
    });

    it("should return an empty array if no matches are found", () => {
      const result = searchByModel(vehicles, "Civic");
      expect(result).toEqual([]);
    });
  });
});
