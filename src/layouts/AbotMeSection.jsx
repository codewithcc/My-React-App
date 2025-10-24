import { Link } from 'react-router-dom'

const AboutMeSection = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          A Little About Me
        </h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
          I'm a passionate software developer specializing in creating modern, 
          responsive web applications with React and Tailwind CSS. I love solving 
          complex problems and turning ideas into reality.
        </p>
        
        <Link
          to="/aboutme"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          Know More
        </Link>
        
      </div>
    </section>
  );
};

export default AboutMeSection;