import { useState, useEffect } from 'react';
import {
    Car,
    Wrench,
    ShoppingCart,
    Shield,
    Sparkles,
    ChevronRight,
    Menu,
    X,
    ArrowRight,
} from 'lucide-react';

const navLinks = [
    { name: 'Problem', href: '#problems' },
    { name: 'Solution', href: '#how-it-works' },
    { name: 'Compare', href: '#comparison' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#testimonials' },
];

const services = [
    {
        label: 'Buy & Sell',
        icon: () => (
            <svg
                viewBox='0 0 64 64'
                fill='none'
                className='w-10 h-10 md:w-12 md:h-12'
            >
                <rect
                    x='8'
                    y='28'
                    width='48'
                    height='20'
                    rx='4'
                    fill='#3d8d6f'
                />
                <path
                    d='M12 28L18 18H46L52 28'
                    stroke='#265b49'
                    strokeWidth='2'
                    strokeLinecap='round'
                />
                <rect
                    x='14'
                    y='18'
                    width='36'
                    height='10'
                    rx='2'
                    fill='#5aa88a'
                />
                <circle cx='18' cy='44' r='5' fill='#1c3d33' />
                <circle cx='18' cy='44' r='2' fill='#94a3b8' />
                <circle cx='46' cy='44' r='5' fill='#1c3d33' />
                <circle cx='46' cy='44' r='2' fill='#94a3b8' />
                <rect
                    x='22'
                    y='22'
                    width='8'
                    height='5'
                    rx='1'
                    fill='#dbeee4'
                />
                <rect
                    x='34'
                    y='22'
                    width='8'
                    height='5'
                    rx='1'
                    fill='#dbeee4'
                />
                <path
                    d='M54 32H58C59.1 32 60 32.9 60 34V36C60 37.1 59.1 38 58 38H54'
                    stroke='#2d7159'
                    strokeWidth='2'
                />
                <text
                    x='32'
                    y='38'
                    textAnchor='middle'
                    fill='white'
                    fontSize='8'
                    fontWeight='bold'
                >
                    $
                </text>
            </svg>
        ),
    },
    {
        label: 'Maintenance',
        icon: () => (
            <svg
                viewBox='0 0 64 64'
                fill='none'
                className='w-10 h-10 md:w-12 md:h-12'
            >
                <circle cx='32' cy='32' r='20' fill='#dbeee4' />
                <circle cx='32' cy='32' r='14' fill='#3d8d6f' />
                <path
                    d='M32 22V32L38 38'
                    stroke='white'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <circle cx='32' cy='32' r='3' fill='#1c3d33' />
                <path
                    d='M48 16L52 12M52 12L56 16M52 12V20'
                    stroke='#5aa88a'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path d='M12 44L16 40H24L20 48H12L12 44Z' fill='#2d7159' />
                <rect
                    x='18'
                    y='42'
                    width='8'
                    height='3'
                    rx='1'
                    fill='#5aa88a'
                    transform='rotate(-45 18 42)'
                />
            </svg>
        ),
    },
    {
        label: 'Parts',
        icon: () => (
            <svg
                viewBox='0 0 64 64'
                fill='none'
                className='w-10 h-10 md:w-12 md:h-12'
            >
                <circle cx='32' cy='32' r='18' fill='#3d8d6f' />
                <circle cx='32' cy='32' r='12' fill='#265b49' />
                <circle cx='32' cy='32' r='6' fill='#1c3d33' />
                <circle cx='32' cy='32' r='3' fill='#5aa88a' />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <circle
                        key={i}
                        cx={32 + 15 * Math.cos((angle * Math.PI) / 180)}
                        cy={32 + 15 * Math.sin((angle * Math.PI) / 180)}
                        r='3'
                        fill='#dbeee4'
                    />
                ))}
                <path d='M8 52L12 48L16 52L12 56L8 52Z' fill='#5aa88a' />
                <path
                    d='M12 52V44'
                    stroke='#3d8d6f'
                    strokeWidth='2'
                    strokeLinecap='round'
                />
                <path d='M48 12L52 8L56 12L52 16L48 12Z' fill='#5aa88a' />
                <path
                    d='M52 12V20'
                    stroke='#3d8d6f'
                    strokeWidth='2'
                    strokeLinecap='round'
                />
            </svg>
        ),
    },
    {
        label: 'Insurance',
        icon: () => (
            <svg
                viewBox='0 0 64 64'
                fill='none'
                className='w-10 h-10 md:w-12 md:h-12'
            >
                <path
                    d='M32 6L8 16V30C8 44 18 54 32 58C46 54 56 44 56 30V16L32 6Z'
                    fill='#3d8d6f'
                />
                <path
                    d='M32 10L12 18V30C12 42 20 50 32 54C44 50 52 42 52 30V18L32 10Z'
                    fill='#5aa88a'
                />
                <path
                    d='M28 32L32 36L40 26'
                    stroke='white'
                    strokeWidth='4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <circle
                    cx='32'
                    cy='32'
                    r='12'
                    stroke='#dbeee4'
                    strokeWidth='2'
                    fill='none'
                />
            </svg>
        ),
    },
    {
        label: 'Detailing',
        icon: () => (
            <svg
                viewBox='0 0 64 64'
                fill='none'
                className='w-10 h-10 md:w-12 md:h-12'
            >
                <ellipse cx='32' cy='40' rx='20' ry='8' fill='#dbeee4' />
                <path
                    d='M16 24C16 24 20 16 32 16C44 16 48 24 48 24V36C48 36 44 44 32 44C20 44 16 36 16 36V24Z'
                    fill='#3d8d6f'
                />
                <ellipse cx='32' cy='24' rx='16' ry='8' fill='#5aa88a' />
                <path
                    d='M24 22C24 22 26 20 32 20C38 20 40 22 40 22'
                    stroke='#dbeee4'
                    strokeWidth='2'
                    strokeLinecap='round'
                />
                <path d='M8 20L14 24L12 32L6 28L8 20Z' fill='#5aa88a' />
                <circle cx='10' cy='24' r='2' fill='#3d8d6f' />
                <path
                    d='M52 18C54 16 58 16 58 20C58 24 54 26 54 26'
                    stroke='#5aa88a'
                    strokeWidth='2'
                    strokeLinecap='round'
                />
                <path
                    d='M54 20C55 19 57 19 57 21C57 23 55 24 55 24'
                    stroke='#3d8d6f'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                />
                <ellipse
                    cx='32'
                    cy='32'
                    rx='8'
                    ry='4'
                    fill='#2d7159'
                    opacity='0.5'
                />
            </svg>
        ),
    },
];

