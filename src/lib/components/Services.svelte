<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, scale } from 'svelte/transition';
  import { quintOut, backOut } from 'svelte/easing';

  let servicesVisible = false;
  let servicesSection: HTMLElement;

  const services = [
    {
      title: 'CRUD Cepat (Studi)',
      description: 'Membangun aplikasi CRUD yang efisien untuk tugas-tugas perkuliahan menggunakan framework seperti CodeIgniter dan Laravel.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M12 18v-6"></path><path d="M9 15h6"></path></svg>`
    },
    {
      title: 'Solusi AI Kustom',
      description: 'Membuat solusi berbasis AI untuk penggunaan pribadi, termasuk model pembelajaran mesin dan skrip otomasi yang sederhana.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4c0 3.2 4 8 4 8s4-4.8 4-8a4 4 0 0 0-4-4z"></path><path d="M19 12a7 7 0 1 0 0 0.01z"></path><path d="M5 12a7 7 0 1 0 0 0.01z"></path></svg>`
    },
    {
      title: 'Pengembangan Web',
      description: 'Membangun situs web dan aplikasi web modern yang responsif dan dioptimalkan untuk performa.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-3 3a5 5 0 0 0-.54 7.54z"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l3-3a5 5 0 0 0 .54-7.54z"></path></svg>`
    },
    {
      title: 'Konsultasi Teknis',
      description: 'Memberikan panduan dan konsultasi untuk membantu Anda memilih teknologi terbaik untuk proyek Anda.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 16h-1c-2.2 0-4-1.8-4-4s1.8-4 4-4h1v8z"></path><path d="M8 8a4 4 0 1 1 0-8c-2.2 0-4 1.8-4 4s1.8 4 4 4z"></path><path d="M12 20a4 4 0 1 0 0-8c2.2 0 4 1.8 4 4s-1.8 4-4 4z"></path></svg>`
    }
  ];

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          servicesVisible = true;
          observer.unobserve(servicesSection);
        }
      });
    }, { threshold: 0.3 });

    if (servicesSection) {
      observer.observe(servicesSection);
    }
  });
</script>


<section id="services" class="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50" bind:this={servicesSection}>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float-services"></div>
    <div class="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-lg rotate-12 blur-lg animate-float-delayed-services"></div>
    <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/15 to-teal-400/15 rounded-full animate-pulse-slow-services"></div>
    <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
  </div>

  <div class="container mx-auto px-4 lg:px-8 relative z-10 text-center">
    {#if servicesVisible}
      <div in:fly={{ y: 50, duration: 800, easing: quintOut }} class="mb-16">
        <h2 class="text-5xl lg:text-6xl font-bold mb-4">
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Layanan
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
    {/if}

    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#if servicesVisible}
        {#each services as service, i}
          <div
            in:scale={{ duration: 600, delay: i * 100, start: 0.8, easing: backOut }}
            class="group p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div class="flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
              {@html service.icon}
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
            <p class="text-sm text-gray-700">{service.description}</p>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>


<style>
  /* Animasi untuk background */
  @keyframes float-services {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  @keyframes float-delayed-services {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(-5deg); }
  }
  @keyframes pulse-slow-services {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  .animate-float-services { animation: float-services 6s ease-in-out infinite; }
  .animate-float-delayed-services { animation: float-delayed-services 8s ease-in-out infinite; }
  .animate-pulse-slow-services { animation: pulse-slow-services 4s ease-in-out infinite; }
</style>