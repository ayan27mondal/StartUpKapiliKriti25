import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sprout, Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const user = null; // Replace with actual auth state

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    navigate('/');
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang); // ✅ Store selection
    window.location.reload(); // ✅ Reload to apply changes
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-emerald-900">TerraPure</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* ✅ Language Selector */}
            <select
              className="p-2 border rounded bg-gray-200"
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="bn">বাংলা</option>
              <option value="as">অসমীয়া</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
            </select>

            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-emerald-600">
                  {t('dashboard')}
                </Link>
                <Link to="/marketplace" className="text-gray-700 hover:text-emerald-600">
                  {t('marketplace')}
                </Link>
                <Button variant="ghost" onClick={handleLogout}>
                  <LogOut className="h-5 w-5 mr-2" />
                  {t('logout')}
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-emerald-600">
                  {t('login')}
                </Link>
                <Link to="/register">
                  <Button>{t('get_started')}</Button>
                </Link>
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-emerald-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-3 space-y-2">
            {/* ✅ Language Selector for Mobile */}
            <select
              className="w-full p-2 border rounded bg-gray-200"
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="bn">বাংলা</option>
              <option value="as">অসমীয়া</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
            </select>

            {user ? (
              <>
                <Link to="/dashboard" className="block text-gray-700 hover:text-emerald-600">
                  {t('dashboard')}
                </Link>
                <Link to="/marketplace" className="block text-gray-700 hover:text-emerald-600">
                  {t('marketplace')}
                </Link>
                <button onClick={handleLogout} className="block text-gray-700 hover:text-emerald-600">
                  {t('logout')}
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block text-gray-700 hover:text-emerald-600">
                  {t('login')}
                </Link>
                <Link to="/register" className="block text-gray-700 hover:text-emerald-600">
                  {t('get_started')}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
