import { removeFromCart } from "@/redux/feature/cartSlice";
import { useAppDispatch } from "@/redux/hooks"
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

interface propsTypes {
  id: number;
  img : string;
  name : string;
  price : string;
  quantity : number;
}


const CartProduct: React.FC<propsTypes> = ({
  id,
  img,
  name,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image src={img} alt={name}  width={60} height={60} className="rounded-md" />
        <div className="space-y-3 p-3">
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-500 text-[14px]">
            {quantity} x ${price}.00
          </p>
        </div>
      </div>

      <RxCross1 
      className="cursor-pointer mb-3"
      onClick={()=> dispatch(removeFromCart(id))}
      />
    </div>
  )
}

export default CartProduct

