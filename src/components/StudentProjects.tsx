import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    image: '/student-1.jpg',
    name: 'Sarah K.',
    age: 12,
  },
  {
    id: 2,
    image: '/student-2.jpg',
    name: 'Michael R.',
    age: 10,
  },
  {
    id: 3,
    image: '/student-3.jpg',
    name: 'Emma L.',
    age: 11,
  },
  {
    id: 4,
    image: '/student-4.jpg',
    name: 'David P.',
    age: 13,
  },
];

export default function StudentProjects() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Real projects by our <span className="text-blue-500">students</span>
          <br />
          in their own words
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square rounded-xl overflow-hidden group"
          >
            <Image
              src={project.image}
              alt={`Project by ${project.name}`}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div className="text-white">
                <p className="font-semibold">{project.name}</p>
                <p className="text-sm">Age {project.age}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors">
          View More Projects
        </button>
      </motion.div>
    </section>
  );
} 