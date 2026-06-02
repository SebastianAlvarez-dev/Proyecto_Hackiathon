# 🚑 Agente de IA para Emergencias Hospitalarias

Sistema inteligente para gestión y análisis de emergencias hospitalarias utilizando IA, FastAPI, React, Supabase, OpenAI y notificaciones automáticas mediante Discord Webhooks.

---

# 🌐 Demo del Sistema

🔗 Sistema desplegado:

https://proyectohackiathon.vercel.app

---

# 💬 Canal de Alertas Discord

🔗 Discord:

https://discord.gg/65ypTrYr

---

# 🧠 Tecnologías Utilizadas

## Frontend

- React + Vite
- JavaScript
- Fetch API.
- CSS Inline

## Backend

- FastAPI
- Python
- OpenAI API
- Supabase
- Requests
- Uvicorn

## Base de Datos

- Supabase PostgreSQL

## Notificaciones

- Discord Webhooks

---

# 🤖 Modelo de IA Utilizado

Modelo utilizado:

```bash
gpt-4.1-mini

La IA analiza:

Motivo de emergencia
Cobertura médica
Preexistencias
Riesgo del paciente
Recomendaciones rápidas
🏥 Lógica del Sistema de Pólizas

El sistema trabaja con 3 tipos principales de pólizas médicas:

Póliza	Estado	Cobertura	Copago
VIP-001	Activa	Emergency Full	$25
VIP-002	Inactiva	Basic	$50
VIP-003	Activa	Premium Emergency	$15
⚙️ Funcionamiento del Sistema

Cuando un paciente ingresa:

El sistema valida la póliza en Supabase.
Verifica si la póliza está activa o inactiva.
Consulta enfermedades preexistentes.
La IA analiza el motivo de emergencia.
Genera nivel de riesgo y recomendaciones.
Guarda el caso clínico en Supabase.
Envía una alerta automática al canal de Discord.
🏥 Ejemplos de Cobertura
VIP-001
Cobertura completa de emergencias
Riesgo alto recibe atención prioritaria
Copago reducido
VIP-002
Cobertura básica
Mayor copago
Puede requerir validación manual
VIP-003
Cobertura premium
Atención prioritaria
Copago mínimo
⚙️ Funcionalidades

✅ Validación de pólizas

✅ Consulta de preexistencias

✅ Análisis inteligente con IA

✅ Historial de emergencias

✅ Notificaciones automáticas en Discord

✅ Sistema desplegado en la nube

✅ Integración con OpenAI GPT-4.1-mini

🏥 Flujo del Sistema
El usuario ingresa datos del paciente.
FastAPI recibe la emergencia.
Se consulta Supabase.
OpenAI genera el análisis clínico.
Se guarda el caso en la base de datos.
Discord recibe una alerta automática.
🧱 Arquitectura

Frontend (Vercel)
↓
Backend FastAPI (Render)
↓
Supabase + OpenAI
↓
Discord Webhooks

📦 Estructura del Proyecto
proyecto_hackiathon/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
🔐 Variables de Entorno
Backend (.env)
SUPABASE_URL=your_url
SUPABASE_KEY=your_key
OPENAI_API_KEY=your_openai_key
▶️ Ejecución Local
Backend
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
Frontend
cd frontend

npm install

npm run dev
🚀 Despliegue
Frontend
Vercel
Backend
Render
Base de Datos
Supabase
Alertas
Discord Webhooks
📡 Endpoints API
Obtener historial
GET /cases
Analizar emergencia
POST /emergency

Ejemplo:

{
  "nombre": "Carlos Mena",
  "cedula": "1723456789",
  "poliza": "VIP-001",
  "motivo": "Dolor torácico"
}