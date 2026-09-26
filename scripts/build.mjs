import { cp, mkdir, rm } from 'node:fs/promises';

await rm('www', { recursive: true, force: true });
await mkdir('www', { recursive: true });
await Promise.all([
  cp('index.html', 'www/index.html'),
  cp('manifest.webmanifest', 'www/manifest.webmanifest'),
  cp('apple-touch-icon.svg', 'www/apple-touch-icon.svg'),
]);