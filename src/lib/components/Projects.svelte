<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, scale } from 'svelte/transition';
  import { quintOut, backOut } from 'svelte/easing';

  // Import gambar dari src/assets
  import puskesmasImg from '../../assets/puskesmas.jpg';
  import nexoraImg from '../../assets/nexora.jpg';
  import customImg from '../../assets/custom-project.jpg';

  let projectsVisible = false;
  let projectsSection: HTMLElement;

  // Data proyek
  const allProjects = [
    {
      title: 'Sistem Puskesmas',
      description: 'Sistem puskesmas menggunakan CodeIgniter 3 dengan 3 role: Super Admin, Admin, dan Pasien.',
      image: puskesmasImg,
      tech: ['CodeIgniter 3', 'PHP', 'MySQL'],
      liveUrl: null,
    },
    {
      title: 'Nexora AI',
      description: 'Aplikasi AI menggunakan API seperti ChatGPT, menyediakan interaksi cerdas dan integrasi API modern.',
      image: nexoraImg,
      tech: ['JavaScript', 'API', 'Node.js'],
      liveUrl: 'https://nexora-20.vercel.app/',
    },
    {
      title: 'Custom Project',
      description: 'Proyek kustom modern dengan desain responsif dan animasi halus, menampilkan fitur interaktif.',
      image: customImg,
      tech: ['Svelte', 'Tailwind CSS', 'Animations'],
      liveUrl: null,
    },
  ];

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          projectsVisible = true;
          observer.unobserve(projectsSection);
        }
      });
    }, { threshold: 0.3 });

    if (projectsSection) {
      observer.observe(projectsSection);
    }
  });
</script>

<section id="projects" class="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50" bind:this={projectsSection}>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float-projects"></div>
    <div class="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-lg rotate-12 blur-lg animate-float-delayed-projects"></div>
    <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/15 to-teal-400/15 rounded-full animate-pulse-slow-projects"></div>
    
    <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L2Rlc2ZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
  </div>

  <div class="container mx-auto px-4 lg:px-8 relative z-10">
    {#if projectsVisible}
      <div in:fly={{ y: 50, duration: 800, easing: quintOut }} class="text-center mb-16">
        <h2 class="text-5xl lg:text-6xl font-bold mb-4">
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Projek
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
    {/if}

    {#if projectsVisible}
      <div in:fly={{ y: 50, duration: 1000, easing: quintOut, delay: 200 }} class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each allProjects as project (project.title)}
          <div
            class="group bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <img src={project.image} alt={project.title} class="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2 text-gray-800">
                {project.title}
              </h3>
              <p class="mb-4 text-gray-700">{project.description}</p>

              <div class="flex flex-wrap gap-2 mb-4">
                {#each project.tech as tech}
                  <span class="bg-gradient-to-r from-blue-200 to-purple-200 text-gray-700 text-sm px-3 py-1 rounded-full font-medium">
                    {tech}
                  </span>
                {/each}
              </div>

              {#if project.liveUrl}
                <div class="flex space-x-4">
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
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    {/if}

    {#if projectsVisible}
      <div in:fly={{ y: 50, duration: 800, easing: quintOut, delay: 400 }} class="text-center mt-12">
        <a
          href="/projects"
          class="group inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-blue-300 text-blue-700 py-3 px-8 rounded-full font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:rotate-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          Lihat Semua Projek
        </a>
      </div>
    {/if}
  </div>
</section>



<style>
  /* Animasi untuk background */
  @keyframes float-projects {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  @keyframes float-delayed-projects {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(-5deg); }
  }
  @keyframes pulse-slow-projects {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  .animate-float-projects { animation: float-projects 6s ease-in-out infinite; }
  .animate-float-delayed-projects { animation: float-delayed-projects 8s ease-in-out infinite; }
  .animate-pulse-slow-projects { animation: pulse-slow-projects 4s ease-in-out infinite; }
</style>