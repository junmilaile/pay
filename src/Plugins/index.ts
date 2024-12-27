import fs from 'fs';
import path from 'path';

enum FileTypeEnum {
  JS = '.js',
  JSX = '.jsx',
  TS = '.ts',
  TSX = '.tsx',
  VUE = '.vue',
  SVELTE = '.svelte',
  MDX = '.mdx',
  MD = '.md',
}

type FileType =
  | FileTypeEnum.JS
  | FileTypeEnum.JSX
  | FileTypeEnum.TS
  | FileTypeEnum.TSX
  | FileTypeEnum.VUE
  | FileTypeEnum.SVELTE
  | FileTypeEnum.MDX
  | FileTypeEnum.MD;

interface vitePluginAutoRoutesOptions {
  pagesDir?: string;
  readFile?: typeof fs.promises.readFile;
  fileType?: FileType;
}

interface GetRouteConfig {
  (dir: string, basePath: string, fileType: FileType): void;
}

const getRouteConfig: GetRouteConfig = (dir, basePath, fileType) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.resolve(dir, file);
    const relativePath = path.relative(basePath, filePath);
    if (fs.statSync(filePath).isDirectory()) {
      getRouteConfig(filePath, basePath, fileType);
    }
    if (file.endsWith(fileType)) {
      const routePath = relativePath
        .replace(/\\/g, '/')
        .replace(`/${fileType}`, '')
        .replace(`/index${fileType}`, '')
        .replace(/\/_/g, '/:')
        .toLowerCase();

      const parts = routePath.split('/').filter(Boolean);

      if (
        parts.length > 1 &&
        parts[parts.length - 1] === parts[parts.length - 2]
      ) {
        parts.pop();
      }

      const finalPath = filePath


      console.log(parts, 'routerPath');
    }
  });
};

export default function vitePluginAutoRoutes(
  options: vitePluginAutoRoutesOptions = {
    pagesDir: 'src/pages',
    readFile: fs.promises.readFile,
    fileType: FileTypeEnum.TSX,
  }
) {
  const { pagesDir, readFile, fileType } = options;

  return {
    name: 'vite-plugin-auto-routes',
    configResolved(config) {
      console.log('vitePluginAutoRoutes configResolved');
      const pagesPath = path.resolve(config.root, pagesDir);
      const routers = getRouteConfig(pagesPath, pagesPath, fileType);
    },
  };
}
