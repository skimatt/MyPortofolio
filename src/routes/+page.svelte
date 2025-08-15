<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Services from '$lib/components/Services.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import Blog from '$lib/components/Blog.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Portofolio | Rahmat Mulia</title>
  <meta name="description" content="Portofolio pribadi Rahmat Mulia, seorang Profesional IT di bidang AI dan pengembangan perangkat lunak." />
</svelte:head>

<Navbar />
<main>
  <div id="hero"><Hero /></div>
  <div id="about"><About /></div>
  <div id="skills"><Skills /></div>
  <div id="projects"><Projects /></div>
  <div id="services"><Services /></div>
  <div id="testimonials"><Testimonials /></div>
  <div id="blog"><Blog /></div>
  <div id="contact"><Contact /></div>
</main>
<Footer />