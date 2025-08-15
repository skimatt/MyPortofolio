<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { fly, scale } from 'svelte/transition';
  import { quintOut, backOut } from 'svelte/easing';

  export let data;

  // Variabel untuk trigger animasi saat komponen dimuat
  let componentMounted = false;
</script>

<svelte:head>
  <title>Semua Projek | Rahmat Mulia</title>
</svelte:head>

<Navbar />
<main class="py-20 mt-16 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float"></div>
    <div class="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-lg rotate-12 blur-lg animate-float-delayed"></div>
    <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/15 to-teal-400/15 rounded-full animate-pulse-slow"></div>
    <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
  </div>

  <div class="container mx-auto px-4 lg:px-8 relative z-10">
    <h1 class="text-4xl lg:text-6xl font-bold text-center mb-16" in:fly={{ y: 50, duration: 800, easing: quintOut }}>
      <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Semua Projek
      </span>
    </h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each data.allProjects as project, i}
        <div
          in:scale={{ duration: 600, delay: i * 100, start: 0.8, easing: backOut }}
          class="group bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <img src={project.image} alt={project.title} class="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy" />
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
            <p class="mb-4 text-gray-700">{project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              {#each project.tech as tech}
                <span class="bg-gradient-to-r from-blue-200 to-purple-200 text-gray-700 text-sm px-3 py-1 rounded-full font-medium">{tech}</span>
              {/each}
            </div>
            <div class="flex space-x-4">
              {#if project.liveUrl}
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              {/if}
              {#if project.githubUrl}
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group relative inline-flex items-center justify-center gap-2 bg-gray-200 text-gray-800 py-3 px-8 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4m-6 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  GitHub
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>
<Footer />

<style>
  /* Animasi untuk background */
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

  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
  .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
</style>