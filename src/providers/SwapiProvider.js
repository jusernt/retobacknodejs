// eslint-disable-next-line @typescript-eslint/no-var-requires
const { get } = require("axios");

const api = "https://swapi.py4e.com/api/";

const getPeople = async (event) => {
  var response = {};
  var id = event.pathParameters.id;
  var data = await get(api + "people/" + id);

  if (data.status == 200) {
    response = data.data;
  }

  return {
    status: data.status,
    data: response,
  };
};

const getPlanet = async (event) => {
  var response = {};
  var id = event.pathParameters.id;
  var data = await get(api + "planets/" + id);

  if (data.status == 200) {
    response = data.data;
  }

  return {
    status: data.status,
    data: response,
  };
};

module.exports = {
  getPeople,
  getPlanet,
};
