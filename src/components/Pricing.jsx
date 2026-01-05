import { useState, useEffect, useRef } from 'react'
import {
  Check,
  ChevronRight,
  Sparkles,
  Shield,
  Crown,
  Zap,
  ArrowRight
} from 'lucide-react'

const plans = [
  {
    id: 'free',
    name: 'Free Trial',
    price: '$0',
    period: '14 days',
    description: 'Try CarForce risk-free',
    icon: Zap,
    features: [
      'Full app access',
      'AI Mechanic chat',
      'Service history tracking',
      'Price estimates',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
    badge: null,
  },
  {
    id: 'smart',
    name: 'Smart',
    price: '$5',
    period: '/mo',
    description: 'Essential digital tools',
    icon: Sparkles,
    features: [
      'AI Mechanic + customer support',
      'Complete service history',
      'Access all mobile services',
      'Book services in a few clicks',
    ],
    cta: 'Get Started',
    highlighted: false,
    badge: null,
  },
  {
    id: 'safety',
    name: 'Safety',
    price: '$15',
    period: '/mo',
    description: 'Peace of mind on the road',
    icon: Shield,
    features: [
      'Everything from Smart',
      '24/7 Roadside Assistance',
      'Emergency support anytime',
      'Priority response time',
    ],
    cta: 'Choose Safety',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    id: 'total',
    name: 'Total Care',
    price: '$75',
    period: '/mo',
    yearlyPrice: '$900/yr',
    description: 'Complete car care solution',
    icon: Crown,
    features: [
      'Everything from Safety',
      'Full annual maintenance package',
      'Save up to 30% on services',
      'Predictable costs, no surprises',
    ],
    cta: 'Go Total Care',
    highlighted: false,
    badge: 'Best Value',
  },
]

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-14 md:py-20 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-forest-50/50 via-transparent to-forest-50/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-forest-50 border border-forest-200 text-forest-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Crown className="w-4 h-4" />
            Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Hybrid Model
          </h2>
          <p className="text-xl text-forest-600 font-medium mb-2">
            Subscription + On-Demand Services
          </p>
          <p className="text-slate-600 max-w-xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
{plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl transition-all duration-500 flex flex-col ${
                plan.highlighted
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-[1.02] lg:scale-105'
                  : 'bg-white border border-slate-200 hover:border-forest-300 hover:shadow-lg'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold ${
                  plan.highlighted
                    ? 'bg-forest-500 text-white'
                    : 'bg-forest-100 text-forest-700 border border-forest-200'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Plan header */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    plan.highlighted ? 'bg-forest-500' : 'bg-forest-50'
                  }`}>
                    <plan.icon className={`w-6 h-6 ${plan.highlighted ? 'text-white' : 'text-forest-600'}`} />
                  </div>

                  <h3 className={`font-display text-xl font-bold mb-1 ${
                    plan.highlighted ? 'text-white' : 'text-slate-900'
                  }`}>
                    {plan.name}
                  </h3>

                  <p className={`text-sm ${plan.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`font-display text-4xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-slate-900'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <div className="h-5">
                    {plan.yearlyPrice ? (
                      <p className={`text-sm mt-1 ${plan.highlighted ? 'text-forest-300' : 'text-forest-600'}`}>
                        {plan.yearlyPrice} billed annually
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'bg-forest-500' : 'bg-forest-100'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-forest-600'}`} />
                      </div>
                      <span className={`text-sm ${plan.highlighted ? 'text-slate-200' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group mt-6 ${
                  plan.highlighted
                    ? 'bg-forest-500 hover:bg-forest-400 text-white'
                    : plan.id === 'free'
                    ? 'bg-forest-500 hover:bg-forest-600 text-white'
                    : 'bg-slate-100 hover:bg-forest-500 text-slate-700 hover:text-white'
                }`}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Value proposition */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-forest-50 to-forest-100/50 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Chevrons decoration */}
              <div className="hidden md:flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <ChevronRight
                    key={i}
                    className="w-8 h-8 text-forest-300"
                    style={{ opacity: 0.4 + i * 0.2 }}
                  />
                ))}
              </div>

              {/* Text content */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                  Car owners already spend{' '}
                  <span className="font-bold text-slate-900">$1,000–1,200/year</span>
                  {' '}on maintenance.
                </p>
                <p className="text-lg md:text-xl text-slate-700 mt-2">
                  <span className="text-forest-600 font-bold">CarForce</span> turns this into{' '}
                  <span className="font-semibold text-slate-900">
                    a simple subscription + on-demand service.
                  </span>
                </p>
              </div>

              {/* Chevrons decoration */}
              <div className="hidden md:flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <ChevronRight
                    key={i}
                    className="w-8 h-8 text-forest-300"
                    style={{ opacity: 1 - i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust note */}
        <div className={`mt-8 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-slate-500 text-sm">
            No hidden fees • Cancel anytime • 14-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  )
}

