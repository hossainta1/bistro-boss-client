import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>Bistro | My Cart</title>

            </Helmet>
            {/* <SectionTitle
                subHeading={"My Cart"}
                heading={"Want to add more?"}

            ></SectionTitle> */}
            <div className="uppercase">
                <h3 className="text-3xl">Total items: {cart.length}</h3>
                <h3 className="text-3xl">Total price: ${total}</h3>
                <button className="btn btn-warning btn-sm">PAY</button>
            </div>
        </div>
    );
};

export default MyCart;