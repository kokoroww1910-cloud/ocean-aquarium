# Maldives Ocean Aquarium

An extensible ocean aquarium system built with Next.js, React, Tailwind CSS, Three.js, @react-three/fiber, and @react-three/drei.

The application renders an immersive Maldives-inspired reef environment with cinematic lighting and interactive marine life. It is designed as a scalable foundation for future productization.

The system follows a modular architecture that separates simulation logic, rendering, UI, and data models to ensure long-term extensibility.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - start the Next.js development server
- `npm run build` - create a production build
- `npm run start` - run the production server
- `npm run lint` - run ESLint
## Architecture

- lib/ocean - core simulation configuration for environment, lighting, camera, and species data contracts
- components/ocean - 3D scene modules including water rendering, fish system, and diver interaction controls
- components/ui - reusable UI components for immersive experience layer
- data/fishDatabase.json - structured marine species schema designed for future integration of real-world biological data

## System Design Principles

- Modular and extensible ocean simulation engine
- Data-driven marine ecosystem design
- Separation of rendering, logic, and UI layers
- Support for future AI-driven fish behavior systems
- Optimized for performance scaling on low-end devices (M1-class hardware)
