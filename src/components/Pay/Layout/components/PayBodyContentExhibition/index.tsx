// 定义组件的属性接口，包含一个子节点属性
interface PayBodyContentExhibitionProps {
  children: React.ReactNode;
}

// 定义函数组件，接收子节点作为属性并渲染
function PayBodyContentExhibition({ children }: PayBodyContentExhibitionProps) {
  return <>{children}</>;
}

// 导出组件
export default PayBodyContentExhibition;
