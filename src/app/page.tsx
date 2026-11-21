export default function Home() {
  return (
    <main 
      className="flex-1 w-full relative overflow-hidden bg-[#E60012] min-h-screen"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* --- BACKGROUND GRAPHICS --- */}
      {/* 1. Halftone Dot Pattern (Comic Book Style) */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, #000 20%, transparent 20%)",
          backgroundSize: "6px 6px"
        }}
      ></div>

      {/* 2. Massive Black Slashes */}
      <div className="absolute top-0 right-0 w-[120%] h-[150%] bg-black -rotate-12 translate-x-[20%] translate-y-[-20%] border-l-[20px] border-white z-0 shadow-[-20px_0px_0px_0px_#000]"></div>
      
      {/* 3. White Accent Slash */}
      <div className="absolute bottom-0 left-0 w-[150%] h-32 bg-white rotate-6 translate-y-10 z-0 border-y-8 border-black"></div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32">
        
        {/* Top Header / Title */}
        <div className="flex flex-col items-start mb-20">
          <div className="bg-white text-black px-4 py-1 border-4 border-black -rotate-2 font-bold text-xl mb-4 shadow-[4px_4px_0px_0px_#000] flex-shrink-0">
            SOFTWARE ENGINEER
          </div>
          
          <div className="relative inline-block">
            {/* The jagged red box behind the text */}
            <div className="absolute inset-0 bg-red-600 -skew-x-12 -rotate-2 border-4 border-black shadow-[10px_10px_0px_0px_#000]"></div>
            <h1 className="relative text-7xl md:text-8xl lg:text-9xl text-white font-black uppercase tracking-tighter italic -skew-x-12 px-8 py-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] whitespace-nowrap">
              ABEER IMRAN
            </h1>
          </div>
        </div>

        {/* The Slanted Menu */}
        <div className="flex flex-col gap-4 max-w-sm ml-4 md:ml-20">
          
          <a href="#projects" className="group relative block w-full transform hover:translate-x-4 transition-transform duration-200">
            <div className="absolute inset-0 bg-white border-4 border-black -skew-x-12 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
            <div className="relative bg-black text-white text-4xl px-8 py-3 -skew-x-12 border-4 border-black flex justify-between items-center group-hover:bg-gray-900">
              <span className="skew-x-12 italic font-black">PROJECTS</span>
              <span className="skew-x-12 font-black text-red-600">➤</span>
            </div>
          </a>

          <a href="#about" className="group relative block w-full transform hover:translate-x-4 transition-transform duration-200">
            <div className="absolute inset-0 bg-white border-4 border-black -skew-x-12 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
            <div className="relative bg-white text-black text-4xl px-8 py-3 -skew-x-12 border-4 border-black flex justify-between items-center group-hover:bg-gray-100">
              <span className="skew-x-12 italic font-black">ABOUT ME</span>
              <span className="skew-x-12 font-black text-red-600">➤</span>
            </div>
          </a>

          <a href="https://github.com/abeer-imran" target="_blank" rel="noopener noreferrer" className="group relative block w-full transform hover:translate-x-4 transition-transform duration-200">
            <div className="absolute inset-0 bg-red-600 border-4 border-black -skew-x-12 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
            <div className="relative bg-black text-white text-4xl px-8 py-3 -skew-x-12 border-4 border-black flex justify-between items-center group-hover:bg-red-950">
              <span className="skew-x-12 italic font-black">GITHUB</span>
              <span className="skew-x-12 font-black text-red-600">➤</span>
            </div>
          </a>

        </div>

        {/* About & Projects (Styled to match) */}
        <div className="mt-40 bg-white border-8 border-black p-8 -rotate-1 shadow-[15px_15px_0px_0px_#000]">
          <section id="about" className="mb-16 scroll-mt-24">
            <h2 className="text-5xl font-black text-black bg-[#E60012] text-white inline-block px-6 py-2 -skew-x-12 border-4 border-black mb-8">
              <span className="skew-x-12 inline-block">ABOUT ME</span>
            </h2>
            <p className="text-2xl font-bold text-black leading-tight mb-4">
              I am a software engineering student with a strong passion for backend architecture, cloud infrastructure, and real-time systems. I enjoy solving complex problems and building systems that are both scalable and reliable.
            </p>
            <p className="text-2xl font-bold text-black leading-tight">
              Currently, I am focusing on the Node.js and TypeScript ecosystem, building APIs and deploying them using AWS and Docker.
            </p>
          </section>

          <section id="projects" className="scroll-mt-24">
            <h2 className="text-5xl font-black text-white bg-black inline-block px-6 py-2 -skew-x-12 border-4 border-white mb-8">
              <span className="skew-x-12 inline-block">PROJECTS</span>
            </h2>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-black border-4 border-black p-6 relative">
                <h3 className="text-4xl font-black text-white mb-4">MATCHMAKING SERVICE</h3>
                <p className="text-gray-300 text-xl mb-6 font-bold">
                  A scalable matchmaking backend for multiplayer games. Features skill-based queueing (MMR), real-time WebSocket communication, and is deployed on AWS ECS Fargate.
                </p>
                <div className="flex gap-2">
                  <span className="bg-white text-black font-black px-4 py-1 -skew-x-12">Node.js</span>
                  <span className="bg-white text-black font-black px-4 py-1 -skew-x-12">Socket.IO</span>
                  <span className="bg-white text-black font-black px-4 py-1 -skew-x-12">AWS</span>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}