import { useState, useEffect, useRef } from 'react'
import {
  Smartphone,
  ChevronRight,
  Star,
  Download,
  Apple,
  Play
} from 'lucide-react'

export default function DownloadCTA() {
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
      id="download"
      className="relative py-14 md:py-20 bg-gradient-to-b from-white to-forest-50 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest-500/20 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-forest-600/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />

              {/* Decorative chevrons */}
              <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 opacity-20">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex gap-1">
                    {[...Array(3)].map((_, j) => (
                      <ChevronRight
                        key={j}
                        className="w-8 h-8 text-forest-400"
                        style={{ opacity: 1 - j * 0.3 }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">
              {/* Left content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-forest-500/20 border border-forest-500/30 text-forest-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Download className="w-4 h-4" />
                  <span>Available Now</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Get CarForce on
                  <br />
                  <span className="text-forest-400">Your Phone</span>
                </h2>

                <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0">
                  Everything you need for your car — maintenance, buying, selling, roadside assistance —
                  all in one beautiful app. Download now and start your free trial.
                </p>

                {/* App store buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <a
                    href="#"
                    className="group flex items-center gap-3 bg-white hover:bg-forest-50 text-slate-900 px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <Apple className="w-8 h-8" />
                    <div className="text-left">
                      <div className="text-xs text-slate-500">Download on the</div>
                      <div className="font-semibold text-lg -mt-1">App Store</div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center gap-3 bg-white hover:bg-forest-50 text-slate-900 px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-slate-500">Get it on</div>
                      <div className="font-semibold text-lg -mt-1">Google Play</div>
                    </div>
                  </a>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-400 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span>4.9 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-forest-400 font-semibold">10K+</span>
                    <span>Downloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-forest-400 font-semibold">Free</span>
                    <span>14-day trial</span>
                  </div>
                </div>
              </div>

              {/* Right content - Phone mockup */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Phone frame */}
                  <div className="w-72 h-[580px] bg-slate-800 rounded-[3rem] p-3 shadow-2xl border border-slate-700/50">
                    {/* Screen */}
                    <div className="w-full h-full bg-gradient-to-b from-forest-50 to-white rounded-[2.5rem] overflow-hidden relative">
                      {/* Status bar */}
                      <div className="bg-white px-6 py-3 flex items-center justify-between">
                        <span className="text-xs text-slate-400 font-medium">9:41</span>
                        <div className="w-24 h-7 bg-slate-900 rounded-full" />
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 bg-slate-400 rounded-sm" />
                        </div>
                      </div>

                      {/* App content */}
                      <div className="p-5">
                        {/* App header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-forest-500 rounded-lg flex items-center justify-center">
                              <Smartphone className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-display font-bold text-slate-900">CarForce</span>
                          </div>
                          <div className="w-8 h-8 bg-slate-100 rounded-full" />
                        </div>

                        {/* Welcome message */}
                        <div className="mb-6">
                          <p className="text-slate-500 text-sm">Good morning!</p>
                          <h3 className="font-display font-bold text-xl text-slate-900">Your car is ready</h3>
                        </div>

                        {/* Car card */}
                        <div className="bg-gradient-to-br from-forest-500 to-forest-600 rounded-2xl p-4 mb-4 text-white">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <p className="text-forest-100 text-sm">My Vehicle</p>
                              <p className="font-semibold">Tesla Model 3</p>
                            </div>
                            <div className="bg-white/20 px-2 py-1 rounded-full text-xs">
                              Active
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <span className="bg-white/20 px-2 py-1 rounded text-xs">15,230 mi</span>
                            <span className="bg-white/20 px-2 py-1 rounded text-xs">Service OK</span>
                          </div>
                        </div>

                        {/* Quick actions */}
                        <div className="grid grid-cols-4 gap-2 mb-4">
                          {['Service', 'Buy', 'Sell', 'Help'].map((action) => (
                            <div key={action} className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                              <div className="w-8 h-8 bg-forest-50 rounded-lg mx-auto mb-1" />
                              <span className="text-xs text-slate-600">{action}</span>
                            </div>
                          ))}
                        </div>

                        {/* Promo card */}
                        <div className="bg-slate-900 rounded-xl p-4 text-white">
                          <p className="text-xs text-forest-400 mb-1">Special offer</p>
                          <p className="font-semibold text-sm">Get 30% off your first service</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-xl p-3 animate-float">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-forest-100 rounded-lg flex items-center justify-center">
                        <Star className="w-4 h-4 text-forest-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Rating</p>
                        <p className="font-bold text-slate-900">4.9/5</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-forest-500 text-white rounded-xl shadow-xl p-3 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      <span className="font-semibold text-sm">Free Download</span>
                    </div>
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

