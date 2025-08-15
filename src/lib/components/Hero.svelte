<script lang="ts">
  import avatar from '../../assets/avatar.jpg';
  import { onMount } from 'svelte';
  import { fly, fade, scale } from 'svelte/transition';
  import { quintOut, elasticOut, backOut } from 'svelte/easing';

  let heroVisible = false;
  let nameVisible = false;
  let typingText = '';
  let showCursor = true;
  
  const phrases = [
    'Seorang Profesional IT.',
    'Antusias di bidang AI.',
    'Pengembang Perangkat Lunak Kreatif.'
  ];
  
  const typingDelay = 80;
  const deletingDelay = 40;
  const pauseDelay = 2000;

  let phraseIndex = 0;
  let mouseX = 0;
  let mouseY = 0;

  // Parallax mouse effect
  function handleMouseMove(event: MouseEvent) {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 15;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 15;
  }

  function loopTyping() {
    let fullText = phrases[phraseIndex];
    let i = 0;
    showCursor = true;

    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        typingText += fullText.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(deleteText, pauseDelay);
      }
    }, typingDelay);

    function deleteText() {
      let j = fullText.length;
      const deleteInterval = setInterval(() => {
        if (j > 0) {
          typingText = typingText.slice(0, j - 1);
          j--;
        } else {
          clearInterval(deleteInterval);
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(loopTyping, 300);
        }
      }, deletingDelay);
    }
  }

  onMount(() => {
    heroVisible = true;
    setTimeout(() => {
      nameVisible = true;
    }, 800);
    setTimeout(loopTyping, 1500);
    
    // Cursor blinking effect
    setInterval(() => {
      showCursor = !showCursor;
    }, 500);
  });
</script>

<svelte:window on:mousemove={handleMouseMove} />

<section id="hero" class="relative min-h-screen overflow-hidden">
  <!-- Animated Background Gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
  
  <!-- Floating Particles Background -->
  <div class="absolute inset-0 overflow-hidden">
    {#each Array(15) as _, i}
      <div 
        class="particle absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20"
        style="
          width: {Math.random() * 4 + 2}px;
          height: {Math.random() * 4 + 2}px;
          left: {Math.random() * 100}%;
          top: {Math.random() * 100}%;
          animation-delay: {Math.random() * 20}s;
        "
      ></div>
    {/each}
  </div>

  <!-- Geometric Shapes -->
  <div class="absolute inset-0 pointer-events-none">
    <div 
      class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float"
      style="transform: translate({mouseX * 0.5}px, {mouseY * 0.3}px)"
    ></div>
    <div 
      class="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-xl animate-float-delayed"
      style="transform: translate({mouseX * -0.3}px, {mouseY * 0.5}px)"
    ></div>
    <div 
      class="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400/15 to-teal-400/15 rounded-lg rotate-45 blur-lg animate-pulse-slow"
      style="transform: translate({mouseX * 0.2}px, {mouseY * -0.4}px) rotate(45deg)"
    ></div>
  </div>

  <!-- Main Content -->
  <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 lg:px-8 pt-20">
    {#if heroVisible}
      <!-- Avatar with enhanced effects -->
      <div 
        in:scale={{ duration: 1000, easing: elasticOut, start: 0.3 }}
        class="mb-8 relative group"
        style="transform: translate({mouseX * 0.1}px, {mouseY * 0.1}px)"
      >
        <!-- Glowing ring effect -->
        <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow"></div>
        
        <!-- Avatar container -->
        <div class="relative">
          <img 
            src={avatar} 
            alt="Avatar Rahmat Mulia"
            class="w-44 h-44 lg:w-52 lg:h-52 rounded-full mx-auto shadow-2xl transform group-hover:scale-110 transition-all duration-700 border-4 border-white/50 backdrop-blur-sm"
          />
          <!-- Avatar overlay effect -->
          <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-500"></div>
        </div>
      </div>

      <!-- Name with proper staggered animation -->
      <div 
        in:fly={{ y: 80, duration: 1000, easing: backOut, delay: 400 }}
        class="text-center mb-6"
        style="transform: translate({mouseX * 0.05}px, {mouseY * 0.05}px)"
      >
        <h1 class="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 leading-tight">
          <span class="inline-block">Halo, saya</span>
          <br>
          {#if nameVisible}
            <span 
              in:fly={{ y: 50, duration: 800, easing: backOut }}
              class="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-black gradient-text"
            >
              Rahmat Mulia
            </span>
          {/if}
        </h1>
      </div>

      <!-- Typing text with enhanced cursor -->
      <div 
        in:fade={{ delay: 1200, duration: 800 }}
        class="mb-12 h-16 flex items-center justify-center"
        style="transform: translate({mouseX * 0.03}px, {mouseY * 0.03}px)"
      >
        <p class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium text-center flex items-center">
          <span class="typing-text">{typingText}</span>
          <span 
            class="cursor ml-1 inline-block w-0.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 transition-opacity duration-150"
            class:opacity-100={showCursor}
            class:opacity-0={!showCursor}
          ></span>
        </p>
      </div>

      <!-- Enhanced Action Buttons -->
      <div 
        in:fade={{ delay: 1800, duration: 800 }}
        class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16"
        style="transform: translate({mouseX * 0.02}px, {mouseY * 0.02}px)"
      >
        <a href="#projects"
           class="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
          <!-- Button shine effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <span class="relative z-10 flex items-center justify-center gap-2">
            Lihat Proyek
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </a>
        
        <a href="#contact"
           class="group relative bg-white/80 backdrop-blur-sm border-2 border-blue-300 text-blue-700 py-4 px-8 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden">
          <!-- Button shine effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <span class="relative z-10 flex items-center justify-center gap-2">
            Hubungi Saya
            <svg class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
        </a>
      </div>

      <!-- Simple Scroll Indicator -->
      <div 
        in:fade={{ delay: 2200, duration: 500 }}
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style="transform: translate(calc(-50% + {mouseX * 0.02}px), {mouseY * 0.02}px)"
      >
        <a href="#about" class="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group">
          <span class="text-sm font-medium mb-2 group-hover:scale-110 transition-transform duration-300">Jelajahi Lebih</span>
          <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m-7-7 7 7m7-7H8" />
          </svg>
        </a>
      </div>
    {/if}
  </div>
</section>

<style>
  /* Custom animations */
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }

  @keyframes float-delayed {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(-5deg); }
  }

  @keyframes particle-float {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    25% { transform: translateY(-10px) translateX(5px); }
    50% { transform: translateY(-20px) translateX(-5px); }
    75% { transform: translateY(-10px) translateX(10px); }
  }

  @keyframes gradient-text {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @keyframes pulse-slow {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  /* Apply animations */
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
  }

  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }

  .particle {
    animation: particle-float 15s ease-in-out infinite;
  }

  .gradient-text {
    background-size: 200% 200%;
    animation: gradient-text 3s ease infinite;
  }

  /* Responsive typography */
  @media (max-width: 640px) {
    .typing-text {
      font-size: 1.125rem;
    }
    .cursor {
      height: 1.5rem;
    }
  }

  /* Custom scrollbar for webkit browsers */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #2563eb, #7c3aed);
  }
</style>