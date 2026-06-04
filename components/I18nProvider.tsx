"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Detect language from localStorage or default to 'id'
    const savedLang = localStorage.getItem("i18nextLng") || "id";
    if (i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return <>{children}</>;
}
