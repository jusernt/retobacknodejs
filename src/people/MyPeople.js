// eslint-disable-next-line @typescript-eslint/no-var-requires
const dynamodbProvider = require("../providers/DynamoDBProvider");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4: uuidv4 } = require("uuid");

const read = async (event) => {
  const { id } = event.pathParameters;
  const response = await dynamodbProvider.dynamodbGet(id).catch((err) => {
    console.log("Error GET:", err);
    return {
      statusCode: 500,
      body: "GET: Error request.",
    };
  });

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

const create = async (event) => {
  const { name, height, mass, age } = JSON.parse(event.body);
  const created = new Date();
  const id = uuidv4();
  const myParams = {
    id,
    name,
    height,
    mass,
    age,
    created,
  };

  console.log("myParams", myParams);
  const response = await dynamodbProvider
    .dynamodbCreate(myParams)
    .catch((err) => {
      console.log("Error CREATE:", err);
      return {
        statusCode: 500,
        body: "CREATE: Error request.",
      };
    });

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

module.exports = {
  read,
  create,
};
