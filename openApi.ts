export const openApiSpec = {
  openapi: "3.0.0",
  info: {
    title: "Vehicle API",
    version: "1.0.0",
    description: "API documentation for the vehicle tech test.",
  },
  paths: {
    "/vehicles": {
      get: {
        summary: "Get all vehicles",
        responses: {
          "200": {
            description: "A list of vehicles",
          },
          "500": {
            description: "Internal server error",
          },
        },
      },
    },
    "/vehicles/make/{make}": {
      get: {
        summary: "Get vehicles by make",
        parameters: [
          {
            name: "make",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          "200": {
            description: "Vehicles matching the specified make",
          },
          "404": {
            description: "No vehicles found for the specified make",
          },
          "500": {
            description: "Internal server error",
          },
        },
      },
    },
    "/vehicles/model/{model}": {
      get: {
        summary: "Get vehicles by model",
        parameters: [
          {
            name: "model",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          "200": {
            description: "Vehicles matching the specified model",
          },
          "404": {
            description: "No vehicles found for the specified model",
          },
          "500": {
            description: "Internal server error",
          },
        },
      },
    },
  },
};
