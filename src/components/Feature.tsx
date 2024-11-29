import { FaShippingFast, FaLock, FaStar } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

const Feature = () => {
    const data = [
        {
            img : <FaStar size={40}/>,
            title : "Premium Quality",
            desc : "Expertly crafted with high-quality materials.",
        },
        {
            img : <FaShippingFast size={40}/>,
            title : "Free Shipping",
            desc : "Enjoy free shipping on all orders over $99.",
        },
        {
            img : <FaLock size={40}/>,
            title : "Secure Payment",
            desc : "Your payment is safe and secure with us.",
        },
    ]
  return (
    <>
      <div className="container p-16 ">
        <div className="grid md:grid-cols-2 gap-y-8 gap-4 lg:gap-y-4 lg:grid-cols-3">
            {data.map(item => <FeatureCard key={item.title} img={item.img} title={item.title}
             desc={item.desc}
            /> )}
        </div>
      </div>
    </>
  )
}

export default Feature
