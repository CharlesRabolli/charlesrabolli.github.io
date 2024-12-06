import { motion } from 'framer-motion';

export const ParallaxCards = () => {
  const cards = [
    {
      title: "Cardiac Medicine",
      description: "Advancing our understanding of heart disease through molecular research.",
      imageSrc: "/images/cardiac-research.jpg"
    },
    {
      title: "Medical Devices",
      description: "Engineering innovative diagnostic and therapeutic solutions.",
      imageSrc: "/images/medical-devices.jpg"
    },
    {
      title: "RNA Biology",
      description: "Investigating RNA modifications in cardiovascular disease.",
      imageSrc: "/images/rna-biology.jpg"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative group h-full"
        >
          <div className="relative overflow-hidden rounded-xl h-full">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/80 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm opacity-90">{card.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};