import { resolve } from 'path';
import { readdirSync } from 'fs';
import detect from 'detect-port';
import react from '@vitejs/plugin-react';
import { defineConfig, UserConfigExport } from 'vite';

export default async function config(): Promise<UserConfigExport> {
  const port = await detect(3000);

  const items = readdirSync(resolve(__dirname, 'src'));

  return defineConfig({
    server: {
      port,
    },
    plugins: [react()],
    resolve: {
      alias: items.map((item) => {
        if (/\.(t|j)sx?$/.test(item)) {
          const name = item.replace(/\.(t|j)sx?$/, '');

          return {
            find: name,
            replacement: `/src/${name}`,
          };
        } else {
          return {
            find: item,
            replacement: `/src/${item}`,
          };
        }
      }),
    },
    build: {
      target: 'esnext',
    },
  });
}
