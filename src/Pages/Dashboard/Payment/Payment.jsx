import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";

// TODO: Provide publisable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK)


const Payment = () => {
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading="Please proceed to" heading="Payment"></SectionTitle>
            <h2 className="text-3xl">Payment Here!!!</h2>
            <Elements stripe={stripePromise}>
                <CheckoutFrom></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;