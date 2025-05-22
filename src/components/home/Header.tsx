
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

/**
 * Компонент хедера с навигацией по секциям сайта
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Обработка скролла для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Функция для плавного скролла к секции
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#1A1A1A] shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Логотип */}
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold font-montserrat text-white">
            КотоПрофи<span className="text-[#D35536]">.</span>
          </h1>
        </div>

        {/* Навигация для десктопа */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-[#D35536] transition-colors text-sm"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Мобильная навигация */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

/**
 * Компонент мобильного меню
 */
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Функция для плавного скролла к секции
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white"
      >
        <Icon name={isOpen ? "X" : "Menu"} size={24} />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-[#1A1A1A] rounded-md shadow-lg overflow-hidden z-50 border border-gray-700">
          <div className="py-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#333333] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Пункты меню для навигации
 */
const menuItems = [
  { id: "hero", label: "Главная" },
  { id: "professions", label: "Профессионалы" },
  { id: "why-cats", label: "Преимущества" },
  { id: "cat-terms", label: "Котонимы" },
  { id: "podcasts", label: "Подкасты" },
  { id: "faq", label: "FAQ" },
  { id: "hire", label: "Нанять кота" },
];

export default Header;
