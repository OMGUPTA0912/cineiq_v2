'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Film, Sparkles, Users, Brain, TrendingUp, Zap } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Hybrid ML Engine',
    description: 'SVD + Neural CF + Content-Based + Sentiment Re-ranking',
    color: 'from-purple-500 to-pink-500',
    delay: 0.1
  },
  {
    icon: Sparkles,
    title: 'Semantic Vibe Search',
    description: 'Natural language queries with sentence-transformers',
    color: 'from-cyan-500 to-blue-500',
    delay: 0.2
  },
  {
    icon: Users,
    title: 'Watch Together',
    description: 'Real-time sync with WebSocket rooms & reactions',
    color: 'from-orange-500 to-red-500',
    delay: 0.3
  },
  {
    icon: Zap,
    title: 'Explainable AI',
    description: 'LIME + Groq LLM insights for every recommendation',
    color: 'from-green-500 to-emerald-500',
    delay: 0.4
  },
  {
    icon: TrendingUp,
    title: 'Taste Evolution',
    description: 'Radar charts & timeline of your cinematic journey',
    color: 'from-yellow-500 to-amber-500',
    delay: 0.5
  },
  {
    icon: Film,
    title: 'Visual Similarity',
    description: 'CLIP embeddings for poster-based discovery',
    color: 'from-indigo-500 to-violet-500',
    delay: 0.6
  }
]

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative bg-bg-base text-text-primary selection:bg-accent-primary/30">
      
      {/* Background Noise/Grain Effect */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <main className="relative z-10 flex flex-col md:flex-row min-h-screen">
        
        {/* Left Fixed Navigation Column */}
        <div className="w-full md:w-1/3 md:fixed md:h-screen p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border/50 bg-bg-base/80 backdrop-blur-sm">
          <div>
            <h2 className="text-xl font-bold tracking-widest text-text-muted mb-12">CINEIQ</h2>
            
            <nav className="flex flex-col gap-6">
              <button onClick={() => scrollToSection('about')} className="text-left group flex items-center gap-4">
                <span className="w-8 h-[1px] bg-text-muted group-hover:bg-accent-primary transition-colors duration-300" />
                <span className="text-sm font-semibold tracking-widest uppercase text-text-secondary group-hover:text-text-primary transition-colors duration-300">About</span>
              </button>
              <button onClick={() => scrollToSection('features')} className="text-left group flex items-center gap-4">
                <span className="w-8 h-[1px] bg-text-muted group-hover:bg-accent-primary transition-colors duration-300" />
                <span className="text-sm font-semibold tracking-widest uppercase text-text-secondary group-hover:text-text-primary transition-colors duration-300">Features</span>
              </button>
              <button onClick={() => scrollToSection('summary')} className="text-left group flex items-center gap-4">
                <span className="w-8 h-[1px] bg-text-muted group-hover:bg-accent-primary transition-colors duration-300" />
                <span className="text-sm font-semibold tracking-widest uppercase text-text-secondary group-hover:text-text-primary transition-colors duration-300">Summary</span>
              </button>
            </nav>
          </div>

          <div className="mt-12 md:mt-0 flex gap-4">
            <Link 
              href="/search"
              className="text-sm font-semibold tracking-widest uppercase text-accent-primary hover:text-accent-cyan transition-colors duration-300"
            >
              [ Explore ]
            </Link>
            <Link 
              href="/watch/global"
              className="text-sm font-semibold tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              [ Watch Party ]
            </Link>
          </div>
        </div>

        {/* Right Scrolling Content Column */}
        <div className="w-full md:w-2/3 md:ml-[33.333333%] p-8 md:p-16 lg:p-32 flex flex-col gap-32">
          
          {/* Hero Headline */}
          <section className="min-h-[70vh] flex flex-col justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-oswald text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] uppercase tracking-tighter text-text-primary mb-8"
            >
              Find Films<br/>
              <span className="text-text-muted">That Wreck</span><br/>
              You.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-text-secondary max-w-xl font-light leading-relaxed"
            >
              Next-gen movie discovery powered by semantic AI, collaborative filtering, and explainable insights.
            </motion.p>
          </section>

          {/* About Section */}
          <section id="about" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-sm font-semibold tracking-widest uppercase text-text-muted mb-8 border-b border-border/50 pb-4">01 / About</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <p className="text-lg text-text-secondary leading-relaxed">
                  CINEIQ is not just another movie database. It is a highly advanced recommendation engine that understands the nuanced <span className="text-text-primary font-medium">"vibe"</span> of what you want to watch. 
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  By leveraging state-of-the-art Natural Language Processing (NLP) and Vector Databases, we map the cinematic universe into mathematical space to find exact emotional matches for your mood.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Features Section */}
          <section id="features" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-sm font-semibold tracking-widest uppercase text-text-muted mb-8 border-b border-border/50 pb-4">02 / Features</h3>
              <div className="flex flex-col gap-12">
                {features.map((feature, idx) => (
                  <div key={idx} className="group border-l-2 border-border hover:border-accent-primary pl-8 transition-colors duration-300">
                    <h4 className="text-2xl font-oswald uppercase tracking-tight text-text-primary mb-2 group-hover:text-accent-primary transition-colors">{feature.title}</h4>
                    <p className="text-text-secondary text-lg leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Summary Section */}
          <section id="summary" className="scroll-mt-24 pb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-sm font-semibold tracking-widest uppercase text-text-muted mb-8 border-b border-border/50 pb-4">03 / Summary</h3>
              <div className="bg-bg-elevated/30 border border-border/50 p-8 md:p-12 rounded-2xl backdrop-blur-md">
                <h2 className="font-oswald text-4xl md:text-5xl uppercase tracking-tight mb-6">Ready to find your film?</h2>
                <p className="text-lg text-text-secondary mb-10 max-w-2xl leading-relaxed">
                  Stop scrolling endlessly through generic categories. Tell us exactly what you want to feel, and let our AI engine do the rest.
                </p>
                <Link 
                  href="/search"
                  className="inline-block px-10 py-5 bg-text-primary text-bg-base font-bold tracking-widest uppercase hover:bg-accent-primary hover:text-white transition-all duration-300"
                >
                  Start Exploring
                </Link>
              </div>
            </motion.div>
          </section>

        </div>
      </main>
    </div>
  )
}
