import { useState, useEffect, useRef } from 'react'
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MessageSquare
} from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Michael Thompson',
    role: 'Tesla Model 3 Owner',
    location: 'San Francisco, CA',
    rating: 5,
    text: "CarForce completely changed how I maintain my car. The AI mechanic diagnosed an issue my dealer missed, and the mobile service came to my office. Saved me hours and hundreds of dollars.",
    highlight: 'Saved me hours and hundreds of dollars'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'First-time Car Buyer',
    location: 'Austin, TX',
    rating: 5,
    text: "As someone who knew nothing about cars, buying my first vehicle was terrifying. CarForce's inspection service and transparent pricing gave me the confidence I needed. No more fear of hidden defects!",
    highlight: 'No more fear of hidden defects'
  },
  {
    id: 3,
    name: 'James Rodriguez',
    role: 'Fleet Manager',
    location: 'Miami, FL',
    rating: 5,
    text: "Managing 15 company vehicles used to be a nightmare. Now everything is in one app — service history, scheduling, costs. The predictive maintenance alone has reduced our downtime by 40%.",
    highlight: 'Reduced downtime by 40%'
  },
  {
    id: 4,
    name: 'Emily Watson',
    role: 'Busy Mom of 3',
    location: 'Denver, CO',
    rating: 5,
    text: "Between kids' activities and work, I have zero time for car maintenance. CarForce sends reminders, the mechanic comes to my driveway, and I don't have to sit in a waiting room. Game changer!",
    highlight: 'Game changer for busy families'
  },
  {
    id: 5,
    name: 'David Park',
    role: 'Sold 2 Cars via CarForce',
    location: 'Seattle, WA',
    rating: 5,
    text: "Sold both my cars through CarForce. Fair valuations, verified buyers, and the transaction was smooth and safe. Got 15% more than what the dealership offered me.",
    highlight: 'Got 15% more than dealership offers'
  },
  {
    id: 6,
    name: 'Lisa Martinez',
    role: 'Road Trip Enthusiast',
    location: 'Phoenix, AZ',
    rating: 5,
    text: "The 24/7 roadside assistance is worth every penny. Got a flat tire at 11 PM in the middle of nowhere — help arrived in 25 minutes. Peace of mind you can't put a price on.",
    highlight: 'Help arrived in 25 minutes'
  },
  {
    id: 7,
    name: 'Robert Kim',
    role: 'Independent Mechanic',
    location: 'Chicago, IL',
    rating: 5,
    text: "As a mechanic, CarForce has been incredible for my business. Steady flow of customers, no need for expensive advertising, and I can focus on what I do best — fixing cars.",
    highlight: 'Steady flow of customers'
  },
  {
    id: 8,
    name: 'Amanda Foster',
    role: 'Total Care Subscriber',
    location: 'New York, NY',
    rating: 5,
    text: "The Total Care plan is brilliant. I pay a flat monthly fee and never worry about unexpected repair costs. Already saved over $800 this year compared to my old maintenance routine.",
    highlight: 'Saved over $800 this year'
  },
]

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
      />
    ))}
  </div>
)

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const sectionRef = useRef(null)
  const itemsPerPage = 4

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

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

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-14 md:py-20 bg-gradient-to-b from-white via-forest-50/20 to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-forest-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-50/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-forest-50 border border-forest-200 text-forest-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of satisfied car owners who trust CarForce for all their automotive needs
          </p>
        </div>

        {/* Stats bar */}
        <div className={`flex flex-wrap justify-center gap-8 md:gap-16 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-forest-600">10,000+</div>
            <div className="text-slate-500 text-sm">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-forest-600">4.9</div>
            <div className="text-slate-500 text-sm flex items-center justify-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              Average Rating
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-forest-600">$2.5M+</div>
            <div className="text-slate-500 text-sm">Saved by Users</div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-2 gap-6">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-forest-200 transition-all duration-300"
              >
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-forest-200" />
                </div>

                {/* Review text */}
                <p className="text-slate-700 leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                {/* Highlight */}
                <div className="inline-block bg-forest-50 text-forest-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {testimonial.highlight}
                </div>

                {/* Author info */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    {/* Avatar with initials */}
                    <div className="w-10 h-10 bg-gradient-to-br from-forest-400 to-forest-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                      <div className="text-slate-500 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <StarRating rating={testimonial.rating} />
                    <div className="text-slate-400 text-xs mt-1">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevPage}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-forest-50 hover:border-forest-300 hover:text-forest-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentPage === i
                      ? 'bg-forest-500 w-8'
                      : 'bg-slate-300 hover:bg-forest-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-forest-50 hover:border-forest-300 hover:text-forest-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-slate-600 mb-4">Ready to join them?</p>
          <button className="bg-forest-500 hover:bg-forest-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-forest-500/25">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  )
}

