<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade, blur, fly, scale } from 'svelte/transition';
  import { quintOut, backOut } from 'svelte/easing';
  import cvLink from '../../assets/cv.pdf';
  import bgMusic from '../../assets/bg-music.mp3';
  import musicImage from '../../assets/music.jpg';

  let audio: HTMLAudioElement | null = null;
  let isPlaying = false;
  let progress = 0;
  let duration = 0;
  let currentTime = 0;
  let aboutVisible = false;
  let musicVisible = false;
  // let skillsVisible = false; // Baris ini sudah dihapus

  // const skills = [...]; // Array skills sudah dihapus

  let aboutSection: HTMLElement;

  onMount(() => {
    audio = new Audio(bgMusic);
    audio.loop = true;
    audio.volume = 0.7;

    audio.addEventListener('loadedmetadata', () => {
      duration = audio?.duration || 0;
    });

    audio.addEventListener('timeupdate', () => {
      currentTime = audio?.currentTime || 0;
      progress = duration ? (currentTime / duration) * 100 : 0;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutVisible = true;
          setTimeout(() => musicVisible = true, 400);
          // setTimeout(() => skillsVisible = true, 800); // Baris ini sudah dihapus
        }
      });
    }, { threshold: 0.3 });

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      observer.disconnect();
    };
  });

  function toggleMusic() {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => {
        console.error('Gagal memutar audio:', err);
      });
    }
    isPlaying = !isPlaying;
  }

  function seek(e: Event) {
    if (!audio) return;
    const target = e.target as HTMLInputElement;
    const value = parseFloat(target.value);
    audio.currentTime = (value / 100) * duration;
  }

  function formatTime(sec: number) {
    const minutes = Math.floor(sec / 60) || 0;
    const seconds = Math.floor(sec % 60) || 0;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  onDestroy(() => {
    if (audio) {
      audio.pause();
      audio = null;
    }
  });
</script>

<section id="about" class="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50" bind:this={aboutSection}>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float"></div>
    <div class="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-lg rotate-12 blur-lg animate-float-delayed"></div>
    <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/15 to-teal-400/15 rounded-full animate-pulse-slow"></div>
    
    <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
  </div>

  <div class="container mx-auto px-4 lg:px-8 relative z-10">
    {#if aboutVisible}
      <div in:fly={{ y: 50, duration: 800, easing: quintOut }} class="text-center mb-16">
        <h2 class="text-5xl lg:text-6xl font-bold mb-4">
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Tentang Saya
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
    {/if}
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
      {#if aboutVisible}
        <div in:fly={{ x: -50, duration: 1000, easing: backOut }} class="space-y-6">
          <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
            <p class="text-lg mb-6 text-gray-700 leading-relaxed">
              Halo! Nama saya <span class="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Rahmat Mulia</span>, 
              juga dikenal sebagai <span class="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skimatt</span>. 
              Saya lulusan Informatika dengan spesialisasi dalam pemrograman dan pengembangan perangkat lunak.
            </p>
            
            <p class="text-lg mb-6 text-gray-700 leading-relaxed">
              Saya memiliki passion yang kuat dalam coding dan mengeksplorasi dunia yang menakjubkan dari 
              <span class="font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">Artificial Intelligence</span>. 
              Keyakinan utama saya adalah menciptakan solusi yang bersih, scalable, dan berdampak.
            </p>
            
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
              Ketika tidak sedang coding, saya senang mendengarkan musik untuk relaksasi dan mencari inspirasi. 
              Musik membantu saya tetap kreatif dan fokus dalam menghadapi tantangan pemrograman.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <a href={cvLink} download="Rahmat_Mulia_CV.pdf" 
                class="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
                <svg class="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
              
              <a href="#contact" 
                class="group inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-blue-300 text-blue-700 py-3 px-8 rounded-full font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 shadow-lg">
                <svg class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Mari Ngobrol
              </a>
            </div>
          </div>
        </div>
      {/if}

      {#if musicVisible}
        <div in:fly={{ x: 50, duration: 1000, easing: backOut }} class="flex flex-col items-center space-y-8">
          <div class="relative group">
            <div class="absolute -inset-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow"></div>
            
            <div class="relative">
              <img
                src={musicImage}
                alt="Rahmat Mulia Music"
                class="w-72 h-72 lg:w-80 lg:h-80 rounded-full shadow-2xl transform transition-all duration-700 border-4 border-white/50 backdrop-blur-sm group-hover:scale-105"
                class:animate-spin-slow={isPlaying}
                style="animation-duration: 8s;"
              />
              <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-500"></div>
              
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="bg-black/50 rounded-full p-4 backdrop-blur-sm">
                  <button on:click={toggleMusic} 
                    class="p-3 rounded-full bg-white/90 hover:bg-white transition-colors shadow-md text-gray-800" 
                    aria-label={isPlaying ? 'Pause music' : 'Play music'}>
                    {#if isPlaying}
                      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                      </svg>
                    {:else}
                      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                      </svg>
                    {/if}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 w-full max-w-sm">
            <h3 class="text-lg font-semibold text-center mb-4 text-gray-800">Background Music</h3>
            
            <div class="flex items-center space-x-3 mb-4">
              <span class="text-sm text-gray-600 font-mono min-w-[3rem]">{formatTime(currentTime)}</span>
              <div class="flex-1 relative">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={progress} 
                  on:input={seek} 
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider" 
                />
              </div>
              <span class="text-sm text-gray-600 font-mono min-w-[3rem]">{formatTime(duration)}</span>
            </div>

            <div class="flex justify-center">
              <button on:click={toggleMusic} 
                class="group p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110" 
                aria-label={isPlaying ? 'Pause music' : 'Play music'}>
                {#if isPlaying}
                  <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                {:else}
                  <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                {/if}
              </button>
            </div>
          </div>
        </div>
      {/if}
    </div>

    </div>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }

  @keyframes float-delayed {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(-5deg); }
  }

  @keyframes pulse-slow {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
  }

  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }

  .animate-spin-slow {
    animation: spin 8s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Custom slider styles */
  .slider::-webkit-slider-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  .slider::-moz-range-thumb {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  .slider::-webkit-slider-track {
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(to right, #3b82f6, #8b5cf6);
  }

  .slider::-moz-range-track {
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(to right, #3b82f6, #8b5cf6);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>