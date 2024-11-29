import { useAppSelector } from "@/redux/hooks";
import { RxCross1 } from "react-icons/rx";
import  CartProduct  from "./CartProduct";

const Cart = ({ setShowCart }: { setShowCart: (value: boolean) => void }) => {
  const Products = useAppSelector((state) => state.cartReducer);

  // Calculate total price
  const getTotal = () => {
    return Products.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
  };

  return (
    <div
      className=" w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll"
    >
      <div className="max-w-[400px] w-full min-h-full bg-black absolute right-0 top-0 p-6">
        {/* Close Button */}
        <RxCross1
          className="absolute right-0 top-0 m-6 cursor-pointer text-[24px] text-gray-500"
          onClick={() => setShowCart(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-white uppercase text-center tracking-wider">Your Cart</h3>

        {/* Cart Products */}
        <div className="mt-6 space-y-2 text-white">
          {Products?.map((item: any) => (
            <CartProduct
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>

        {/* Total Section */}
        <div className="flex justify-between items-center font-medium text-xl py-4">
          <p>Total:</p>
          <p>${getTotal()}.00</p>
        </div>

        {/* Action Buttons */}
        <button className="bg-black text-gray-500 text-center w-full rounded-3xl py-2 hover:text-white border-2 border-Accent mb-4 mt-4">
          View Cart
        </button>
        <button className="bg-black text-gray-500  text-center w-full rounded-3xl py-2 hover:text-white border-2 border-Accent mb-4 mt-4">
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default Cart;
