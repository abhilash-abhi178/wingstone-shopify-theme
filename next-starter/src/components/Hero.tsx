import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-display leading-none text-white"
        >
          WINGSTONE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-lg text-gray-200"
        >
          Future streetwear — limited drops, made with intent.
        </motion.p>

        <div className="mt-8 space-x-4">
          <a href="#" className="inline-block bg-white text-black px-6 py-3 font-semibold">Shop Drop</a>
          <a href="#" className="inline-block border border-white text-white px-6 py-3">Explore</a>
        </div>
      </div>

      <div className="absolute inset-0 opacity-40 hero-noise pointer-events-none" />
    </section>
  )
}
