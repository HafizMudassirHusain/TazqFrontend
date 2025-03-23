import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Developed a scalable e-commerce website with secure payment integration.",
      industry: "Retail",
      image: "https://img.freepik.com/free-vector/flat-sale-landing-page-template-with-photo_23-2149028522.jpg",
    },
    {
      title: "Mobile Banking App",
      description: "Built a user-friendly mobile app for seamless banking transactions.",
      industry: "Finance",
      image: "https://yi-files.yellowimages.com/products/1189000/1189396/1982618-full.jpg",
    },
    {
      title: "Healthcare Management System",
      description: "Implemented a cloud-based solution for patient record management.",
      industry: "Healthcare",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQFHJozqdzlpbw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1701187200337?e=2147483647&v=beta&t=aan6rc6yv3GCje85Lc9qGs1vfVLxtSSMqxbL4vCAh-g",
    },
  ];

  return (
    <section className="py-20 bg-[#121212] mt-20 text-white text-center">
      <h2 className="text-4xl font-bold mb-6 text-[#8CA419]">Our Portfolio</h2>
      <p className="text-lg mb-12">Explore our successful projects across various industries.</p>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} className="rounded-md mb-4 w-full h-48 object-cover" />
            <h3 className="text-2xl font-semibold text-[#C0C0C0]">{project.title}</h3>
            <p className="text-sm mt-2 text-[#C0C0C0]">{project.industry}</p>
            <p className="text-lg mt-3">{project.description}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Client Testimonials */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-[#8CA419]">Client Testimonials</h3>
        <p className="text-lg mt-4 mb-10">What our clients say about our work</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <p className="italic">"The TazQ Solution team delivered an outstanding product that transformed our business!"</p>
            <p className="mt-2 font-semibold text-[#8CA419]">- Sarah, CEO of FinTech Corp</p>
          </motion.div>
          <motion.div 
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <p className="italic">"Reliable, professional, and innovative! Highly recommended for IT services."</p>
            <p className="mt-2 font-semibold text-[#8CA419]">- Mark, Founder of HealthTech Solutions</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
