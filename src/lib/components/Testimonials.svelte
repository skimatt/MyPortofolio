<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  const testimonials = [
    { quote: "Gokil! Proyeknya jadi lebih cepat dari ekspektasi. Mantap banget sih!", author: "Fajar Sidik", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    { quote: "Awalnya bingung, tapi langsung ngerti pas dijelasin. Hasilnya keren, mirip kayak yang di film-film. Haha.", author: "Nabila Putri", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026708c" },
    { quote: "Bisa bikin AI buat ngerjain tugas, bro. Pikiranku terbuka lebar. Thank you, Skimatt!", author: "Aditya Pratama", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026707a" },
    { quote: "Kerja sama top banget! Orangnya ramah, hasilnya rapi. Pasti bakal balik lagi nih.", author: "Rizky Firmansyah", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026709f" },
    { quote: "Kodingannya clean, mudah dipahami. Sebagai sesama developer, salut sama portofolio ini.", author: "Siti Rahmawati", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026701a" },
    { quote: "Solusi yang cerdas dan out-of-the-box. Gak nyangka bisa kepikiran ide kayak gini.", author: "Bayu Wicaksono", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705c" },
    { quote: "Pokoknya recommended! Orangnya profesional tapi juga santai. Bikin nyaman pas diskusi.", author: "Dian Permata", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706e" },
    { quote: "Produk jadinya melebihi ekspektasi. Terima kasih banyak, Skimatt!", author: "Yoga Pratama", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026702g" }
  ];

  const loopTestimonials = [...testimonials, ...testimonials];

  let testimonialsSection: HTMLElement;
  let visible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) visible = true;
        });
      },
      { threshold: 0.3 }
    );

    if (testimonialsSection) observer.observe(testimonialsSection);
    return () => observer.disconnect();
  });
</script>

<section
  id="testimonials"
  class="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50"
  bind:this={testimonialsSection}
>
  <!-- Background effects -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float"></div>
    <div class="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-lg rotate-12 blur-lg animate-float-delayed"></div>
    <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/15 to-teal-400/15 rounded-full animate-pulse-slow"></div>
  </div>

  <div class="container mx-auto px-4 lg:px-8 relative z-10 text-center">
    {#if visible}
      <div in:fly={{ y: 50, duration: 800, easing: quintOut }} class="mb-12">
        <h2 class="text-5xl lg:text-6xl font-bold mb-4">
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Kata Mereka
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <div class="overflow-hidden">
        <div class="flex animate-scroll-left">
          {#each loopTestimonials as testimonial}
            <div class="flex-none w-64 p-4">
              <div class="p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 h-full flex flex-col justify-between">
                <div>
                  <img src={testimonial.avatar} alt={testimonial.author} class="w-12 h-12 rounded-full mx-auto mb-4" />
                  <p class="italic text-sm text-gray-700 mb-4">"{testimonial.quote}"</p>
                </div>
                <p class="font-semibold text-dark-slate">- {testimonial.author}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .animate-scroll-left {
    animation: scroll-left 12s linear infinite;
  }

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
</style>
