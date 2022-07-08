import axios from 'axios';

(async () => {
  function delay() {
    // Promesa que retorna boolean
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
    return promise;
  }

  function getProducts(){
    const promise = axios.get("https://api.escuelajs.co/api/v1/products")
    return promise
  }
  async function getProductsAsync(){
    const promise = await axios.get("https://api.escuelajs.co/api/v1/products")
    return promise.data;
  }


  console.log('------------------------');
  const res = await delay(); // res es boolean
  console.log(res);
  console.log('------------------------');
  const products = await getProducts();
  console.log(products.data);

  console.log('------------------------');
  const products2 = await getProductsAsync()
  console.log(products2);
})();
