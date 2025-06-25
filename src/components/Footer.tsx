
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/c1722a12-adf6-4917-b555-5bb7eb9d8656.png" 
                alt="SIAM HEALTHY" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold">SIAM HEALTHY</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t('footer.brand_description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">{t('footer.all_products')}</Link></li>
              <li><Link to="/categories" className="text-gray-300 hover:text-white transition-colors">{t('footer.categories')}</Link></li>
              <li><Link to="/affiliate" className="text-gray-300 hover:text-white transition-colors">{t('footer.affiliate_program')}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{t('footer.about_us')}</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.customer_service')}</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.faq')}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.return_policy')}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.shipping')}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.contact_us')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
