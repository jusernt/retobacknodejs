// eslint-disable-next-line @typescript-eslint/no-var-requires
const swapiProvider = require("../providers/SwapiProvider");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const peopleJson = require("../schemas/people.json");

const get = async (event) => {
  var newData = {};
  var response = await swapiProvider.getPeople(event);

  for (const [key, value] of Object.entries(peopleJson.properties)) {
    newData[value.translate] = response.data[key];
    console.log(`${key}: ${value}`);
  }

  return {
    status: response.status ? response.status : 500,
    body: newData,
  };
};

module.exports = {
  get,
};
