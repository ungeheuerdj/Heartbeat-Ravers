# Heartbeat Ravers

## Überblick

Dieses Repository enthält die Grundstruktur für die Heartbeat-Ravers-Anwendung. Das Projekt ist in
zwei Hauptteile unterteilt:

- **Backend** – Ein schnelles FastAPI-Projekt, das Beispiel-Endpunkte und Pydantic-Modelle für
  Benutzer und Events bereitstellt.
- **Frontend** – Ein React-/Vite-Setup mit einer Startseite, Login-/Registrierungsformularen und
  einem Profil-Platzhalter.

## Tech-Stack

| Bereich   | Technologie            | Beschreibung                                                     |
|-----------|------------------------|------------------------------------------------------------------|
| Backend   | [FastAPI](https://fastapi.tiangolo.com/) | Modernes Python-Webframework mit Typsicherheit und OpenAPI-Unterstützung. |
| Backend   | [Uvicorn](https://www.uvicorn.org/)       | ASGI-Server zum lokalen Starten des FastAPI-Backends.             |
| Frontend  | [React](https://react.dev/)               | UI-Bibliothek zur Erstellung der Benutzeroberfläche.              |
| Frontend  | [Vite](https://vitejs.dev/)               | Entwicklungs- und Build-Tooling für das React-Frontend.          |

## Projektstruktur

```
app/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   └── models.py
│   └── requirements.txt
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── pages/
        │   ├── HomePage.jsx
        │   ├── LoginPage.jsx
        │   ├── ProfilePage.jsx
        │   └── RegisterPage.jsx
        └── styles.css
```

## Lokale Entwicklung

### Voraussetzungen

- **Backend:** Python 3.11 (oder höher) empfohlen
- **Frontend:** Node.js 18 (oder höher) sowie npm oder pnpm

### Backend starten

```bash
cd app/backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Der Service ist danach unter <http://localhost:8000> erreichbar. Die API-Dokumentation befindet sich
unter <http://localhost:8000/docs>.

### Frontend starten

```bash
cd app/frontend
npm install
npm run dev -- --host
```

Die Entwicklungsoberfläche ist im Browser unter <http://localhost:5173> verfügbar. Die Beispielseiten
verwenden Platzhalterlogik, um später an das Backend angebunden zu werden.

## Nächste Schritte

- Persistente Datenbank und echte Authentifizierung ergänzen.
- API-Aufrufe vom Frontend an das Backend einbinden.
- UI mit Branding, Dark Mode und Event-Features erweitern.
