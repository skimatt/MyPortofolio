<script>
  import "../app.css";
  import { onMount } from 'svelte';
  import { isDarkMode } from '$lib/stores.js'; // Mengimpor dari file stores.js yang baru

  onMount(() => {
    // Cek preferensi sistem saat halaman dimuat
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      isDarkMode.set(true);
    } else {
      document.documentElement.classList.remove('dark');
      isDarkMode.set(false);
    }
  });
</script>

<div class="bg-white-soft text-dark-slate dark:bg-dark-slate dark:text-white-soft font-sans antialiased min-h-screen transition-colors duration-300">
  <slot />
</div>