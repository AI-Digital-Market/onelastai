import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [loading, setLoading] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals getting started with AI",
      price: billingCycle === 'monthly' ? 29 : 290,
      originalPrice: billingCycle === 'monthly' ? null : 348,
      features: [
        "✅ Access to 25+ AI Tools",
        "✅ 5,000 API Calls/month",
        "✅ Basic Support (Email)",
        "✅ Mobile App Access",
        "✅ 5GB Storage",
        "❌ Custom AI Models",
        "❌ Priority Support",
        "❌ White-label Solutions"
      ],
      popular: false,
      color: "from-gray-600 to-gray-700",
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      description: "Best for professionals and growing businesses",
      price: billingCycle === 'monthly' ? 79 : 790,
      originalPrice: billingCycle === 'monthly' ? null : 948,
      features: [
        "✅ Access to 100+ AI Tools",
        "✅ 50,000 API Calls/month",
        "✅ Priority Support (Chat & Email)",
        "✅ Mobile + Desktop Apps",
        "✅ 100GB Storage",
        "✅ Basic Custom AI Models",
        "✅ Advanced Analytics",
        "✅ Team Collaboration (5 members)"
      ],
      popular: true,
      color: "from-purple-600 to-blue-600",
      buttonText: "Get Professional"
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: billingCycle === 'monthly' ? 199 : 1990,
      originalPrice: billingCycle === 'monthly' ? null : 2388,
      features: [
        "✅ Access to All AI Tools (500+)",
        "✅ Unlimited API Calls",
        "✅ 24/7 Premium Support (Phone, Chat, Email)",
        "✅ All Platform Access",
        "✅ Unlimited Storage",
        "✅ Advanced Custom AI Development",
        "✅ White-label Solutions",
        "✅ Dedicated Account Manager",
        "✅ Custom Integrations",
        "✅ SLA Guarantee"
      ],
      popular: false,
      color: "from-cyan-600 to-teal-600",
      buttonText: "Contact Sales"
    }
  ];

  const handlePayment = async (plan) => {
    setLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planName: plan.name,
          price: plan.price,
          billingCycle: billingCycle
        }),
      });
      
      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your AI Plan
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Unlock the power of AI for your business. Start free, scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-4 text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative bg-gray-700 w-16 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <motion.div 
                animate={{ x: billingCycle === 'yearly' ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg"
              />
            </motion.button>
            <span className={`ml-4 text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="ml-3 bg-gradient-to-r from-green-400 to-green-600 text-xs px-3 py-1 rounded-full text-white font-bold"
              >
                Save 17% 🎉
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-gradient-to-br ${plan.color} p-1 rounded-2xl ${
                plan.popular ? 'ring-2 ring-purple-400 shadow-2xl scale-105' : 'shadow-xl'
              }`}
            >
              {plan.popular && (
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
                >
                  🔥 Most Popular
                </motion.div>
              )}
              
              <div className="bg-gray-800 rounded-2xl p-8 h-full">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 text-lg">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                    {plan.originalPrice && (
                      <div className="text-gray-500 line-through text-lg mt-1">
                        ${plan.originalPrice}/{billingCycle === 'monthly' ? 'month' : 'year'}
                      </div>
                    )}
                  </div>

                  {billingCycle === 'yearly' && plan.originalPrice && (
                    <div className="text-green-400 text-sm font-medium">
                      💰 Save ${plan.originalPrice - plan.price} per year
                    </div>
                  )}
                </div>
                
                {/* Features List */}
                <ul className="space-y-3 mb-8 text-gray-300">
                  {plan.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start text-sm"
                    >
                      <span className="mr-3 mt-0.5">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePayment(plan)}
                  disabled={loading}
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    plan.buttonText
                  )}
                </motion.button>

                {/* Money Back Guarantee */}
                <div className="text-center mt-4 text-xs text-gray-400">
                  💯 30-day money-back guarantee
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎯 All Plans Include
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div className="text-center">
                <div className="text-3xl mb-2">🔒</div>
                <div className="font-semibold mb-1">Enterprise Security</div>
                <div className="text-sm text-gray-400">SOC 2 compliant, GDPR ready</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold mb-1">99.9% Uptime</div>
                <div className="text-sm text-gray-400">Reliable AI services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌍</div>
                <div className="font-semibold mb-1">Global CDN</div>
                <div className="text-sm text-gray-400">Fast worldwide access</div>
              </div>
            </div>
          </div>

          {/* FAQ Link */}
          <div className="mt-8">
            <p className="text-gray-400 mb-4">Have questions about our pricing?</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="text-cyan-400 hover:text-cyan-300 font-medium underline"
            >
              📞 Contact our sales team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
