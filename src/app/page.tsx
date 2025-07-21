'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Filmstrip from '../components/Filmstrip';
//import Navbar from '../components/Navbar';

export default function Home() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });
  const [videoOverlay, setVideoOverlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const weddingDate = new Date('2025-09-20T14:30:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      

      {/* Envelope Animation */}
      <AnimatePresence>
        {showEnvelope && (
          <motion.div
            className="fixed inset-0 backdrop-blur-md bg-white/30 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEnvelope(false)}
          >
            <motion.div
              className="relative w-[300px] h-[200px] bg-[#f4f1e8] rounded-lg shadow-lg cursor-pointer"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-[#d4c5a9] rounded-t-lg origin-bottom"
                initial={{ rotateX: 0 }}
                animate={{ rotateX: -180 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <h2 className="text-3xl font-romana text-[#8b4513] mb-4">You're Invited!</h2>
                <p className="text-[#8b4513] font-romana">
                  Join us as we celebrate<br />
                  our special day filled with<br />
                  love, laughter, and forever memories.
                </p>
              </motion.div>
            </motion.div>
            <motion.p
              className="absolute bottom-10 text-white text-lg font-romana"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              Click anywhere to enter
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <AnimatePresence>
        {!showEnvelope && (
          <motion.nav
            className="navbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/faqs">FAQs</Link>
              <Link href="/rsvp">RSVP</Link>
              <Link href="/gallery">Gallery</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="h-[100vh] flex items-center relative px-4">
        {/* Background Image */}
        <div 
          className="hero-background absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('/LR-edited-size-optimized-2/POY07894.jpg')"
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Content Container */}
        <div className="relative z-10 w-full flex flex-col items-center md:items-middle lg:ml-16 max-w-4xl text-white text-center md:text-center">
          
          {/* Logo */}
          <motion.div 
            className="flex justify-center md:justify-start mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={!showEnvelope ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="logo-container">
              <Image
                src="/image-assets/wed_logo.png"
                alt="Wedding Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </motion.div>
          
          {/* Heading */}
          <motion.h1 
            className="text-6xl md:text-8xl mb-4 flex flex-col items-center md:items-middle"
            initial={{ opacity: 0, y: -20 }}
            animate={!showEnvelope ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <span className="names-text">MIK</span>
            <span className="and-text mr-0 md:mr-2 -mb-3">and</span>
            <span className="names-text mb-6">RADLY</span>
          </motion.h1>

          {/* Subheadings */}
          {/*
          <motion.h2 
            className="text-xl md:text-2xl font-romana mb-6 other-text"
            initial={{ opacity: 0, y: -20 }}
            animate={!showEnvelope ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
           ARE GETTING MARRIED!
          </motion.h2>
          */}
          <motion.h3 
            className="text-lg md:text-2xl font-romana -mb-1 leading-tight other-text"
            initial={{ opacity: 0, y: -20 }}
            animate={!showEnvelope ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            09.20.2025
          </motion.h3>
          <motion.h4 
            className="text-base md:text-lg font-romana mb-8 leading-tight other-text"
            initial={{ opacity: 0, y: -20 }}
            animate={!showEnvelope ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            L'AQUINUM GARDENS
          </motion.h4>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={!showEnvelope ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link 
              href="/rsvp"
              className="inline-block px-8 py-4 bg-[#faf4eb] text-black font-romana text-lg md:text-xl rounded-full hover:bg-white transition-colors"
            >
              RSVP HERE
            </Link>
          </motion.div>
        </div>
      </section>

      
      {/* Invitation Section */}
      <section className="relative min-h-screen flex flex-col bg-[#faf4eb]">
        <div className="relative text-center w-full">
          <div className="bg-[#3a302e] w-full py-8">
            <h2 className="text-7xl font-emitha text-[#faf4eb] md:text-8xl text-4xl">
              A story of our ever after
            </h2>
          </div>
          <div className="invitation-section">
            <div 
              className="invitation-image"
              style={{ 
                backgroundImage: "url('/LR-edited-size-optimized-2/YEN07562.jpg')",
                height: '80vh'
              }}
            />
            <div className="invitation-content">
              <h3 className="invitation-header">
                You're invited to our most special day!
              </h3>
              <p className="invitation-body">
                We warmly invite you to share with us this most momentous day as we exchange our marriage vows. Your presence will make this cherished occasion even more meaningful. Join us in celebrating the love and commitment that bring us together.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Filmstrip Section */}
      <Filmstrip direction="left" />

      {/* Save the Date Video Section */}
      <section className="relative flex items-center justify-center bg-[#faf4eb] py-12">
        <div className="w-full max-w-7xl px-4">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg border border-[#d4c5a9]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/2zm-CjbGG9A?si=uQueJ6yE4yIc8TAY"
              title="Mik and Radly | Save the Date"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Save the Date Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/LR-edited-size-optimized-2/YEN08617.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl font-romana tracking-[8px] -mb-2 whitespace-nowrap md:text-8xl text-4xl">
            SAVE <span className="font-emitha tracking-[0px]">the</span> DATE
          </h2>
          <p className="text-2xl font-romana mb-12 whitespace-nowrap md:text-2xl text-xl">
            Saturday, 20th of September at 2:30 PM
          </p>
          <div className="countdown-timer">
            <div className="flex justify-center gap-8">
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.days}</span>
                <span className="countdown-label">DAYS</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.hours}</span>
                <span className="countdown-label">HOURS</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.minutes}</span>
                <span className="countdown-label">MINUTES</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.seconds}</span>
                <span className="countdown-label">SECONDS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details Section */}
      <section className="relative py-0 flex items-center justify-center bg-[#faf4eb]">
        <div className="relative z-10 text-center w-full">
          <div className="bg-[#3a302e] w-full py-8">
            <h2 className="text-7xl font-emitha text-[#faf4eb] md:text-8xl text-4xl">
              Wedding Details
            </h2>
          </div>
          
          <div className="mt-4">
            <h3 className="invitation-header">
              Venue
            </h3>
            <p className="invitation-body text-lg font-romana text-center max-w-2xl mx-auto">
              Our wedding ceremony and reception will be held at L'Aquinum Gardens, Antipolo City, Rizal.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="invitation-header">
              Timeline
            </h3>
            <div className="max-w-[590px] mx-auto px-[20px] mb-[30px] text-center">
              <Image 
                src="/image-assets/timeline.png"
                alt="Wedding Timeline"
                width={550}
                height={300}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Filmstrip Section */}
      <Filmstrip direction="right" />


      {/* Dress Code Section */}
      <section className="relative py-0 flex items-center bg-[#faf4eb]">
        <div className="relative z-10 text-center w-full">
          <div className="mt-4">
            <h3 className="invitation-header">
              Dress Code
            </h3>
            
            <p className="invitation-body text-lg font-romana text-center max-w-2xl mx-auto">
              Kindly join us in garden-inspired elegance. We request that ladies attire themselves in floral or pastel dresses. 
              Gentlemen are encouraged to wear lightweight suits in black or beige, or formal long-sleeved polo coordinated with our wedding color palette.
            </p>
            </div>
            <div className="max-w-[300px] mx-auto px-[20px] mt-[20px] mb-[20px] text-center">
                <Image 
                  src="/image-assets/palette.png"
                  alt="Dress Code Palette"
                  width={550}
                  height={300}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="max-w-[450px] mx-auto px-[20px] mt-[20px] mb-[20px] text-center">
                <Image 
                  src="/image-assets/dress-code.png"
                  alt="Dress Code Assets"
                  width={550}
                  height={300}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <h3 className="text-6xl font-emitha text-[#3a302e] md:text-7xl text-4xl">
              Principal Sponsors
              </h3>
              <p className="invitation-body text-lg font-romana text-center max-w-2xl mx-auto">
              <b>Ninangs:</b> Long gown or dress for the ladies<br />
              <b>Ninongs:</b> Black or beige suit and tie for the gentlemen <br />
              <br />
              </p>
          
        </div>
      </section>

      {/* Gift Guide Section */}
      <section className="relative py-600 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-[center_-30px] bg-no-repeat md:bg-[center_-160px] lg:bg-[center_-400px]"
          style={{ 
            backgroundImage: "url('/LR-edited-size-optimized-2/YEN07636.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-[#faf4eb] text-romana text-3xl py-10 md:text-5xl text-4xl">
            Gift Guide
          </h2>
        </div>
      </section>

       {/* Gift Guide Section 2 */}
       <section className="relative py-0 flex items-center bg-[#faf4eb]">
        <div className="relative z-10 text-center w-full">
          <div className="mt-4">
            <p className="invitation-body text-lg font-romana text-center max-w-2xl mx-auto">
            Your love, your prayers, and just having you there with us mean the world. 
            But if you're thinking of giving a gift, a little monetary gift would truly support our new beginning and mean so much to us.
            </p>
            </div>
            
            <div className="mt-4">
              <h3 className="invitation-header mt-8">
                Reminders
              </h3>
              <p className="invitation-body text-lg font-romana text-center max-w-2xl mx-auto mb-10">
              While we absolutely adore your little ones, please note that our wedding will be an adults-only celebration, and our ceremony will be unplugged to allow everyone to be fully present in the moment.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="invitation-header mt-8">
                Got more questions?
              </h3>
              <p className="invitation-body text-lg font-romana text-center max-w-2xl mx-auto mb-4">
              Head over to our FAQs page.
              </p>
                <Link 
                href="/faqs"
                className="inline-block px-8 py-2 bg-[#3a302e] text-[#faf4eb] font-romana mb-8 text-lg md:text-xl rounded-full hover:bg-black transition-colors "
                  >
                FAQs
                </Link>
            </div>
        
          
        </div>
      </section>
    </main>
  );
} 