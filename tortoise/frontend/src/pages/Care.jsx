import React from 'react';
import desert from '../assets/desert.jpg';


const careData = [
  {
    title: 'Habitat Setup',
    text: 'Ensure your tortoise has plenty of space, substrate, and hiding spots.',
    image: desert,
  },
  {
    title: 'Temperature & Lighting',
    text: 'UVB lighting and heat lamps are crucial for their health and shell growth.',
    image: desert,
  },
  {
    title: 'Hydration',
    text: 'Provide fresh water daily and occasional soaking.',
    image: desert,
  },
  {
    title: 'Balanced Diet',
    text: 'Feed them leafy greens, vegetables, and limit fruits.',
    image: desert,
  },
  {
    title: 'Regular Checkups',
    text: 'Visit an exotic vet yearly to ensure everything is fine.',
    image: desert,
  },
  {
    title: 'Enrichment',
    text: 'Add logs, tunnels, and varying textures to their space.',
    image: desert,
  },
];

const Care = () => {
  return (
    <div className="relative py-20 px-4 md:px-20">
      <h1 className="text-4xl text-primary font-courgette text-center mb-6">CARE</h1>
      <p className="text-center max-w-3xl mx-auto text-lg text-gray-700 mb-20">
        Discover everything you need to know to properly care for your tortoise. From habitat and food to enrichment and health.
      </p>

      


      <div className="space-y-24 relative z-10">
        {careData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <img src={item.image} alt={item.title} className="w-full md:w-1/3 rounded-xl shadow-lg" />
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-bold text-primary mb-3">{item.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Care;