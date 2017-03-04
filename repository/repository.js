const { readFile } = require("fs");
const { join } = require("path");

const read = path => new Promise((resolve, reject) => {
  readFile(path, "utf8", (err, data) => {
    if (err) reject(err);
    else resolve(JSON.parse(data));
  });
});

const readFolder = folder => {
  const path = join("data", folder);
  return read(join(path, "index.json")).then(index =>
    Promise.all(index.map(entry => read(join(path, entry))))
  );
};

const findBy = field => (objs, value) =>
  value ?
    objs.find(obj => obj[field] == value) :
    objs;

const filterBy = field => (objs, value) => objs.filter(obj => obj[field] == value);

const findById = findBy("id");

const filterVehicles = (vehicle, field, value) => 
  readFolder(vehicle).then(vehicles => filterBy(field)(vehicles, value))

module.exports = {
  tanks: (id) => readFolder("tanks").then(tanks => findById(tanks, id)),
  aircrafts: (id) => readFolder("aircrafts").then(aircrafts => findById(aircrafts, id)),
  periods: (id) => readFolder("periods").then(periods => findById(periods, id)),
  nations: (id) => readFolder("nations").then(nations => findById(nations, id)),

  tanksByPeriod: period => filterVehicles("tanks", "period", period),
  tanksByNation: nation => filterVehicles("tanks", "nation", nation),
  tanksByVariant: variant => filterVehicles("tanks", "variant", variant),

  aircraftsByPeriod: period => filterVehicles("aircrafts", "period", period),
  aircraftsByNation: nation => filterVehicles("aircrafts", "nation", nation),
  aircraftsByVariant: variant => filterVehicles("aircrafts", "variant", variant),
};
