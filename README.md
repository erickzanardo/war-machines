# War machines

War machines is a repository of combat vehicles (tanks, aircrafts) information that provides REST and GraphQl (Comming soon) apis.

## Running

 - `yarn install`
 - `npm start`

## REST apis

`/api/tanks`

Fetches all the tanks

`/api/tanks/:id`

Fetch the tank with the given id

`/api/aircrafts`

Fetches all the aircrafts 

`/api/aircrafts/:id`

Fetch the aircraft with the given id

`/api/periods`

Fetches all the periods 

`/api/periods/:id`

Fetch the period with the given id

`/api/periods/:id/tanks`

Fetch the tanks from the given period id

`/api/periods/:id/aircrafts`

Fetch the aircrafts from the given period id

`/api/nations`

Fetches all the nations 

`/api/nations/:id`

Fetch the nation with the given id

`/api/nations/:id/tanks`

Fetch the tanks from the given nation id

`/api/nations/:id/aircrafts`

Fetch the aircrafts from the given nation id

## Contributing

All data is stored on `json` files under the `data` folder, just add another entry under the folder and submmit a Pull Request, better tools for new data input maybe be added on the future.
