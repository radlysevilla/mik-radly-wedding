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
            backgroundImage: "url('/LR-edited-size-optimized-2/YEN09154-Edit.jpg')",
            backgroundPosition: 'center top'
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
      <section className="relative py-16 bg-[#faf4eb]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="relative w-full" style={{paddingBottom: '160%', height: 0}}>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfzh_W9HHO7gnquNddOL8cNE77acpUPFZr4Bl8LM8AC-0vWpw/viewform?embedded=true" 
                className="absolute top-0 left-0 w-full h-full min-h-[500px] rounded-lg"
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
        </div>
      </section>
    </main>
  );
} 