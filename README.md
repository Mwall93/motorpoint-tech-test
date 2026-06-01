## Running the App
- Install dependencies with `npm i`
- Run the app with `npm run dev`
- Navigate to `/docs` use the API through OpenAPI.

## What has been implemented

- `GET /vehicles` - list all vehicles from `repositories/vehicles.json`
- `GET /vehicles/make/:make` - return vehicles matching `make`
- `GET /vehicles/model/:model` - return vehicles matching `model`
- `GET /vehicles/search?make=[make]&model=[model]` - return vehicles matching one or both search criteria. Currently returns all vehicles if no params are received. 
- `/docs` - interactive API documentation powered by `@scalar/express-api-reference`

## Error handling
- Error handling currently just extends to 404/500 for not found or internal server error.

## Data model
Updated the vehicle model to include: 
- `price`
- `make`
- `model`
- `trim`
- `colour`
- `co2_level` (optional)
- `transmission`
- `fuel_type`
- `engine_size`
- `date_first_reg`
- `mileage`

## Testing
Tests can be run with `npm run test`
A simple unit test suite is included for the lookup utility functions in `tests/utils/vehicle.test.ts`. 

## Future Improvements
As I was limited on time unfortunately, there's a few improvements I'd have made but didn't have time to implement. 

- Sorting
- Caching - Rather than fetching the entire set of cars each time, cache the response. 
Especially in a real world application 
- Pagination - Return a smaller set of results interatively. Reduce UI load times, reduce server load etc.
- Linting

-----------------------------------------------------------------------------

This repository is for a technical task in Typescript provided by Motorpoint.

Clone this repository and complete the following tasks.

- Add the remaining fields to the vehicle model
- Implement an endpoint for listing all cars
- Implement an endpoint for listing cars by make
- Implement an endpoint for listing cars by model
- Add any other endpoints you think are useful / relevant

Consider the following as well.

- Error handling
- Unit tests

Upload the completed solution to your own GitHub and provide the link to it (ensure it is publically available).
The solution must compile and run without any errors.