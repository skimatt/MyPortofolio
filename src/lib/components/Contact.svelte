<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let name = '';
  let email = '';
  let message = '';
  let statusMessage = '';
  let isSending = false;
  let isSuccess = false;

  let contactVisible = false;
  let contactSection: HTMLElement;

  async function handleSubmit() {
    isSending = true;
    isSuccess = false;
    statusMessage = '';

    const formData = { name, email, message };
    
    // GANTI URL DI BAWAH INI DENGAN URL FORMULIR ANDA DARI FORMSPREE
    const formspreeUrl = 'https://formspree.io/f/xjkozady';

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        isSuccess = true;
        statusMessage = 'Pesan Anda telah berhasil dikirim! Saya akan segera membalasnya.';
        name = '';
        email = '';
        message = '';
      } else {
        isSuccess = false;
        statusMessage = 'Gagal mengirim pesan. Silakan coba lagi nanti.';
      }
    } catch (error) {
      isSuccess = false;
      statusMessage = 'Terjadi kesalahan. Periksa koneksi internet Anda.';
    } finally {
      isSending = false;
      
      setTimeout(() => {
        statusMessage = '';
      }, 5000);
    }
  }

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contactVisible = true;
          observer.unobserve(contactSection);
        }
      });
    }, { threshold: 0.3 });

    if (contactSection) {
      observer.observe(contactSection);
    }
  });
</script>



<section id="contact" class="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50" bind:this={contactSection}>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float-contact"></div>
    <div class="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-lg rotate-12 blur-lg animate-float-delayed-contact"></div>
    <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/15 to-teal-400/15 rounded-full animate-pulse-slow-contact"></div>
    <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
  </div>

  <div class="container mx-auto px-4 lg:px-8 text-center relative z-10">
    {#if contactVisible}
      <div in:fly={{ y: 50, duration: 800, easing: quintOut }}>
        <h2 class="text-5xl lg:text-6xl font-bold mb-4">
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Hubungi Saya
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
    {/if}

    <div class="max-w-xl mx-auto p-8 mt-12 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50">
      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <div>
          <label for="name" class="block text-left text-sm font-medium text-gray-700">Nama</label>
          <input
            type="text"
            id="name"
            bind:value={name}
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white/50 text-gray-800"
            required
          />
        </div>

        <div>
          <label for="email" class="block text-left text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            bind:value={email}
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white/50 text-gray-800"
            required
          />
        </div>

        <div>
          <label for="message" class="block text-left text-sm font-medium text-gray-700">Pesan</label>
          <textarea
            id="message"
            rows="4"
            bind:value={message}
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white/50 text-gray-800"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full py-3 px-6 rounded-md shadow-lg text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105"
          disabled={isSending}
        >
          {#if isSending}
            Mengirim...
          {:else}
            Kirim Pesan
          {/if}
        </button>
      </form>

      {#if statusMessage}
        <div 
          class="mt-6 p-4 rounded-md text-sm transition-all duration-300 transform {isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}"
          in:fly={{ y: -10, duration: 300 }}
          aria-live="polite"
        >
          {statusMessage}
        </div>
      {/if}

      <div class="mt-8 pt-6 border-t border-gray-200">
        <p class="text-sm text-gray-600 mb-4">Atau hubungi saya melalui:</p>
        <div class="flex flex-wrap justify-center space-x-6 gap-y-4">
          <a href="mailto:rahmatmulia.11@icloud.com" class="group inline-flex items-center justify-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105">
            <svg class="w-6 h-6 group-hover:rotate-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8V7a2 2 0 012-2h14a2 2 0 012 2v9m-18 0h18a2 2 0 012 2v2a2 2 0 01-2 2H3a2 2 0 01-2-2v-2a2 2 0 012-2z" />
            </svg>
            Email
          </a>
          
          <a href="https://instagram.com/skimatt_" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center justify-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105">
            <svg class="w-6 h-6 group-hover:rotate-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8a8 8 0 01-16 0V8a8 8 0 0116 0zm-8 4a4 4 0 100 0m4 0a4 4 10-8 0a4 4 0 008 0z" />
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 3h.01"></path>
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



<style>
  /* Animasi untuk background */
  @keyframes float-contact {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  @keyframes float-delayed-contact {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(-5deg); }
  }
  @keyframes pulse-slow-contact {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  .animate-float-contact { animation: float-contact 6s ease-in-out infinite; }
  .animate-float-delayed-contact { animation: float-delayed-contact 8s ease-in-out infinite; }
  .animate-pulse-slow-contact { animation: pulse-slow-contact 4s ease-in-out infinite; }
</style>