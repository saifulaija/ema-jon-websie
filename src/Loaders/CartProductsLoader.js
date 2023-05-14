import { getShoppingCart } from "../utilities/fakedb";

const CartProductsLoader = async ()=>{
   const loadedProducts = await fetch('http://localhost:5000/products');
   const products = await loadedProducts.json();

   const storedCart = getShoppingCart();
   const savedCart = [];
   console.log(storedCart);
    for(const id in storedCart){
        const addedProduct = products.find(pd=> pd._id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
   return savedCart
}
export default CartProductsLoader;