# Monorepo Project

This is a monorepo containing two applications:

1. **Backend** - A Next.js application
2. **Web** - A React + Vite application

## Project Structure

```
monorepo/
├── apps/
│   ├── backend/  # Next.js application
│   └── web/      # React + Vite application
└── package.json  # Root workspace configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (v7 or later) or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd monorepo
npm install
```

### Running the Applications

#### Backend (Next.js)

```bash
npm run dev:backend
```

The backend application will be available at http://localhost:3000.

#### Web (React + Vite)

```bash
npm run dev:web
```

The web application will be available at http://localhost:5173.

### Building for Production

#### Backend (Next.js)

```bash
npm run build:backend
```

#### Web (React + Vite)

```bash
npm run build:web
```

## License

MIT