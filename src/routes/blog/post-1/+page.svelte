<svelte:head>
  <title>Membangun Portofolio dengan SvelteKit dan Tailwind | Blog</title>
</svelte:head>

<main class="py-20 mt-16">
  <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
    <div class="prose dark:prose-invert max-w-none">
      
      <!-- Judul -->
      <h1 class="text-5xl font-poppins font-bold">
        Membangun Portofolio dengan SvelteKit dan Tailwind
      </h1>
      <p class="text-sm text-gray-500">
        Oleh Rahmat Mulia | 15 Agustus 2025
      </p>
      
      <!-- Gambar Ilustrasi -->
      <img
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Ilustrasi SvelteKit dan Tailwind"
        class="w-full rounded-lg my-8 shadow-lg p-4 bg-transparent"
      />
      
      <!-- Paragraf Pembuka -->
      <p>
        Portofolio adalah etalase digital yang esensial bagi setiap profesional IT. 
        Membangunnya dengan alat modern seperti 
        <span class="font-semibold text-soft-blue">SvelteKit</span> dan 
        <span class="font-semibold text-soft-blue">Tailwind CSS</span> 
        tidak hanya menghasilkan performa yang cepat, tetapi juga kode yang bersih dan mudah dikelola.
      </p>

      <!-- Section SvelteKit -->
      <h2>Mengapa Memilih SvelteKit?</h2>
      <p>
        SvelteKit adalah kerangka kerja web yang unik. 
        Berbeda dengan React atau Vue yang menggunakan virtual DOM, 
        Svelte adalah sebuah <em>compiler</em>. 
        Ini berarti kode Svelte Anda dikompilasi menjadi JavaScript murni yang ringan dan efisien. 
        Hasilnya, aplikasi Anda akan memiliki waktu <em>loading</em> yang lebih cepat dan pengalaman pengguna yang lebih mulus.
      </p>

      <!-- Section Tailwind -->
      <h2>Memanfaatkan Tailwind CSS</h2>
      <p>
        Dengan Tailwind CSS, Anda bisa membuat desain yang indah tanpa harus meninggalkan file HTML. 
        Pendekatan <em>utility-first</em> memungkinkan Anda membangun antarmuka kustom dengan cepat, 
        langsung dari kelas-kelas CSS yang sudah ada. 
        Ini mempercepat proses desain dan memastikan konsistensi di seluruh proyek.
      </p>
      
      <!-- Langkah-langkah -->
      <h3>Langkah-langkah untuk Memulai:</h3>
      <ol>
        <li>Instalasi proyek menggunakan <code>npm create svelte@latest</code>.</li>
        <li>Konfigurasi <code>tailwind.config.cjs</code> dengan warna dan font kustom.</li>
        <li>Impor <code>app.css</code> ke dalam <code>+layout.svelte</code>.</li>
        <li>Buat komponen modular untuk setiap bagian halaman.</li>
        <li>Susun semua komponen di <code>+page.svelte</code>.</li>
      </ol>

      <!-- Contoh Kode -->
      <pre><code>&lt;!-- Contoh penggunaan kelas Tailwind --&gt;
&lt;h1 class="text-3xl font-bold text-soft-blue"&gt;
  Halo, Portofolio!
&lt;/h1&gt;
</code></pre>

      <!-- Penutup -->
      <p>
        Dengan mengikuti prinsip-prinsip ini, Anda tidak hanya membuat portofolio yang fungsional, 
        tetapi juga menampilkan kemampuan teknis dalam menggunakan teknologi web modern.
      </p>
    </div>
  </div>
</main>
