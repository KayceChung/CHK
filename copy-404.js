// Cross-platform script to copy 404.html to dist folder
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const source = join(__dirname, '404.html');
const dest = join(__dirname, 'dist', '404.html');

try {
  // Ensure dist folder exists
  const distDir = join(__dirname, 'dist');
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true });
  }

  // Copy file
  copyFileSync(source, dest);
  console.log('✅ Copied 404.html to dist/');
} catch (error) {
  console.error('❌ Failed to copy 404.html:', error.message);
  process.exit(1);
}
