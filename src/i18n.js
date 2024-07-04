import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      title: "Global expertise, local outcomes",
      email: "Email",
      emailPlaceholder: "email@address.com",
      invalidEmail: "Please enter a valid corporate email.",
      password: "Password",
      requiredPassword: "Password is required.",
      language: "Language",
      english: "English",
      hindi: "Hindi",
      bengali: "Bengali",
      rememberMe: "Remember me",
      login: "Log in"
    }
  },
  hi: {
    translation: {
      title: "वैश्विक विशेषज्ञता, स्थानीय परिणाम",
      email: "ईमेल",
      emailPlaceholder: "email@address.com",
      invalidEmail: "कृपया एक मान्य कॉर्पोरेट ईमेल दर्ज करें।",
      password: "पासवर्ड",
      requiredPassword: "पासवर्ड आवश्यक है।",
      language: "भाषा",
      english: "अंग्रेज़ी",
      hindi: "हिन्दी",
      bengali: "बंगाली",
      rememberMe: "मुझे याद रखें",
      login: "लॉगिन"
    }
  },
  bn: {
    translation: {
      title: "গ্লোবাল বিশেষজ্ঞতা, স্থানীয় ফলাফল",
      email: "ইমেইল",
      emailPlaceholder: "email@address.com",
      invalidEmail: "দয়া করে একটি বৈধ কর্পোরেট ইমেল প্রবেশ করুন।",
      password: "পাসওয়ার্ড",
      requiredPassword: "পাসওয়ার্ড প্রয়োজন।",
      language: "ভাষা",
      english: "ইংরেজি",
      hindi: "হিন্দি",
      bengali: "বাংলা",
      rememberMe: "আমাকে মনে রাখুন",
      login: "প্রবেশ করুন"
    }
  }
  // Add more languages here
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
