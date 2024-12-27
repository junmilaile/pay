function delay(tiem: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, tiem);
  });
}

type RequestFunction<T> = () => Promise<T>;
const useRequest: RequestFunction<
  Array<{ name: string; age: number; address: string }>
> = () => {
  const data = [
    {
      name: '张三',
      age: 18,
      address: '北京',
    },
    {
      name: '李四',
      age: 20,
      address: '上海',
    },
  ];

  return new Promise((resolve) => {
    (async () => {
      await delay(500);
      resolve(data);
    })();
  });
};

export default useRequest;
