const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { planName, price, billingCycle } = req.body;

      // Create Stripe Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `AI Digital Market - ${planName} Plan`,
                description: `${planName} plan for AI Digital Market (onelastai.com)`,
                images: ['https://onelastai.com/logo.png'],
              },
              unit_amount: price * 100, // Convert to cents
              recurring: billingCycle === 'monthly' ? {
                interval: 'month',
              } : {
                interval: 'year',
              },
            },
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}&plan=${planName}`,
        cancel_url: `${req.headers.origin}/pricing?canceled=true`,
        customer_email: req.body.email || undefined,
        metadata: {
          plan: planName,
          billingCycle: billingCycle,
          website: 'onelastai.com'
        },
        subscription_data: {
          metadata: {
            plan: planName,
            website: 'onelastai.com'
          }
        },
        allow_promotion_codes: true,
        billing_address_collection: 'required',
      });

      res.status(200).json({ url: session.url });
    } catch (err) {
      console.error('Stripe error:', err);
      res.status(500).json({ 
        statusCode: 500, 
        message: err.message || 'Payment processing failed' 
      });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
