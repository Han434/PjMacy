import { useProduct } from "../features";
import productData from '../Data/productData.json'

function App() {
  const { product, getProductById } = useProduct();
  console.log(product);
  return (<></>);
  // const { addNewProduct, addNewPayment, products, payments } = useOrder();
  // console.log(products);
  // const product = {
  //   productName: 'abfg'
  // };
  // const payment = {
  //   amount: 100
  // };

  // return (
  //   <>
  //     <h1>Pizza</h1>
  //     {products.map(product => (
  //       <div key={product.productName}>{product.productName}</div>
  //     ))}
  //     {payments.map(product => (
  //       <div key={product.amount}>{product.amount}</div>
  //     ))}
  //     <button onClick={() => addNewProduct(product)}>
  //       Add Something else
  //     </button>
  //     <button onClick={() => addNewPayment(payment)}>
  //       Add New Payment
  //     </button>
  //   </>
  // );
}

export default App;
