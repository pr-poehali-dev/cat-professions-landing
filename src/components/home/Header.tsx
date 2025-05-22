import { useState, useEffect } from "react";

/**
 * Компонент хедера с навигацией по секциям сайта
 */
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Функция для плавного скролла к секции
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212] shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Логотип */}
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold font-montserrat text-white">
            КотоПрофи<span className="text-[#D35536]">.</span>
          </h1>
        </div>

        {/* Навигация для десктопа */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-white hover:text-[#D35536] transition-colors text-sm"
          >
            Главная
          </button>
          <button
            onClick={() => scrollToSection("why-cats")}
            className="text-white hover:text-[#D35536] transition-colors text-sm"
          >
            Преимущества
          </button>
          <button
            onClick={() => scrollToSection("cat-terms")}
            className="text-white hover:text-[#D35536] transition-colors text-sm"
          >
            Котонимы
          </button>
          <button
            onClick={() => scrollToSection("podcasts")}
            className="text-white hover:text-[#D35536] transition-colors text-sm"
          >
            Подкасты
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-white hover:text-[#D35536] transition-colors text-sm"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("hire")}
            className="text-white hover:text-[#D35536] transition-colors text-sm"
          >
            Нанять кота
          </button>
        </nav>

        {/* Мобильная навигация */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-full right-0 left-0 mt-0 bg-[#1A1A1A] shadow-lg overflow-hidden z-50 border-t border-gray-700">
              <div className="py-2">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-800 transition-colors"
                >
                  Главная
                </button>
                <button
                  onClick={() => scrollToSection("why-cats")}
                  className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-800 transition-colors"
                >
                  Преимущества
                </button>
                <button
                  onClick={() => scrollToSection("cat-terms")}
                  className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-800 transition-colors"
                >
                  Котонимы
                </button>
                <button
                  onClick={() => scrollToSection("podcasts")}
                  className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-800 transition-colors"
                >
                  Подкасты
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-800 transition-colors"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("hire")}
                  className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-800 transition-colors"
                >
                  Нанять кота
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
