
/**
 * Футер сайта
 */
const Footer = () => {
  return (
    <footer className="bg-[#F5F0E1] py-6 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600">
          © 2025 КотоПрофи · Все права защищены · Оплата только кошачьим
          кормом
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-600 hover:text-[#D35536]">
            Политика конфиденциальности
          </a>
          <span className="text-gray-600">·</span>
          <a href="#" className="text-gray-600 hover:text-[#D35536]">
            Условия использования
          </a>
          <span className="text-gray-600">·</span>
          <a href="#" className="text-gray-600 hover:text-[#D35536]">
            Контакты
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
