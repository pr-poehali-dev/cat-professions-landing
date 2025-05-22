import { LucideIcon } from "lucide-react";

interface CatProfessionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl: string;
}

const CatProfession = ({
  icon: Icon,
  title,
  description,
  imageUrl,
}: CatProfessionProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      <div className="h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="p-2 bg-[#D35536] rounded-full mr-3">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default CatProfession;
