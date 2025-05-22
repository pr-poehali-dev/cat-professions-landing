
import React from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * Компонент для отображения карточки с профессией кота
 */
interface CatProfessionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl: string;
}

const CatProfession: React.FC<CatProfessionProps> = ({
  icon: Icon,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:scale-105 duration-300">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="bg-[#8B7E66] text-white p-4 relative">
        <div className="absolute -top-10 left-4 bg-[#D35536] w-12 h-12 rounded-full flex items-center justify-center">
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
        <p className="text-gray-100 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CatProfession;
