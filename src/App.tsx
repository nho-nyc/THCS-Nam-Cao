/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { NewsSection } from './components/NewsSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { AchievementsSection } from './components/AchievementsSection';
import { TeachersSection } from './components/TeachersSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection, Footer } from './components/ContactFooterSection';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFBFD] text-[#152238]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#0F2744] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Chuyển tới nội dung chính
      </a>

      <Header />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <NewsSection />
        <ActivitiesSection />
        <AchievementsSection />
        <TeachersSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}
