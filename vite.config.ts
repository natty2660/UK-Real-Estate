import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function caseInsensitiveResolver(): Plugin {
  return {
    name: 'vite-case-insensitive-resolver',
    resolveId(source, importer) {
      if (!importer || !source.startsWith('.')) return null;
      const importerDir = path.dirname(importer);
      const targetExact = path.resolve(importerDir, source);

      if (
        fs.existsSync(targetExact) ||
        fs.existsSync(targetExact + '.tsx') ||
        fs.existsSync(targetExact + '.ts')
      ) {
        return null;
      }

      const targetDir = path.resolve(importerDir, path.dirname(source));
      if (!fs.existsSync(targetDir)) return null;

      const baseName = path.basename(source).replace(/\.(tsx|ts|jsx|js)$/, '');

      try {
        const files = fs.readdirSync(targetDir);
        const match = files.find((f) => {
          const fNoExt = f.replace(/\.(tsx|ts|jsx|js)$/, '');
          return fNoExt.toLowerCase() === baseName.toLowerCase();
        });

        if (match) {
          return path.resolve(targetDir, match);
        }
      } catch {
        return null;
      }

      return null;
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [caseInsensitiveResolver(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
