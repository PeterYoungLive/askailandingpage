import React from 'react';
import { ArrowRight, Chrome, Rocket } from 'lucide-react';

function App() {
  // These URLs should be replaced with actual links
  const chromeStoreUrl = "https://chromewebstore.google.com/detail/ask-ai-chat-gpt-assistant/lnoaeakjbdaldjdomdhjjilmofghjeck?";
  const productHuntUrl = "#";

  return (
    <div className="min-h-screen bg-[#9ddfe6] bg-opacity-20">
      {/* Background Pattern */}
      <div className="fixed inset-0" style={{
        backgroundImage: `linear-gradient(#9ddfe6 1.5px, transparent 1.5px), linear-gradient(to right, #9ddfe6 1.5px, transparent 1.5px)`,
        backgroundSize: '50px 50px',
        opacity: 0.3,
        zIndex: -1
      }} />
      
      {/* Hero Section */}
      <main className="relative max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-display font-bold text-[#2A9D8F] mb-6 tracking-tight">
          Click less. Browse faster. Save time.
        </h1>
        <p className="text-2xl text-[#264653] mb-10 mx-auto font-medium leading-relaxed">
          Ask AI Chat - The Chrome extension to boost your productivity
        </p>

        {/* Video Section */}
        <div className="relative w-full max-w-3xl mx-auto mb-12 rounded-2xl overflow-hidden border-8 border-[#9ddfe6] shadow-[0_20px_50px_-15px_rgba(157,223,230,0.5)]">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/_3opboyfkPs?autoplay=1&loop=1&controls=1&playlist=_3opboyfkPs&modestbranding=1&mute=1&rel=0"
            allow="autoplay"
            frameBorder="0"
          ></iframe>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a
            href={productHuntUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-[#264653] border-2 border-[#9ddfe6] rounded-xl shadow-[0_8px_30px_rgba(157,223,230,0.2)] hover:shadow-[0_8px_35px_rgba(157,223,230,0.3)] hover:border-[#2A9D8F] hover:bg-[#9ddfe610] hover:transform hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <Rocket className="w-6 h-6 mr-3 stroke-[1.5]" />
            <span className="font-medium">View on Product Hunt</span>
            <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-200" />
          </a>
          <a
            href={chromeStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#2A9D8F] text-white rounded-xl shadow-[0_8px_30px_rgba(157,223,230,0.4)] hover:shadow-[0_8px_35px_rgba(157,223,230,0.6)] hover:bg-[#238377] hover:transform hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <Chrome className="w-6 h-6 mr-3 stroke-[1.5]" />
            <span className="font-medium">Add to Chrome</span>
            <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-200" />
          </a>
          
        </div>
      </main>
    </div>
  );
}

export default App;