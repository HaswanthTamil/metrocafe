"use client";

import Link from "next/link";
import { ReactNode } from "react";

// Using a custom social icon placeholder for demonstration
const SocialIcon = ({ children }: { children: ReactNode }) => (
  <a
    href="#"
    className="text-stone-400 hover:text-amber-500 transition-colors duration-200 p-2 border border-stone-700 hover:border-amber-500 rounded-full"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    // Applied dark background for a strong conclusion
    <footer className="bg-stone-900 text-stone-50 border-t border-stone-800">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        {/* Main Footer Grid: Brand | Contact | Subscribe */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
          {/* Column 1: Brand & Social (Spans 1 column on MD+) */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <div className="text-3xl font-extrabold tracking-wider text-amber-500">
                Brew Lounge
              </div>
            </Link>
            <div className="text-base text-stone-400 mt-2">
              Where Coffee Meets Comfort
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-6">
              <SocialIcon>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.5 18H2v-11h5.5c3 0 4.5 1.5 4.5 4.5s-1.5 4.5-4.5 4.5zM2 9v2h5.5c1.5 0 2.5-.5 2.5-2.5S8.9 6 7.5 6H2zM15 12.5c0 3-1.5 4.5-4.5 4.5h-2.5v-2h2.5c1 0 1.5-.5 1.5-1.5S13 11 12 11H9.5V9h2.5c1 0 1.5-.5 1.5-1.5S13 6 12 6H9.5V4h2.5c3 0 4.5 1.5 4.5 4.5S15 12.5 15 12.5zM17.5 18H15v-11h2.5c3 0 4.5 1.5 4.5 4.5s-1.5 4.5-4.5 4.5zM15 9v2h2.5c1.5 0 2.5-.5 2.5-2.5S18.9 6 17.5 6H15z" />
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14H10v-5.5h1.5V16zm0-7.5H10V8h1.5v.5zM15 16h-1.5v-2.5h-1v2.5H11v-5h1v4.5h1v-4.5h1.5v5z" />
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm-1.5 15.5h-2V10h2v7.5zM9.5 8h-2V6h2v2zM17 17.5h-2v-5.5h-1v5.5h-2V10h5v7.5z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Column 2: Quick Links (New Column) */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-bold mb-4 text-stone-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a
                  href="#menu"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (Spans 1 column on MD+) */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-bold mb-4 text-stone-200">
              Get In Touch
            </h4>
            <div className="space-y-2 text-stone-400">
              <p>123 Brew Street, Coffee City, CO 80000</p>
              <p>
                <a
                  href="tel:5551234567"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@brewlounge.com"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  hello@brewlounge.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Subscription Form (Spans 1 column on MD+) */}
          <div className="md:col-span-1 footer-subscribe">
            <h4 className="text-xl font-bold mb-4 text-stone-200">
              Stay Updated
            </h4>
            <p className="text-stone-400 mb-4">
              Get news, deals, and event info directly in your inbox.
            </p>
            <form
              className="subscribe-form flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email-footer" className="sr-only">
                Email
              </label>
              <input
                id="email-footer"
                name="email"
                type="email"
                placeholder="Enter your email address"
                // Styled input for dark mode
                className="w-full px-4 py-3 bg-stone-800 border border-stone-700 text-stone-50 rounded-lg focus:ring-amber-500 focus:border-amber-500"
              />
              <button className="w-full px-4 py-3 text-base font-semibold bg-amber-500 text-stone-900 hover:bg-amber-400 transition-all duration-300 rounded-lg shadow-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-800 text-center">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Brew Lounge. All rights reserved. |
            Crafted with Coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}
