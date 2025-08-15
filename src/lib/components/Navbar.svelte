<script lang="ts">
// @ts-ignore
import { onMount } from 'svelte';
import { slide } from 'svelte/transition';

let open = false;
let activeSection = 'hero';
// Menghapus 'testimonials' dari daftar sections karena tidak ada di konten
const sections = ['about', 'skills', 'projects', 'services', 'blog', 'contact'];
let scrollY = 0;

// Update activeSection saat scroll
function handleScroll() {
  let currentActive = 'hero';
  for (const section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();
      // Mengubah logika deteksi menjadi lebih responsif terhadap viewport
      if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
        currentActive = section;
        break;
      }
    }
  }
  activeSection = currentActive;
}

// Scroll ke section target smooth
// @ts-ignore
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

onMount(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
});
</script>

<svelte:window bind:scrollY={scrollY} />

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrollY > 50 ? 'bg-white/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}">
  <div class="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">

    <button on:click={() => scrollToSection('hero')} class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transform hover:scale-110 transition-transform duration-300" aria-label="Scroll to hero">
      Skie.Dev
    </button>

    <ul class="hidden lg:flex space-x-8 items-center font-semibold">
      {#each sections as section}
        <li class="relative">
          <button
            on:click|preventDefault={() => scrollToSection(section)}
            class="text-gray-800 hover:text-blue-600 transition-colors relative"
            aria-label={"Scroll to " + section}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
          {#if activeSection === section}
            <div class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"></div>
          {/if}
        </li>
      {/each}
    </ul>

    <div class="lg:hidden flex items-center">
      <button 
        on:click={() => (open = !open)} 
        class="p-2 rounded-md text-gray-800 hover:bg-gray-200 transition-colors"
        aria-label={open ? "Tutup menu" : "Buka menu"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
    </div>

  </div> {#if open}
    <div class="lg:hidden bg-white/90 backdrop-blur-sm shadow-lg mt-1"
         transition:slide={{ duration: 300 }}>
      <ul class="flex flex-col p-4 space-y-2 font-medium">
        {#each sections as section}
          <li>
            <button
              on:click|preventDefault={() => { scrollToSection(section); open = false; }}
              class="block py-2 px-4 rounded-md text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors {activeSection === section ? 'bg-gray-100 text-blue-600' : 'text-gray-800'}"
              aria-label={"Scroll to " + section}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</nav>

<style>
  /* Tambahkan animasi jika diperlukan */
</style>