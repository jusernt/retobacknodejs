// eslint-disable-next-line @typescript-eslint/no-var-requires
const AWS = require("aws-sdk");
//import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const documentClient = new AWS.DynamoDB.documentClient();
//const documentClient = new DynamoDBClient({ region: 'us-east-1'});

const dynamodbGet = async (id) => {
  const params = {
    // eslint-disable-next-line no-undef
    tableName: process.env.DYNAMODB_TABLE,
    Key: {
      id,
    },
  };
  const data = await documentClient.get(params).promise();
  if (!data || !data.Item) {
    throw Error("Failed get document.");
  }

  return data.Item;
};

const dynamodbCreate = async (data) => {
  if (!data.id && !data.name) {
    throw Error("Param: id / name, no exists.");
  }
  const params = {
    // eslint-disable-next-line no-undef
    tableName: process.env.DYNAMODB_TABLE,
    Item: data,
  };
  const response = await documentClient.put(params).promise();
  if (!response) {
    throw Error("Failed create document.");
  }
  return data;
};

module.exports = {
  dynamodbGet,
  dynamodbCreate,
};
