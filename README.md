# QR Code Generator App 🧾

A simple fullstack project that allows users to generate QR codes from URLs. Built as a DevOps & Cloud portfolio project, with Docker, Terraform, and modern deployment workflows.

## Tech Stack
- Python + Flask (backend)
- HTML + CSS (frontend)
- Docker & Docker Compose
- Terraform (infra simulation)
- GitHub Actions (CI/CD)
- Vercel & Render (deployment)

## 🚀 Local Development (with Docker Compose)
To run the project locally using Docker Compose:

git clone https://github.com/florencito/qr-code-generator-devc.git
cd qr-code-generator-devc
docker-compose up --build
This will start:

Backend (Flask API) on http://localhost:8000

Frontend (HTML + JS) on http://localhost:3000

Then, go to http://localhost:3000, enter a URL and click Generate QR to get your code.

## 🐳 Docker-only (optional)
If you want to run the backend alone using Docker:

cd backend

docker build -t qr-backend .

docker run -p 8000:8000 qr-backend

Then use Postman or curl to test the /generate endpoint.

## 🗂️ Project Structure
qr-code-generator/
├── backend/  # Flask API to generate QR
├── frontend/  # Static HTML + JS frontend
├── docker-compose.yml  # Compose file to run both services
├── terraform/  # (WIP) Simulated AWS infra
├── render.yaml  # Configuration for Render deployment
└── README.md
