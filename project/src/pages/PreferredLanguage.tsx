import React from "react";
import { useTranslation } from "react-i18next";

export function PreferredLanguage({ onSelectLanguage }: { onSelectLanguage: (lang: string) => void }) {
  const { i18n } = useTranslation();

  const selectLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    onSelectLanguage(lang);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Select Your Language</h2>
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => selectLanguage("en")} className="p-2 bg-blue-500 text-white rounded">English</button>
          <button onClick={() => selectLanguage("hi")} className="p-2 bg-red-500 text-white rounded">हिन्दी</button>
          <button onClick={() => selectLanguage("bn")} className="p-2 bg-green-500 text-white rounded">বাংলা</button>
          <button onClick={() => selectLanguage("as")} className="p-2 bg-purple-500 text-white rounded">অসমীয়া</button>
          <button onClick={() => selectLanguage("ta")} className="p-2 bg-pink-500 text-white rounded">தமிழ்</button>
          <button onClick={() => selectLanguage("te")} className="p-2 bg-yellow-500 text-white rounded">తెలుగు</button>
        </div>
      </div>
    </div>
  );
}
