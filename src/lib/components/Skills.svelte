<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { quintOut, backOut } from 'svelte/easing';

  // Data skills
  const skillsData = [
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg'},
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
    { name: 'Svelte', icon: 'https://cdn.simpleicons.org/svelte/FF3E00' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
    { name: 'Machine Learning', icon: 'https://cdn.simpleicons.org/jupyter/F37626' }
  ];

  const loopedSkills = [...skillsData, ...skillsData];

  let skillsSection: HTMLElement;
  let skillsVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            skillsVisible = true;
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsSection) observer.observe(skillsSection);

    return () => observer.disconnect();
  });
</script>

<section
  id="skills"
  class="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
  bind:this={skillsSection}
>
  <!-- Background effects -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float"></div>
    <div class="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-lg rotate-12 blur-lg animate-float-delayed"></div>
    <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/15 to-teal-400/15 rounded-full animate-pulse-slow"></div>
  </div>

  <div class="container mx-auto px-4 lg:px-8 relative z-10">
    {#if skillsVisible}
      <div in:fly={{ y: 50, duration: 800, easing: quintOut }} class="text-center mb-16">
        <h2 class="text-5xl lg:text-6xl font-bold mb-4">
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <!-- MOBILE: 2 bar horizontal scroll -->
      <div class="sm:hidden space-y-6">
        <div class="overflow-hidden">
          <div class="flex animate-scroll-left">
            {#each loopedSkills as skill}
              <div class="flex flex-col items-center p-4 min-w-[110px] transform transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                <img src={skill.icon} alt={skill.name} class="w-12 h-12 mb-2" />
                <span class="text-xs font-medium text-dark-slate dark:text-white-soft">{skill.name}</span>
              </div>
            {/each}
          </div>
        </div>
        <div class="overflow-hidden">
          <div class="flex animate-scroll-right">
            {#each loopedSkills as skill}
              <div class="flex flex-col items-center p-4 min-w-[110px] transform transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                <img src={skill.icon} alt={skill.name} class="w-12 h-12 mb-2" />
                <span class="text-xs font-medium text-dark-slate dark:text-white-soft">{skill.name}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- DESKTOP: infinite scroll -->
      <div class="overflow-hidden hidden sm:block">
        <div class="flex animate-scroll-left">
          {#each loopedSkills as skill}
            <div class="flex-shrink-0 flex flex-col items-center p-6 mx-4 min-w-[140px] transform transition-all duration-500 hover:-translate-y-2 hover:scale-110">
              <img src={skill.icon} alt={skill.name} class="w-16 h-16 mb-3" />
              <span class="text-base font-medium text-dark-slate dark:text-white-soft">{skill.name}</span>
            </div>
          {/each}
        </div>
      </div>
    {/if}
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

  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }

  .animate-scroll-left {
    animation: scroll-left 10s linear infinite;
  }

  .animate-scroll-right {
    animation: scroll-right 10s linear infinite;
  }
</style>
