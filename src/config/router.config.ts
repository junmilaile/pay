function getRouteConfig() {
  const result = [];
  const modules = import.meta.glob('../pages/**/*.tsx', { eager: false });
  const metaConfig = import.meta.glob('../pages/**/*.meta.ts', {
    import: 'default',
  });

  let router = Object.keys(modules).map((path) => {
    const routePath = path
      .replace('../pages', '')
      .replace('.tsx', '')
      .toLowerCase()
      .replace('/index', '')
      .replace(/\/_/g, ':/');
    return {
      routePath,
      component: modules[path],
    };
  });

  if (!router.some((route) => route.routePath === '/')) {
    router.push({
      routePath: '/',
      component: modules['../pages/Home/index.tsx'],
    });

    router = router.filter((item) => item.routePath !== '/home');
  }

  const meta = Object.keys(metaConfig).map(async (path: string) => {
    const metaFunction = metaConfig[path];
    result.push(await metaFunction());
    const metaData = await Promise.all(result);
    return metaData;
  });

  

  console.log(meta);
}

export default getRouteConfig;
