import { cpSync, existsSync, mkdirSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, 'dist');
const docsDir = join(__dirname, 'docs');

if (!existsSync(distDir)) {
  console.error('❌ dist/ does not exist. Run the GitHub Pages build first.');
  process.exit(1);
}

rmSync(docsDir, { recursive: true, force: true });
mkdirSync(docsDir, { recursive: true });
cpSync(distDir, docsDir, { recursive: true });

console.log('✅ Synced dist/ to docs/ for GitHub Pages on main.');