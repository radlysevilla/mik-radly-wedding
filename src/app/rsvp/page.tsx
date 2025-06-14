import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function RSVP() {
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
          className="absolute inset-0 bg-cover bg-top-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/LR-edited-size-optimized-2/YEN09161-Edit.jpg')",
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white -mt-[50px]">
          <h1 className="text-4xl md:text-6xl font-romana font-bold tracking-widest">
            RSVP
          </h1>
        </div>
      </section>

      {/* RSVP Form Section */}
      <section className="relative py-8 bg-[#faf4eb]">
        <div className="max-w-4xl mx-auto px-4 h-full">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="relative w-full h-screen" >
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfzh_W9HHO7gnquNddOL8cNE77acpUPFZr4Bl8LM8AC-0vWpw/viewform?embedded=true" 
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                allowFullScreen={true}
                title="RSVP Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" style={{ color: '#3a302e', textAlign: 'center' }}>
                <h3 className="text-xl font-romana font-bold mb-4">
                Done filling the form? Check out our prenuptial photos at the gallery!
                </h3>
                <Link 
                href="/gallery"
                className="inline-block px-8 py-2 bg-[#3a302e] text-[#faf4eb] font-romana mb-4 text-lg md:text-xl rounded-full hover:bg-black transition-colors "
                  >
                Gallery
                </Link>
            </div>
        </div>
        {/* Twelveth FAQ */}
        
      </section>
    </main>
  );
} 