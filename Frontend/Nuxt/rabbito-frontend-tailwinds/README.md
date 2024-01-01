# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# About tsconfig.json

"target": "ESNext": This specifies the ECMAScript target version for the generated JavaScript files. Setting it to "ESNext" allows you to use the latest ECMAScript features.

"module": "ESNext": Similar to "target", this specifies the module system for the generated JavaScript files. "ESNext" allows for more modern module handling.

"strict": true: Enabling strict type checking helps catch common programming mistakes and provides better type inference.

"jsx": "preserve": This option is relevant if you're using JSX in your project. "preserve" mode means TypeScript should preserve JSX expressions and not transpile them.

"esModuleInterop": true: This setting is usually enabled when working with code that uses CommonJS modules. It ensures compatibility between ES modules and CommonJS modules.

"allowSyntheticDefaultImports": true: Allows you to use ES6-style import statements with modules that have a default export.

"allowJs": true: Enables TypeScript to process JavaScript files as well. This is useful if you have both TypeScript and JavaScript files in your project.

"skipLibCheck": true: Skipping type checking of declaration files from external dependencies. This can speed up compilation but may result in fewer type checks for third-party libraries.

"strictPropertyInitialization": false: Disables strict checking of property initialization. You can adjust this setting based on your preference for strictness.

"noImplicitAny": false: Disabling this option means that TypeScript won't enforce explicit type annotations for variables with the any type.

"moduleResolution": "node": Specifies the module resolution strategy. "node" is commonly used for Node.js projects.

# dockerize nuxt-apps
$ docker build . -t aneh2killa/rabbitranch

# to push the apps to dockerhub
$ docker push aneh2killa/rabbitranch

# to run on docker
$ docker run -it -d -p 7000:3000 --name rabbitranch aneh2killa/rabbitranch
