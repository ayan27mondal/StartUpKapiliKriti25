import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Leaf, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

export function HomePage() {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad" 
            alt={t('organic_farm')} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {t('hero_title')}
              <br />
              <span className="text-emerald-400">{t('hero_subtitle')}</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
              {t('hero_description')}
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/register?role=farmer">
                <Button size="lg" className="flex items-center gap-2">
                  {t('start_selling')}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button size="lg" variant="secondary" className="flex items-center gap-2">
                  {t('browse_products')}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Bhomora ?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('features_subtitle')}
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                {t('feature_1_title')}
              </h3>
              <p className="mt-2 text-base text-gray-500">
                {t('feature_1_description')}
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white mx-auto">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                {t('feature_2_title')}
              </h3>
              <p className="mt-2 text-base text-gray-500">
                {t('feature_2_description')}
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white mx-auto">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                {t('feature_3_title')}
              </h3>
              <p className="mt-2 text-base text-gray-500">
                {t('feature_3_description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {t('cta_title')}
            </h2>
            <p className="mt-4 text-xl text-emerald-100">
              {t('cta_description')}
            </p>
            <div className="mt-8">
              <Link to="/register">
                <Button size="lg" variant="secondary">
                  {t('cta_button')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
