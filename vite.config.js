// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      // Add any necessary alias configurations
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
});
