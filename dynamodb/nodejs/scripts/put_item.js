require('dotenv').config();
const { DynamoDB } = require("@aws-sdk/client-dynamodb");

(async () => {
  const client = new DynamoDB({
    region: "us-west-2",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });

  try {
    const params = {
      TableName: "AwsSdkTest",
      Item: {
        id: { N: "3" },
        name: { S: "huga" },
        string_set: { SS: ["mozi001", "mozi002"] },
        int_set: { NS: ["1", "2"] },
        bool: { BOOL: true },
        null: { NULL: true },
        map: { M: { "aaa": { S: "a" }, "bbb": { S: "b" }, "ccc": { N: "2" } } }
      }
    }

    client.putItem(params, (err, data) => {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    });
  } catch (err) {
    console.error(err);
  }
})();
