'use strict'
const AWS = require('aws-sdk');

AWS.config.apiVersions = {
  dynamodb: '2012-10-08',
  ec2: '2013-02-01'
};

AWS.config.update({ region: "ap-south-1" });

exports.handler = async (event, context) => {
  const db = new AWS.DynamoDB.DocumentClient({ region: "ap-south-1" });
  const responseBody = "";
  const statusCode = 0;
  const { id } = event.pathParameters;

  const params = {
    TableName: "donor",
    Key: {
      id: id
    }
  }

  try {
    const data = await db.get(params).promise();
    responseBody = JSON.stringify(data.Item);
    statusCode = 200;
  } catch (error) {
    responseBody = 'unable to get data';
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: responseBody

  }

  return response;
}
