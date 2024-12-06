import { motion } from 'framer-motion';

export const ResearchHighlight = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-medical-light via-background-light to-engineering-light p-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-medical-dark to-engineering-dark">
          Advancing Cardiac Research Through Technology
        </h3>
        <p className="text-gray-700 mb-6">
          My research combines cutting-edge molecular biology techniques with advanced computational methods to understand cardiac disease mechanisms. By leveraging AI and machine learning, we're developing innovative approaches to early disease detection and personalized treatment strategies.
        </p>
        <div className="flex gap-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 flex-1 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-primary-dark mb-2">14</div>
            <div className="text-sm text-gray-600">Publications</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 flex-1 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-primary-dark mb-2">6</div>
            <div className="text-sm text-gray-600">h-index</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 flex-1 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-primary-dark mb-2">300+</div>
            <div className="text-sm text-gray-600">Citations</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};