'use strict'
const AWS = require('aws-sdk');

AWS.config.apiVersions = {
  dynamodb: '2012-10-08'
};

AWS.config.update({ region: "ap-south-1" });

exports.handler = async (event, context) => {
  const db = new AWS.DynamoDB.DocumentClient({ region: "ap-south-1" });
  var id = String(Math.round(Math.random() * 10000000));
  let statusCode = 0;
  const { type } = event;
  let items = '';
  let TableName='';

  if(type==='donor'){
    items = {
      id: id,
      name: event.name,
      email: event.email,
      mobile: event.mobile,
      age: event.age,
      city: event.city,
      gender: event.gender,
      bloodgroup: event.bloodgroup,
      disease: event.disease,
      drinkCount: event.drinkCount,
      aadhar: event.aadhar,
      discharge: event.discharge
    };
    TableName= "donor";
  } else {
    items = {
      id: id,
      name: event.name,
      email: event.email,
      mobile: event.mobile,
      age: event.age,
      city: event.city,
      gender: event.gender,
      bloodgroup: event.bloodgroup,
      hospital: event.hospital,
      caseSheet: event.caseSheet
    };
    TableName="patient";
  }

  const params = {
    TableName: TableName,
    Item: items
  };

  try {
    await db.put(params).promise();
    statusCode = 200;
  } catch (error) {
    statusCode = 403;
  }


  const response = {
    statusCode: statusCode,
    body: {'ref':id}
  };

  return response;

};
