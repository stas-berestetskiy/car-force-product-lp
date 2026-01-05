import { useState, useEffect, useRef } from 'react'
import {
  Check,
  Minus,
  Plus,
  ChevronRight,
  Trophy,
  Zap,
  Clock,
  DollarSign,
  Eye,
  Shield,
  Heart,
  Layers
} from 'lucide-react'

const criteria = [
  { id: 'time', label: 'Time', icon: Clock },
  { id: 'value', label: 'Value ($)', icon: DollarSign },
  { id: 'clarity', label: 'Clarity', icon: Eye },
  { id: 'safety', label: 'Safety', icon: Shield },
  { id: 'trust', label: 'Trust', icon: Heart },
  { id: 'fullService', label: 'Full Service', icon: Layers },
]

const competitorGroups = [
  {
    category: 'Road Assistance',
    competitors: [
      { name: 'AAA', scores: { time: '-', value: '-', clarity: '-', safety: '+', trust: '-', fullService: '-' } },
      { name: 'Insurance companies', scores: { time: '-', value: '-', clarity: '-', safety: '+', trust: '-', fullService: '-' } },
      { name: 'Local roadside', scores: { time: '±', value: '-', clarity: '-', safety: '-', trust: '-', fullService: '-' } },
    ],
    advantages: ['Fast response time', 'Real-time tracking', 'Flexible usage model']
  },
  {
    category: 'Car Care Service',
    competitors: [
      { name: 'Wrench / YourMechanic', scores: { time: '+', value: '-', clarity: '±', safety: '-', trust: '-', fullService: '-' } },
      { name: 'Independent mechanics', scores: { time: '-', value: '+', clarity: '-', safety: '-', trust: '-', fullService: '-' } },
      { name: 'Dealership service', scores: { time: '-', value: '-', clarity: '-', safety: '+', trust: '-', fullService: '-' } },
    ],
    advantages: ['Beautiful, simple UX', 'Digital / AI-first', 'On-site service in a few clicks', 'Predictive maintenance', '24/7 support']
  },
  {
    category: 'Buy & Sell',
    competitors: [
      { name: 'Carvana', scores: { time: '+', value: '-', clarity: '+', safety: '+', trust: '±', fullService: '-' } },
      { name: 'Peer-to-peer (FB, CL)', scores: { time: '-', value: '+', clarity: '-', safety: '-', trust: '-', fullService: '-' } },
      { name: 'Traditional dealerships', scores: { time: '-', value: '-', clarity: '-', safety: '+', trust: '-', fullService: '-' } },
    ],
    advantages: ['Fair market pricing', 'Verified vehicles', 'Safe and convenient transactions']
  },
]

const ScoreIcon = ({ score }) => {
  if (score === '+') {
    return <Check className="w-5 h-5 text-forest-500" />
  } else if (score === '-') {
    return <Minus className="w-5 h-5 text-slate-300" />
  } else {
    return <span className="text-slate-400 font-medium">±</span>
  }
}

export default function Comparison() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
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
      id="comparison"
      className="relative py-14 md:py-20 bg-gradient-to-b from-forest-50/30 via-white to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-forest-50/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-forest-50 border border-forest-200 text-forest-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Trophy className="w-4 h-4" />
            Why CarForce
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Competitive Matrix
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how CarForce compares to traditional solutions across every dimension
          </p>
        </div>

        {/* Category tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {competitorGroups.map((group, index) => (
            <button
              key={group.category}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-forest-300 hover:text-forest-600'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Comparison content */}
        <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Desktop table view */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Table header */}
              <div className="bg-slate-900 text-white">
                <div className="grid grid-cols-7 gap-4 p-4">
                  <div className="col-span-1 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-forest-400" />
                    <ChevronRight className="w-4 h-4 text-forest-400 -ml-2" />
                    <span className="font-semibold">Competitor</span>
                  </div>
                  {criteria.map((criterion) => (
                    <div key={criterion.id} className="text-center">
                      <criterion.icon className="w-5 h-5 mx-auto mb-1 text-forest-400" />
                      <span className="text-sm font-medium">{criterion.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitors rows */}
              <div className="divide-y divide-slate-100">
                {competitorGroups[activeTab].competitors.map((competitor, index) => (
                  <div
                    key={competitor.name}
                    className="grid grid-cols-7 gap-4 p-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="col-span-1 font-medium text-slate-700">
                      {competitor.name}
                    </div>
                    {criteria.map((criterion) => (
                      <div key={criterion.id} className="flex justify-center">
                        <ScoreIcon score={competitor.scores[criterion.id]} />
                      </div>
                    ))}
                  </div>
                ))}

                {/* CarForce row - highlighted */}
                <div className="grid grid-cols-7 gap-4 p-4 bg-forest-50 border-t-2 border-forest-500">
                  <div className="col-span-1 font-bold text-forest-700 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    CarForce
                  </div>
                  {criteria.map((criterion) => (
                    <div key={criterion.id} className="flex justify-center">
                      <div className="w-8 h-8 bg-forest-500 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet card view */}
          <div className="lg:hidden space-y-4">
            {competitorGroups[activeTab].competitors.map((competitor, index) => (
              <div
                key={competitor.name}
                className="bg-white rounded-xl border border-slate-200 p-4"
              >
                <h4 className="font-semibold text-slate-800 mb-3">{competitor.name}</h4>
                <div className="grid grid-cols-3 gap-2">
                  {criteria.map((criterion) => (
                    <div key={criterion.id} className="flex items-center gap-2 text-sm">
                      <ScoreIcon score={competitor.scores[criterion.id]} />
                      <span className="text-slate-500">{criterion.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* CarForce card - highlighted */}
            <div className="bg-forest-500 rounded-xl p-4 text-white">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                CarForce
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {criteria.map((criterion) => (
                  <div key={criterion.id} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4" />
                    <span className="text-forest-100">{criterion.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CarForce advantages */}
          <div className="mt-10 bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Advantages label */}
              <div className="md:w-32 flex-shrink-0">
                <div className="inline-flex md:flex items-center justify-center gap-2 bg-forest-100 text-forest-700 px-4 py-2 rounded-lg font-semibold text-sm">
                  <Trophy className="w-4 h-4" />
                  <span>Advantages</span>
                </div>
              </div>

              {/* Advantages list */}
              <div className="flex-1">
                <h4 className="font-display text-xl font-bold text-slate-900 mb-4">
                  Why CarForce wins in {competitorGroups[activeTab].category}
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {competitorGroups[activeTab].advantages.map((advantage, index) => (
                    <div
                      key={advantage}
                      className="flex items-center gap-3 p-3 bg-forest-50 rounded-lg"
                    >
                      <div className="w-6 h-6 bg-forest-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <ChevronRight
                  key={i}
                  className="w-6 h-6 text-forest-300"
                  style={{ opacity: 1 - i * 0.2 }}
                />
              ))}
            </div>
            <p className="text-lg md:text-xl text-slate-700 max-w-2xl">
              <span className="text-forest-600 font-semibold">CarForce doesn't just win in each segment</span>
              {' '}— it unifies the entire car-ownership journey into one seamless ecosystem.
            </p>
            <div className="hidden sm:flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <ChevronRight
                  key={i}
                  className="w-6 h-6 text-forest-300"
                  style={{ opacity: 0.4 + i * 0.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

