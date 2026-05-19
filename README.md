# Maldives Ocean Aquarium

An extensible first-version ocean simulation foundation built with Next.js, React, Tailwind CSS, Three.js, `@react-three/fiber`, and `@react-three/drei`.

The current MVP focuses on a single Maldives shallow reef scene with engine-level structure for future productization: modular ocean environment settings, lighting, diver camera configuration, species data contracts, placeholder 3D fish, foggy water atmosphere, and a minimal Vision Pro-style control layer.

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

- `lib/ocean` - simulation configuration for environment, lighting, camera, and species data contracts
- `components/ocean` - 3D scene modules for water, fish rendering, and diver light controls
- `components/ui` - minimal reusable interface components
- `data/fishDatabase.json` - placeholder real-world marine species database shape
