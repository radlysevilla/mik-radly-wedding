import Link from 'next/link';
import Image from 'next/image';
//import Navbar from '../../components/Navbar';

export default function FAQs() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/rsvp">RSVP</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
      </nav>
      
      {/* Header Section with Background */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/LR-edited-size-optimized-2/POY09515.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white -mt-[50px]">
          <h1 className="text-4xl md:text-6xl font-romana font-bold">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="relative py-16 bg-[#faf4eb]">
        <div className="max-w-4xl mx-auto px-4">
          {/* First FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 -mt-8" style={{ color: '#3a302e', textAlign: 'center' }}>
            <h3 className="text-xl font-romana font-bold mb-4">
              Can I bring a plus one in your wedding?
            </h3>
            <p className="text-lg font-romana">
              Unfortunately, No! Due to limited capacity, we kindly ask that you honor the number of seats reserved in your name. We appreciate your understanding in not bringing additional guests, including children or plus-ones not specifically invited.
            </p>
          </div>

          {/* Second FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" style={{ color: '#3a302e', textAlign: 'center' }}>
            <h3 className="text-xl font-romana font-bold mb-4">
              Are children allowed at the wedding?
            </h3>
            <p className="text-lg font-romana">
              While we adore your little ones, our wedding and reception will be an adults-only celebration, with the exception of immediate family. We hope you'll take this opportunity to enjoy a well-deserved night out!
            </p>
          </div>

          {/* Third FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" style={{ color: '#3a302e', textAlign: 'center' }}>
            <h3 className="text-xl font-romana font-bold mb-4">
            Will there be parking provided in the venue?
            </h3>
            <p className="text-lg font-romana">
            Yes, there will be adequate parking spaces for all.
            </p>
          </div>

          {/* Fourth FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" style={{ color: '#3a302e', textAlign: 'center' }}>
            <h3 className="text-xl font-romana font-bold mb-4">
                Can I take photos during the wedding ceremony?
            </h3>
            <p className="text-lg font-romana">
            We kindly ask that you join us in an unplugged ceremony. To keep the moment meaningful and distraction-free, please silence and put away your phones during the processional and ceremony. Once we're officially husband and wife, feel free to capture all the memories!
            </p>
          </div>

          {/* Fifth FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" style={{ color: '#3a302e', textAlign: 'center' }}>
            <h3 className="text-xl font-romana font-bold mb-4">
            What time should I arrive?
            </h3>
            <p className="text-lg font-romana">
            The ceremony will begin promptly at 3:00 PM. We kindly ask that you arrive by 2:30 PM to allow time for seating before the wedding ceremony begins.
            </p>
          </div>

          {/* Sixth FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" style={{ color: '#3a302e', textAlign: 'center' }}>
            <h3 className="text-xl font-romana font-bold mb-4">
            I am not a principal sponsor or immediate family of the bride or groom, can I wear a t-shirt and maong pants?
            </h3>
            <p className="text-lg font-romana">
            No, we kindly ask all guests to follow our dress code. Ladies, please wear a floral or pastel dress. Gentlemen, we encourage lightweight suits; if unavailable, a long-sleeved dress shirt with a tie that matches our color palette is perfectly acceptable.
            </p>
          </div>

          {/* Seventh FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" style={{ color: '#3a302e', textAlign: 'center' }}>
            <h3 className="text-xl font-romana font-bold mb-4">
            When is the deadline of the RSVP?
            </h3>
            <p className="text-lg font-romana">
            The deadline will be on July 12, 2025. Please RSVP on or before the mentioned date.
            </p>
          </div>

          {/* Eight FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" style={{ color: '#3a302e', textAlign: 'center' }}>
            <h3 className="text-xl font-romana font-bold mb-4">
            What if I did not fill-out the RSVP?
            </h3>
            <p className="text-lg font-romana">
            There will be no seat and food reserved for you during the ceremony and reception.
            </p>
          </div>

          {/* Ninth FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" style={{ color: '#3a302e', textAlign: 'center' }}>
            <h3 className="text-xl font-romana font-bold mb-4">
            How can we help the couple the best time during their wedding?
            </h3>
            <p className="text-lg font-romana">
            Pray with us for blessings and a smooth celebration. Confirm your attendance promptly, dress appropriately, arrive on time, and stay until the end of the program. Most of all, be present, participate wholeheartedly, and celebrate with joy!
            </p>
          </div>
        

            {/* Tenth FAQ */}
            <div
            className="bg-white rounded-lg shadow-md p-6 mb-8"
            style={{ color: '#3a302e', textAlign: 'center' }}
            >
            <h3 className="text-xl font-romana font-bold mb-4">
                What is the exact name of the location?
            </h3>
            <p className="text-lg font-romana mb-6">
                The exact location is <b><em>L' Aquinum Garden Antipolo Event Venue</em></b>. You may search it on Google Maps or Waze for directions. You may also refer to the map below.
            </p>

            {/* Embedded Google Map */}
            <div className="w-full h-[400px]">
                <iframe
                title="L' Aquinum Garden Antipolo Event Venue"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6029350992394!2d121.12073807593184!3d14.621680985867126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8579115fbfb%3A0x7c832723e3ff162e!2sL&#39;%20Aquinum%20Garden%20Antipolo%20Event%20Venue!5e0!3m2!1sen!2sph!4v1749621356507!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            </div>

            {/* Eleventh FAQ */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8" style={{ color: '#3a302e', textAlign: 'center' }}>
                <h3 className="text-xl font-romana font-bold mb-4">
                Do you have more questions?
                </h3>
                <p className="text-lg font-romana">
                You may contact Mik or Radly on messenger for more questions.
                </p>
            </div>




        </div>
      </section>
    </main>
  );
} 