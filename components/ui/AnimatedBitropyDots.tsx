"use client"

export default function AnimatedBitropyDots() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-80 h-80">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 310 477" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="scale-75"
        >
          {/* Purple dots layer with floating animation */}
          <g className="animate-float-gentle">
            <circle cx="50.3475" cy="350.015" r="42.1071" fill="#7700FF" opacity="0.8" />
            <circle cx="204.302" cy="427.65" r="42.1071" fill="#7700FF" opacity="0.8" />
            <circle cx="259.567" cy="340.804" r="42.1071" fill="#7700FF" opacity="0.8" />
            <circle cx="237.198" cy="244.747" r="42.1071" fill="#7700FF" opacity="0.8" />
            <circle cx="110.876" cy="426.334" r="42.1071" fill="#7700FF" opacity="0.8" />
            <circle cx="49.0317" cy="253.958" r="42.1071" fill="#7700FF" opacity="0.8" />
            <circle cx="49.0317" cy="152.638" r="42.1071" fill="#7700FF" opacity="0.8" />
            <circle cx="49.0317" cy="50.0021" r="42.1071" fill="#7700FF" opacity="0.8" />
            <circle cx="141.141" cy="215.799" r="42.1071" fill="#7700FF" opacity="0.8" />
          </g>

          {/* Pink dots layer with offset floating animation */}
          <g className="animate-float-offset">
            <circle cx="46.4" cy="351.331" r="42.1071" fill="#FF009D" opacity="0.7" />
            <circle cx="206.933" cy="430.282" r="42.1071" fill="#FF009D" opacity="0.7" />
            <circle cx="263.515" cy="342.12" r="42.1071" fill="#FF009D" opacity="0.7" />
            <circle cx="239.829" cy="242.116" r="42.1071" fill="#FF009D" opacity="0.7" />
            <circle cx="109.561" cy="430.282" r="42.1071" fill="#FF009D" opacity="0.7" />
            <circle cx="46.4" cy="251.327" r="42.1071" fill="#FF009D" opacity="0.7" />
            <circle cx="46.4" cy="148.691" r="42.1071" fill="#FF009D" opacity="0.7" />
            <circle cx="46.4" cy="46.0546" r="42.1071" fill="#FF009D" opacity="0.7" />
            <circle cx="141.141" cy="211.851" r="42.1071" fill="#FF009D" opacity="0.7" />
          </g>

          {/* Black dots layer with subtle pulse */}
          <g className="animate-pulse-subtle">
            <circle cx="42.4525" cy="353.963" r="42.1071" fill="#374151" opacity="0.6" />
            <circle cx="209.565" cy="434.229" r="42.1071" fill="#374151" opacity="0.6" />
            <circle cx="267.462" cy="344.752" r="42.1071" fill="#374151" opacity="0.6" />
            <circle cx="243.777" cy="239.484" r="42.1071" fill="#374151" opacity="0.6" />
            <circle cx="106.929" cy="434.229" r="42.1071" fill="#374151" opacity="0.6" />
            <circle cx="42.4525" cy="248.695" r="42.1071" fill="#374151" opacity="0.6" />
            <circle cx="42.4525" cy="144.743" r="42.1071" fill="#374151" opacity="0.6" />
            <circle cx="42.4525" cy="42.1071" r="42.1071" fill="#374151" opacity="0.6" />
            <circle cx="141.141" cy="206.588" r="42.1071" fill="#374151" opacity="0.6" />
          </g>

          {/* Glowing effect dots */}
          <g className="animate-glow">
            <circle cx="141.141" cy="211.851" r="20" fill="url(#purpleGlow)" opacity="0.4" />
            <circle cx="237.198" cy="244.747" r="15" fill="url(#pinkGlow)" opacity="0.3" />
            <circle cx="49.0317" cy="152.638" r="18" fill="url(#purpleGlow)" opacity="0.4" />
          </g>

          {/* Gradient definitions */}
          <defs>
            <radialGradient id="purpleGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7700FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7700FF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="pinkGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF009D" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF009D" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(-5px, -8px) rotate(1deg); }
          50% { transform: translate(8px, -3px) rotate(-1deg); }
          75% { transform: translate(-3px, 5px) rotate(0.5deg); }
        }
        
        @keyframes float-offset {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(6px, -5px) rotate(-0.5deg); }
          66% { transform: translate(-4px, 7px) rotate(1deg); }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        
        .animate-float-gentle {
          animation: float-gentle 8s ease-in-out infinite;
        }
        
        .animate-float-offset {
          animation: float-offset 6s ease-in-out infinite 1s;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite 0.5s;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}