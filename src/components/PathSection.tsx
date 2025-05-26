import { motion } from 'framer-motion';
import Image from 'next/image';

const paths = [
  {
    title: 'Web Dev',
    icon: '🌐',
    color: 'bg-blue-100',
    textColor: 'text-blue-800',
  },
  {
    title: 'Design',
    icon: '🎨',
    color: 'bg-purple-100',
    textColor: 'text-purple-800',
  },
  {
    title: 'Video Editing',
    icon: '🎥',
    color: 'bg-red-100',
    textColor: 'text-red-800',
  },
  {
    title: 'Digital Media',
    icon: '📱',
    color: 'bg-green-100',
    textColor: 'text-green-800',
  },
  {
    title: 'Scratch coding',
    icon: '🐱',
    color: 'bg-yellow-100',
    textColor: 'text-yellow-800',
  },
  {
    title: 'Maths',
    icon: '🔢',
    color: 'bg-pink-100',
    textColor: 'text-pink-800',
  },
  {
    title: 'Word/Excel',
    icon: '📊',
    color: 'bg-indigo-100',
    textColor: 'text-indigo-800',
  },
  {
    title: 'Music',
    icon: '🎵',
    color: 'bg-orange-100',
    textColor: 'text-orange-800',
  },
];

export default function PathSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Here kids <span className="text-blue-500">choose</span> their own path
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {paths.map((path, index) => (
          <motion.div
            key={path.title}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${path.color} rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition-shadow`}
          >
            <div className="text-4xl mb-3">{path.icon}</div>
            <h3 className={`font-semibold ${path.textColor}`}>{path.title}</h3>
            <button className="mt-4 bg-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">
              Play Now
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16"
      >
        <h3 className="text-2xl font-bold mb-4">Let's find a path</h3>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors">
          Talk to us today
        </button>
      </motion.div>
    </section>
  );
} 