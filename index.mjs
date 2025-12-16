import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { randomUUID } from "crypto";

const client = new DynamoDBClient({});

export const handler = async (event) => {
  try {
    // Parse request body
    const body = JSON.parse(event.body || "{}");

    if (!body.title) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "title is required" }),
      };
    }

    const item = {
      id: { S: randomUUID() },       // ✅ matches partition key
      title: { S: body.title },
      done: { BOOL: body.done ?? false },
      createdAt: { S: new Date().toISOString() },
    };

    await client.send(
      new PutItemCommand({
        TableName: "tasks",
        Item: item,
      })
    );

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Task created",
        item: {
          id: item.id.S,
          title: item.title.S,
          done: item.done.BOOL,
        },
      }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
