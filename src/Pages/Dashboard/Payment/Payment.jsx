import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import useCart from "../../../hooks/useCart";

// TODO: Provide publisable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK)


const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));

    return (
        <div className="w-full px-10">
            <SectionTitle subHeading="Please proceed to" heading="Payment"></SectionTitle>
            <h2 className="text-3xl">Payment Here!!!</h2>
            <Elements stripe={stripePromise}>
                <CheckoutFrom cart={cart} price={price}></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;