/**
 * 1. install react stripe and stripe js
 * 2. Create checkOutFrom with card element
 * 3. Create account on stripe 
 * 4. Get publisable key from stripe
 * 5. get card information
 * 6. Create a payment method
 * 7. use test card to test payment
 * 8. On the server side install stripe > npm install --save stripe
 * 9. Create a payment intent api on server side with payment method type  payment_method_types: ['card'] 
 * 
 * 11. MAke sure amount bust be cents(multiply price by 100)
 * 12. Call payment intent api to get client secret an strore it in a state
 * 13. use confirmPayment api with client secret and card information
 * 14. Display confirm card success message
 * 14. Display confirm card error  message
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * */ 