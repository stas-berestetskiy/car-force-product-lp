import { useState, useEffect, useRef } from 'react'
import {
  AlertCircle,
  ChevronRight
} from 'lucide-react'

const categories = [
  {
    id: 'buying',
    title: 'Buying',
    icon: '🛒',
    problems: [
      { title: 'Fear of mistakes', description: 'Hidden defects, fake listings' },
      { title: 'Financial pressure', description: 'Hidden fees, overpayments' },
      { title: 'Lack of trust', description: 'No transparency, no confidence' },
    ]
  },
  {
    id: 'service',
    title: 'Service / Repair',
    icon: '🔧',
    problems: [
      { title: 'Wasted time', description: 'Trips, waits, inconvenient schedule' },
      { title: 'Unpredictable costs', description: 'Expensive repairs, forced sales' },
      { title: 'Stress and distrust', description: 'Hidden pricing, doubts, poor service' },
    ]
  },
  {
    id: 'selling',
    title: 'Selling',
    icon: '💰',
    problems: [
      { title: 'Low valuations', description: 'Losing money on trade-in/sale' },
      { title: 'Long process', description: 'Negotiations for weeks/months' },
      { title: 'Risks and stress', description: 'Unsafe deals, uncertainty' },
    ]
  },
]

export default function Problems() {
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
      id="problems"
      className="relative py-14 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-slate-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4" />
            The Problem
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            The Pains of Car Ownership
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Car owners face countless frustrations throughout the ownership journey.
            Here's what makes it so painful.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {categories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              {/* Category header */}
              <div className="bg-slate-900 text-white rounded-2xl px-6 py-4 mb-4 flex items-center gap-3">
                <div className="flex items-center gap-1 text-forest-400">
                  <ChevronRight className="w-4 h-4" />
                  <ChevronRight className="w-4 h-4 -ml-2" />
                </div>
                <span className="font-display font-semibold text-lg">{category.title}</span>
              </div>

              {/* Problems list */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                {category.problems.map((problem, problemIndex) => (
<div
                    key={problem.title}
                    className={`p-5 ${problemIndex !== category.problems.length - 1 ? 'border-b border-slate-100' : ''}`}
                  >
                    <h4 className="font-semibold text-slate-900 mb-1">{problem.title}</h4>
                    <p className="text-slate-500 text-sm">{problem.description}</p>
                    <div className="mt-3 h-0.5 bg-gradient-to-r from-slate-300 to-transparent rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

{/* Statistics */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800">200M</span>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xl sm:text-2xl text-slate-700">
                <span className="text-forest-600 font-semibold">car owners</span> in the US
              </p>
              <p className="text-xl sm:text-2xl text-slate-500 italic">face this every day</p>
            </div>

            {/* Decorative chevrons */}
            <div className="hidden lg:flex items-center gap-1 ml-8">
              {[...Array(5)].map((_, i) => (
                <ChevronRight
                  key={i}
                  className="w-8 h-8 text-forest-200"
                  style={{ opacity: 1 - i * 0.15 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

