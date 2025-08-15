<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Blog | Rahmat Mulia</title>
</svelte:head>

<Navbar />
<main class="py-20">
  <div class="container mx-auto px-4 lg:px-8 mt-20">
    <h1 class="text-5xl font-poppins font-bold mb-4">Blog</h1>
    <p class="text-lg text-gray-700 mb-12">
      Kumpulan artikel, tips, dan insight seputar dunia teknologi.
    </p>

    <div class="prose dark:prose-invert max-w-none">
      <div class="mb-12">
        <h2 class="text-3xl font-poppins font-semibold mb-2">Membangun Portofolio dengan SvelteKit dan Tailwind</h2>
        <p class="text-sm text-gray-500">Oleh Rahmat Mulia | 15 Agustus 2025</p>
        <p>
          Portofolio adalah etalase digital yang esensial bagi setiap profesional IT. Membangunnya dengan alat modern seperti SvelteKit dan Tailwind CSS tidak hanya menghasilkan performa yang cepat, tetapi juga kode yang bersih dan mudah dikelola. Artikel ini akan membahas langkah-langkah dasar untuk memulai proyek, dari instalasi hingga kustomisasi.
        </p>
        <a href="/blog/post-1" class="text-soft-blue font-medium hover:underline">Baca Selengkapnya &rarr;</a>
      </div>

      <div class="mb-12">
        <h2 class="text-3xl font-poppins font-semibold mb-2">Memahami Dasar-Dasar Machine Learning</h2>
        <p class="text-sm text-gray-500">Oleh Rahmat Mulia | 10 Agustus 2025</p>
        <p>
          Machine Learning (ML) adalah salah satu cabang AI yang paling menarik. Dengan ML, kita dapat melatih komputer untuk belajar dari data dan membuat prediksi tanpa diprogram secara eksplisit. Di sini, kita akan mengupas tuntas konsep-konsep inti, jenis-jenis model, dan contoh aplikasinya di dunia nyata.
        </p>
        <a href="/blog/post-2" class="text-soft-blue font-medium hover:underline">Baca Selengkapnya &rarr;</a>
      </div>
    </div>
  </div>
</main>
<Footer />