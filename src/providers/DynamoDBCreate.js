"use strict";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4: uuidv4 } = require("uuid");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const { name, height, mass, age } = JSON.parse(event.body);
  if (name == undefined || name == "" || typeof name !== "string") {
    console.error("Validation Failed");
    callback(null, {
      statusCode: 400,
      headers: { "Content-Type": "text/plain" },
      body: "Couldn't create the item.",
    });
    return;
  }

  const params = {
    // eslint-disable-next-line no-undef
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuidv4(),
      name: name,
      height: height,
      mass: mass,
      age: age,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  // write the todo to the database
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { "Content-Type": "text/plain" },
        body: "Couldn't create the item.",
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};
