"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const FloatingContact = () => {
  const [shouldLoadChatbot, setShouldLoadChatbot] = useState(false);

  useEffect(() => {
    // Only load chatbot after client-side mount and not on error pages
    setShouldLoadChatbot(!window.location.href.startsWith('chrome-error://'));
  }, []);

  return (
    <>
      {shouldLoadChatbot && (
        <Script
          id="navy-chatbot-widget"
          src="https://pry47hwc5svvkmrztgvf4v3a.agents.do-ai.run/static/chatbot/widget.js"
          strategy="afterInteractive"
          onError={(e) => {
            console.warn('Chatbot script failed to load:', e);
          }}
          data-agent-id="6a242620-38dd-11f1-b074-4e013e2ddde4"
          data-chatbot-id="-WQgmB4qvJo6rrv0xDr5kKoLFkcZWZ-e"
          data-name="Navy"
          data-primary-color="#1974d2"
          data-secondary-color="#ff8f00"
          data-button-background-color="#1974d2"
          data-starting-message="Hello my name is Navy! How can I help you today?"
          data-logo="https://api.iconify.design/lucide/message-circle-more.svg?color=white&width=24&height=24"
        />
      )}

      <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end overflow-hidden rounded-l-xl bg-white shadow-xl">
        <div className="group relative flex items-center justify-end">
          <div className="absolute right-12 top-0 bottom-0 z-10 flex w-0 items-center overflow-hidden bg-gray-800 transition-all duration-300 ease-out group-hover:w-auto">
            <span className="whitespace-nowrap px-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 delay-75 group-hover:opacity-100">
              Chat with us
            </span>
          </div>
          <a
            href="https://wa.me/6281370000299?text=Hi%2C%20I%20want%20to%20ask%20about%20zerOne.id%20service"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="relative z-20 flex h-12 w-12 items-center justify-center border-b border-gray-100 bg-white transition-colors duration-300 group-hover:bg-[#25D366]"
          >
            <svg
              className="h-6 w-6 text-[#25D366] transition-colors duration-300 group-hover:text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>

        <div className="group relative flex items-center justify-end">
          <div className="absolute right-12 top-0 bottom-0 z-10 flex w-0 items-center overflow-hidden bg-gray-800 transition-all duration-300 ease-out group-hover:w-auto">
            <span className="whitespace-nowrap px-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 delay-75 group-hover:opacity-100">
              Follow our journey
            </span>
          </div>
          <a
            href="https://www.instagram.com/zerone.global"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Zerone on Instagram"
            className="relative z-20 flex h-12 w-12 items-center justify-center border-b border-gray-100 bg-white transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:via-pink-500 group-hover:to-orange-400"
          >
            <svg
              className="h-6 w-6 text-[#E1306C] transition-colors duration-300 group-hover:text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        <div className="group relative flex items-center justify-end">
          <div className="absolute right-12 top-0 bottom-0 z-10 flex w-0 items-center overflow-hidden bg-gray-800 transition-all duration-300 ease-out group-hover:w-auto">
            <span className="whitespace-nowrap px-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 delay-75 group-hover:opacity-100">
              Send us an email
            </span>
          </div>
          <a
            href="mailto:info@zerone.id"
            aria-label="Send us an email"
            className="relative z-20 flex h-12 w-12 items-center justify-center bg-white transition-colors duration-300 group-hover:bg-blue-500"
          >
            <svg
              className="h-6 w-6 text-blue-500 transition-colors duration-300 group-hover:text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingContact;
