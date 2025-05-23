
import React from 'react';
import { useInView } from 'react-intersection-observer';

const ApproachSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="approach" className="py-16 md:py-24 bg-neogray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Training Approach</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="video-thumbnail w-full rounded-lg overflow-hidden shadow-lg">
              <img 
                src="../src/img/image2.svg" 
                alt="Woman applying undereye treatment" 
                className="w-full"
              />
              <div className="play-button">
                <svg 
                  width="72" 
                  height="72" 
                  viewBox="0 0 72 72" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-80"
                >
                  <circle cx="36" cy="36" r="36" fill="white" />
                  <path d="M48 36L30 46.3923V25.6077L48 36Z" fill="#7E69AB" />
                </svg>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700 text-lg">
                Our comprehensive training program combines theory and hands-on practice so you can master the technique and confidently offer this service to your clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
