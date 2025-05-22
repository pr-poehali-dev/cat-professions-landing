
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
  imageUrl 
}: CatProfessionProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-64 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground p-2 rounded-full">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default CatProfession;
