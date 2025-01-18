import React from "react";
import { motion } from "framer-motion";

const stats = [
  { title: "Crop Yield Increase", value: "30%", description: "Average increase in crop yield using our methods" },
  { title: "Chemical Usage Reduction", value: "40%", description: "Reduction in chemical usage through optimized spraying" },
  { title: "Water Conservation", value: "25%", description: "Water saved compared to traditional farming methods" },
  { title: "Farmer Satisfaction", value: "95%", description: "Of farmers reported improved results with our system" },
];

const AgricultureStats: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-800 dark:to-indigo-800 rounded-lg shadow-lg">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-blue-200">Our Impact on Agriculture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</h3>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{stat.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgricultureStats;

