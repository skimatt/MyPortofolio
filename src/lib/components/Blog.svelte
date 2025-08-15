<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let blogVisible = false;
  let blogSection: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          blogVisible = true;
          observer.unobserve(blogSection);
        }
      });
    }, { threshold: 0.3 });

    if (blogSection) {
      observer.observe(blogSection);
    }
  });
</script>



<section id="blog" class="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50" bind:this={blogSection}>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float-blog"></div>
    <div class="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-lg rotate-12 blur-lg animate-float-delayed-blog"></div>
    <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/15 to-teal-400/15 rounded-full animate-pulse-slow-blog"></div>
    <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
  </div>

  <div class="container mx-auto px-4 lg:px-8 text-center max-w-3xl relative z-10">
    {#if blogVisible}
      <div in:fly={{ y: 50, duration: 800, easing: quintOut }}>
        <h2 class="text-5xl lg:text-6xl font-bold mb-4">
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Blog & Artikel
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>

        <p class="text-lg text-gray-700 leading-relaxed mt-10 mb-12">
          Jelajahi berbagai artikel mendalam tentang 
          <span class="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">teknologi</span>, 
          <span class="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">pengembangan perangkat lunak</span>, 
          dan wawasan industri terkini.
        </p>

        <a href="/blog" 
          class="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
          <svg class="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2m2 2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v4m14 0a2 2 0 01-2 2H7a2 2 0 01-2-2"></path>
          </svg>
          Lihat Semua Artikel
        </a>
      </div>
    {/if}
  </div>
</section>



<style>
  /* Animasi untuk background */
  @keyframes float-blog {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  @keyframes float-delayed-blog {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(-5deg); }
  }
  @keyframes pulse-slow-blog {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  .animate-float-blog { animation: float-blog 6s ease-in-out infinite; }
  .animate-float-delayed-blog { animation: float-delayed-blog 8s ease-in-out infinite; }
  .animate-pulse-slow-blog { animation: pulse-slow-blog 4s ease-in-out infinite; }
</style>