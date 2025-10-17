# 🧩 FrontEnd-CollaborativeWorkflow
> Frontend for the Collaborative Workflow project — a modular system designed to manage team tasks and processes efficiently.

This repository hosts the **frontend monorepo** for the Collaborative Workflow platform.  
It currently contains two Nuxt 4 applications:
- **Host app** — main web interface *(coming soon)*
- **Kanban app** — task board and drag-and-drop interface

This frontend connects to the **Symfony REST API MVP** deployed on Google Cloud Run, which provides the backend foundation of the project.

## 🧱 Tech Stack
| Layer | Technology |
|-------|-------------|
| Framework | Nuxt 4 (Vue 3 + Vite) |
| State Management | Pinia |
| Styling | Tailwind CSS + DaisyUI |
| Package Manager | pnpm (monorepo structure) |
| Drag & Drop | Vue Draggable Next or dnd-kit |
| Backend | Symfony 7 API on Google Cloud Run + Cloud SQL |

## 📂 Monorepo Structure
FrontEnd-CollaborativeWorkflow/
├── apps/
│   ├── host/       # Main web interface (planned)
│   └── kanban/     # Kanban board UI
├── package.json
├── pnpm-workspace.yaml
└── README.md

## 🧰 Development Setup
1️⃣ Clone the Repository  
git clone https://github.com/<your-username>/FrontEnd-CollaborativeWorkflow.git  
cd FrontEnd-CollaborativeWorkflow

2️⃣ Install Dependencies  
pnpm install

3️⃣ Run a Specific App (example with Kanban)  
cd apps/kanban  
pnpm run dev  
➡ Open: http://localhost:3000

## ⚙️ Environment Variables
Each app can have its own `.env` file if needed (for API URLs, tokens, etc.).  
Example:
NUXT_PUBLIC_API_URL=https://api.collaborativeworkflow.app

## 🧠 Roadmap (Phase 2)
- ✅ Integrate Host App  
- 🔄 Shared UI components (monorepo packages)  
- 🧩 Connect frontend with Symfony API  
- 🧪 Add unit & E2E testing  
- ☁️ Deployment to Vercel

## 🧾 License
MIT © Yann Judith (https://github.com/Juthyan)