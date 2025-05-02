
import React from 'react';
import Hero from '@/components/Home/Hero';
import AboutMeSection from '@/components/Home/AboutMeSection';
import FeaturedProjects from '@/components/Home/FeaturedProjects';
import CertificateShowcase from '@/components/Home/CertificateShowcase';
import GalleryPreview from '@/components/Home/GalleryPreview';
import ContactSection from '@/components/Home/ContactSection';
import MainLayout from '@/components/Layout/MainLayout';
import RatingWidget from '@/components/Rating/RatingWidget';
import ResumeDownload from '@/components/Home/ResumeDownload';
import { useProjects, useCertificates, useGallery } from '@/hooks/usePortfolio';
import storageService from '@/services/storageService';
import ParallaxSection from '@/components/Animations/ParallaxSection';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  const { projects, loading: projectsLoading } = useProjects();
  const { certificates, loading: certificatesLoading } = useCertificates();
  const { galleryItems, loading: galleryLoading } = useGallery();
  const aboutMe = storageService.getAboutMe();

  return (
    <MainLayout>
      <Hero />
      
      <ParallaxSection offset={30}>
        <AboutMeSection aboutMe={aboutMe} />
      </ParallaxSection>
      
      <div className="container mx-auto px-6 text-center py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ResumeDownload resumeFile={aboutMe?.resumeFile} />
        </motion.div>
      </div>
      
      <ParallaxSection offset={20}>
        {!projectsLoading && <FeaturedProjects projects={projects} />}
      </ParallaxSection>
      
      <ParallaxSection offset={25}>
        {!certificatesLoading && <CertificateShowcase certificates={certificates} />}
      </ParallaxSection>
      
      <ParallaxSection offset={30}>
        {!galleryLoading && <GalleryPreview galleryItems={galleryItems} />}
      </ParallaxSection>
      
      <div className="container mx-auto px-6 py-8 mt-10">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <RatingWidget />
          </motion.div>
        </div>
      </div>
      
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
