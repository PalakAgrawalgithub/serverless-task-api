# Serverless Task API 🚀

A production-ready serverless REST API built using **AWS Lambda**, **API Gateway**, and **DynamoDB**.

## 🔧 Tech Stack
- AWS Lambda (Node.js)
- Amazon API Gateway (HTTP API)
- Amazon DynamoDB
- AWS IAM
- Node.js (ES Modules)

## 📌 Features
- Create tasks using REST API
- Auto-generated UUID as primary key
- Serverless & scalable architecture
- Production stage deployed on AWS

## 📡 Live API Endpoint
POST /TaskApi

https://0ho0fxuir6.execute-api.us-east-1.amazonaws.com/prod/TaskApi
### Example Request (curl)

```bash
curl -X POST https://0ho0fxuir6.execute-api.us-east-1.amazonaws.com/prod/TaskApi ^
-H "Content-Type: application/json" ^
-d "{\"title\":\"My first task\",\"done\":false}"
{
  "title": "My first task",
  "done": false
}

5. Save file (**Ctrl + S**)

---

## Step 2: Make sure your project has these files
Inside your project folder you should have:
- `index.mjs`
- `README.md`

✅ Optional but good:
- `package.json`

If you don’t have `package.json`, tell me and I’ll generate it.

---

## Step 3: Push project to GitHub
1. Open Command Prompt in your project folder  
   (Shift + Right Click → “Open PowerShell/Terminal here”)

2. Run these commands:

```bash
git init
git add .
git commit -m "Initial commit - Serverless Task API"
https://0ho0fxuir6.execute-api.us-east-1.amazonaws.com/prod/TaskApi

---

## 🔹 Example Request (curl)

```bash
curl -X POST https://0ho0fxuir6.execute-api.us-east-1.amazonaws.com/prod/TaskApi \
-H "Content-Type: application/json" \
-d '{"title":"My first task","done":false}'

Example Response

{
  "message": "Task created",
  "item": {
    "id": "some-uuid-here",
    "title": "My first task",
    "done": false
  }
}

