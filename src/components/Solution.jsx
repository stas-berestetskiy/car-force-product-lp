import { useState, useEffect, useRef } from 'react'
import {
  CheckCircle2,
  ChevronRight,
  Smartphone,
  ShieldCheck,
  Clock,
  DollarSign,
  Wrench,
  Users,
  Zap,
  Brain
} from 'lucide-react'

const clientBenefits = [
  {
    category: 'Buy & Sell',
    color: 'forest',
    items: ['Transparent deals, fair pricing', 'Inspection & risk protection', 'Verified sellers & buyers']
  },
  {
    category: 'Service',
    color: 'forest',
    items: ['Mobile mechanic, save time', 'Transparent pricing, no stress', 'Quality guaranteed']
  },
  {
    category: 'Support',
    color: 'forest',
    items: ['Road Assistance 24/7', 'AI-mechanic advisor', 'Full service history in one app']
  },
]

const mechanicBenefits = [
  {
    title: 'Income',
    description: 'Steady flow of jobs, no shop rent or ads',
    icon: DollarSign
  },
  {
    title: 'Focus',
    description: 'Only service & repair, no sales or admin hassle',
    icon: Wrench
  },
  {
    title: 'Conditions',
    description: 'Flexible schedule, higher pay, brand trust',
    icon: Users
  },
]

const levels = [
  { level: 1, title: 'Road Assistance', description: 'Emergency help when you need it most' },
  { level: 2, title: 'Car Care Service', description: 'Regular maintenance made simple' },
  { level: 3, title: 'Buy & Sell', description: 'Transparent marketplace for vehicles' },
]

export default function Solution() {
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
      id="how-it-works"
      className="relative py-14 md:py-20 bg-gradient-to-b from-white to-forest-50/30 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-forest-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-forest-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-forest-50 border border-forest-200 text-forest-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle2 className="w-4 h-4" />
            The Solution
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            CarForce — Digital Platform
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A complete digital ecosystem for the full car ownership cycle.
            <span className="text-forest-600 font-semibold"> Win-win for everyone.</span>
          </p>
        </div>

        {/* Two columns: For clients & For mechanics */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          {/* For Clients */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-slate-900 rounded-3xl p-8 h-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-1 text-forest-400">
                  <ChevronRight className="w-5 h-5" />
                  <ChevronRight className="w-5 h-5 -ml-3" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">For Clients</h3>
              </div>

              {/* Avatar placeholder */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-forest-400 to-forest-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-slate-400 text-sm">Everything you need</p>
                  <p className="text-white font-semibold text-lg">in one app</p>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                {clientBenefits.map((benefit, index) => (
                  <div key={benefit.category}>
                    <h4 className="text-forest-400 font-semibold mb-2">{benefit.category}</h4>
                    <ul className="space-y-1">
                      {benefit.items.map((item, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {index !== clientBenefits.length - 1 && (
                      <div className="mt-4 h-px bg-slate-700" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* For Mechanics */}
          <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 h-full shadow-sm">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-1 text-forest-500">
                  <ChevronRight className="w-5 h-5" />
                  <ChevronRight className="w-5 h-5 -ml-3" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">For Mechanics</h3>
              </div>

              {/* Avatar placeholder */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-forest-100 to-forest-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-12 h-12 text-forest-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-slate-500 text-sm">Join our network</p>
                  <p className="text-slate-900 font-semibold text-lg">grow your business</p>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                {mechanicBenefits.map((benefit, index) => (
                  <div key={benefit.title}>
                    <div className="flex items-center gap-3 mb-2">
                      <benefit.icon className="w-5 h-5 text-forest-500" />
                      <h4 className="text-slate-900 font-semibold">{benefit.title}</h4>
                    </div>
                    <p className="text-slate-500 text-sm pl-8">{benefit.description}</p>
                    {index !== mechanicBenefits.length - 1 && (
                      <div className="mt-4 h-px bg-slate-100" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Digital & AI-first section */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-forest-500/10 to-transparent" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-forest-500/5 rounded-full blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                  Digital & AI-first
                </h3>
                <p className="text-forest-400 text-xl font-medium mb-8">
                  The all-in-one app for car ownership
                </p>

                {/* Decorative chevrons */}
                <div className="flex items-center gap-1 mb-10">
                  {[...Array(6)].map((_, i) => (
                    <ChevronRight
                      key={i}
                      className="w-8 h-8 text-forest-400"
                      style={{ opacity: 1 - i * 0.12 }}
                    />
                  ))}
                </div>

                {/* Levels */}
                <div className="space-y-4">
                  {levels.map((item, index) => (
                    <div
                      key={item.level}
                      className="bg-gradient-to-r from-forest-500/20 to-forest-500/5 backdrop-blur rounded-xl p-4 border border-forest-500/20"
                      style={{ marginLeft: `${index * 16}px` }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-forest-400 font-medium text-sm">Level {item.level}</span>
                        <span className="text-white font-semibold">{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI note */}
                <div className="mt-8 flex items-center gap-3 text-slate-400">
                  <Brain className="w-6 h-6 text-forest-400" />
                  <span className="text-sm">
                    <span className="text-forest-400 font-semibold">AI</span> — the brain connecting all levels of CarForce
                  </span>
                </div>
              </div>

              {/* Right content - Phone mockup */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Phone frame */}
                  <div className="w-64 h-[500px] bg-slate-800 rounded-[3rem] p-3 shadow-2xl border border-slate-700">
                    {/* Screen */}
                    <div className="w-full h-full bg-gradient-to-b from-forest-50 to-white rounded-[2.25rem] overflow-hidden">
                      {/* Status bar */}
                      <div className="bg-white px-6 py-3 flex items-center justify-between">
                        <span className="text-xs text-slate-400">9:41</span>
                        <div className="w-20 h-6 bg-slate-900 rounded-full" />
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-slate-400 rounded-sm" />
                        </div>
                      </div>

                      {/* App content */}
                      <div className="p-4">
                        {/* App header */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-display font-bold text-slate-900">CARFORCE</span>
                          <span className="text-forest-500 text-xs font-medium">Login</span>
                        </div>

                        {/* Location & vehicle */}
                        <div className="flex gap-2 mb-4">
                          <div className="flex-1 bg-slate-100 rounded-lg p-2">
                            <span className="text-[10px] text-slate-400">Location</span>
                            <p className="text-xs font-medium text-slate-700">New York</p>
                          </div>
                          <div className="flex-1 bg-slate-100 rounded-lg p-2">
                            <span className="text-[10px] text-slate-400">Vehicle</span>
                            <p className="text-xs font-medium text-slate-700">Add car</p>
                          </div>
                        </div>

                        {/* Service grid */}
                        <div className="grid grid-cols-4 gap-2 mb-4">
                          {['Mechanic', 'Wash', 'Inspect', 'Fuel'].map((service) => (
                            <div key={service} className="bg-white border border-slate-200 rounded-lg p-2 text-center">
                              <div className="w-8 h-8 bg-forest-100 rounded-lg mx-auto mb-1" />
                              <span className="text-[8px] text-slate-600">{service}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA card */}
                        <div className="bg-forest-500 rounded-xl p-3 text-white">
                          <p className="text-[10px] opacity-80 mb-1">CarForce $5/month</p>
                          <p className="text-xs font-semibold">Peace of mind delivered</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-forest-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Win-Win
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