const rotatingWords = [
    'maintenance',
    'buying',
    'selling',
    'parts',
    'insurance',
    'detailing',
];

const videos = [
    { src: '/car-force-product-lp/videos/Roadside_Assistance_Video_Generation.mp4' },
    { src: '/car-force-product-lp/videos/Mobile_Mechanic_Video_Generation.mp4' },
    { src: '/car-force-product-lp/videos/Car_Deal_Video_Generation.mp4' },
];

// Avatar images for trust indicators
const avatarImages = [
    '/car-force-product-lp/avatars/avatar-1.jpg',
    '/car-force-product-lp/avatars/avatar-2.jpg',
    '/car-force-product-lp/avatars/avatar-3.jpg',
    '/car-force-product-lp/avatars/avatar-4.jpg',
];

export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const wordInterval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2000);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(wordInterval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleVideoEnded = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    };

    return (
        <section className='relative min-h-screen bg-white overflow-hidden pt-20'>
            {/* Background decoration */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {/* Subtle gradient background */}
                <div className='absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-forest-100/50 via-forest-50/30 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4' />
                <div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-forest-100/40 via-forest-50/20 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4' />

                {/* Decorative elements */}
                <div className='absolute top-1/4 right-[15%] w-64 h-64 border border-forest-200/30 rounded-full' />
                <div className='absolute bottom-1/3 left-[10%] w-40 h-40 border border-forest-200/20 rounded-full' />

                {/* Grid pattern */}
                <div
                    className='absolute inset-0 opacity-[0.02]'
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d8d6f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Navigation */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
                        : 'bg-transparent'
                }`}
            >
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-20'>
                        {/* Logo */}
                        <div className='flex items-center gap-2'>
                            <div className='w-10 h-10 bg-forest-500 rounded-xl flex items-center justify-center shadow-lg shadow-forest-500/25'>
                                <Car className='w-6 h-6 text-white' />
                            </div>
                            <span className='font-display font-bold text-2xl text-slate-900'>
                                Car
                                <span className='text-forest-500'>Force</span>
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className='hidden md:flex items-center gap-8'>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className='nav-link text-slate-600 hover:text-slate-900 font-medium transition-colors'
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className='hidden md:flex items-center'>
                            <a
                                href='#download'
                                className='group flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-forest-500/25 hover:-translate-y-0.5 border-2 border-forest-400'
                            >
                                <svg
                                    viewBox='0 0 24 24'
                                    className='w-5 h-5'
                                    fill='currentColor'
                                >
                                    <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
                                </svg>
                                Download App
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className='md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors'
                        >
                            {mobileMenuOpen ? (
                                <X className='w-6 h-6' />
                            ) : (
                                <Menu className='w-6 h-6' />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-lg transition-all duration-300 ${
                        mobileMenuOpen
                            ? 'opacity-100 visible'
                            : 'opacity-0 invisible'
                    }`}
                >
                    <div className='px-4 py-6 space-y-4'>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className='block text-slate-600 hover:text-forest-500 font-medium py-2 transition-colors'
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className='pt-4 border-t border-slate-200'>
                            <a
                                href='#download'
                                className='flex items-center justify-center gap-2 w-full bg-forest-500 hover:bg-forest-600 text-white px-6 py-3 rounded-full font-semibold transition-all'
                            >
                                <svg
                                    viewBox='0 0 24 24'
                                    className='w-5 h-5'
                                    fill='currentColor'
                                >
                                    <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
                                </svg>
                                Download App
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Content */}
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-14 lg:pt-20 pb-12'>
                <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
                    {/* Left Column - Text Content */}
                    <div
                        className={`space-y-8 transition-all duration-1000 ${
                            isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                        }`}
                    >
                        {/* Badge */}
                        <div className='inline-flex items-center gap-2 bg-forest-50 border border-forest-200 text-forest-700 px-4 py-2 rounded-full text-sm font-medium'>
                            <Sparkles className='w-4 h-4' />
                            <span>Simplifying car ownership in the USA</span>
                        </div>

                        {/* Headline */}
                        <h1 className='font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight'>
                            The all-in-one app for car{' '}
                            <span className='relative inline-block'>
                                <span className='gradient-text'>
                                    {rotatingWords[currentWordIndex]}
                                </span>
                                <svg
                                    className='absolute -bottom-2 left-0 w-full'
                                    viewBox='0 0 200 12'
                                    fill='none'
                                >
                                    <path
                                        d='M2 8.5C50 2 150 2 198 8.5'
                                        stroke='#3d8d6f'
                                        strokeWidth='3'
                                        strokeLinecap='round'
                                        className='opacity-30'
                                    />
                                </svg>
                            </span>
                        </h1>

                        {/* Description */}
                        <p className='text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed'>
                            From maintenance to marketplace, CarForce connects
                            you with trusted mechanics, quality parts, and
                            verified buyers — all in one seamless platform.
                        </p>

                        {/* CTA Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <button className='group flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-forest-500/25 hover:-translate-y-1'>
                                Start Free Trial
                                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                            </button>
                            <button className='flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg border-2 border-slate-200 hover:border-forest-300 transition-all duration-300'>
                                Watch Demo
                                <ChevronRight className='w-5 h-5' />
                            </button>
                        </div>

                        {/* Trust indicators */}
                        <div className='flex flex-wrap items-center gap-6 pt-4'>
                            <div className='flex items-center gap-2'>
                                <div className='flex -space-x-2'>
                                    {avatarImages.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt={`User ${i + 1}`}
                                            className='w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm'
                                        />
                                    ))}
                                </div>
                                <span className='text-sm text-slate-600'>
                                    <span className='font-semibold text-slate-900'>
                                        10k+
                                    </span>{' '}
                                    users
                                </span>
                            </div>
                            <div className='flex items-center gap-1'>
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className='w-5 h-5 text-amber-400 fill-current'
                                        viewBox='0 0 20 20'
                                    >
                                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                    </svg>
                                ))}
                                <span className='text-sm text-slate-600 ml-1'>
                                    <span className='font-semibold text-slate-900'>
                                        4.9
                                    </span>{' '}
                                    rating
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Video Carousel */}
                    <div
                        className={`relative transition-all duration-1000 delay-300 ${
                            isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                        }`}
                    >
                        {/* Decorative elements behind video */}
                        <div className='absolute -top-4 -right-4 w-24 h-24 border-2 border-forest-200 rounded-full opacity-60' />
                        <div className='absolute -bottom-6 -left-6 w-32 h-32 border border-forest-300/40 rounded-full' />
                        <div className='absolute top-1/2 -right-8 w-16 h-16 bg-forest-100/50 rounded-full blur-sm' />
                        <div className='absolute -bottom-3 right-12 w-20 h-20 border border-dashed border-forest-300/30 rounded-full' />
                        
                        {/* Video container with hover effects */}
                        <div className='group relative rounded-3xl overflow-hidden shadow-2xl shadow-forest-500/20 transition-all duration-500 hover:shadow-3xl hover:shadow-forest-500/30 hover:-translate-y-1 cursor-pointer'>
                            {/* Subtle border glow on hover */}
                            <div className='absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-forest-400/30 transition-all duration-500 z-10 pointer-events-none' />
                            
                            {/* Corner accents */}
                            <div className='absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-white/40 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none' />
                            <div className='absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-white/40 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none' />
                            
                            <video
                                key={currentVideoIndex}
                                className='w-full h-auto rounded-3xl transition-transform duration-500 group-hover:scale-[1.02]'
                                autoPlay
                                muted
                                playsInline
                                onEnded={handleVideoEnded}
                            >
                                <source src={videos[currentVideoIndex].src} type='video/mp4' />
                            </video>
                        </div>
                        
                        {/* Small decorative dot */}
                        <div className='absolute -top-2 left-8 w-3 h-3 bg-forest-400 rounded-full animate-pulse' />
                    </div>
                </div>

                {/* Services strip */}
                <div
                    className={`mt-14 lg:mt-20 transition-all duration-1000 delay-500 ${
                        isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                    }`}
                >
                    <div className='text-center mb-8'>
                        <p className='text-slate-500 font-medium'>
                            Everything you need for your car
                        </p>
                    </div>
                    <div className='flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8'>
                        {services.map((service, index) => (
                            <div
                                key={service.label}
                                className='group flex flex-col items-center gap-3 p-4 md:p-6 rounded-2xl bg-white border border-slate-200 hover:border-forest-300 hover:shadow-lg hover:shadow-forest-500/10 transition-all duration-300 cursor-pointer hover:-translate-y-1'
                            >
                                <div className='w-16 h-16 md:w-20 md:h-20 bg-forest-50 group-hover:bg-forest-100 rounded-xl flex items-center justify-center transition-colors'>
                                    <service.icon />
                                </div>
                                <span className='text-slate-700 font-medium text-sm md:text-base'>
                                    {service.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
