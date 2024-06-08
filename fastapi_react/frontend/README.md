# History log

```bash
npm create vite@latest  # . | JavaScript
npm install
npm run dev
npm install -D tailwindcss postcss autoprefixer
```
Create `tailwind.config.js`
```JavaScript
/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [], 
    corePlugins: {
        preflight: false
    }
}
```
`index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
}
```

```bash
npm install antd --save
npm install axios
```
[components](https://ant.design/components/overview)

`vite.config.js`
```JavaScript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    }
  }
})
```