# 🚀 Serverless Task API

A production-ready **serverless REST API** built using **AWS Lambda**, **API Gateway**, and **DynamoDB**.

This project demonstrates how to design, deploy, and expose a scalable backend API using modern cloud-native AWS services.

---

## 🧰 Tech Stack

- **AWS Lambda** (Node.js)
- **Amazon API Gateway** (HTTP API)
- **Amazon DynamoDB**
- **AWS IAM**
- **Node.js (ES Modules)**

---

## 📌 Features

- Create tasks using a REST API
- Auto-generated UUID as primary key
- Serverless & scalable architecture
- DynamoDB NoSQL persistence
- Production stage deployed on AWS

---

## 📡 Live API Endpoint

**POST /TaskApi**

---

## 🔹 Example Request (curl)

```bash
curl -X POST https://0ho0fxuir6.execute-api.us-east-1.amazonaws.com/prod/TaskApi \
-H "Content-Type: application/json" \
-d '{"title":"My first task","done":false}'
🔹 Example Response
{
  "message": "Task created",
  "item": {
    "id": "some-uuid-here",
    "title": "My first task",
    "done": false
  }
}


