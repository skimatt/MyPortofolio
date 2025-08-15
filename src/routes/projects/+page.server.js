// src/routes/projects/+page.server.js

// Fungsi ini akan dijalankan di sisi server, memastikan data selalu tersedia.
export async function load() {
  const allProjects = [
    {
      title: 'Proyek E-Commerce',
      description: 'Sebuah platform toko online modern dengan fitur keranjang belanja dan otentikasi pengguna.',
      image: 'https://images.unsplash.com/photo-1572802419224-296b41ac05d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      tech: ['Svelte', 'Tailwind CSS', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Aplikasi Manajemen Tugas',
      description: 'Aplikasi web untuk membantu pengguna mengelola daftar tugas harian secara efisien.',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      tech: ['React', 'TypeScript', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Blog Pribadi',
      description: 'Sistem blog dengan editor Markdown, kategori, dan fungsionalitas pencarian.',
      image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      tech: ['Next.js', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Sistem Reservasi Hotel',
      description: 'Aplikasi untuk memesan kamar hotel secara online dengan sistem pembayaran terintegrasi.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a69003d1dae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      tech: ['PHP', 'Laravel', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Dashboard Analitik',
      description: 'Panel admin untuk memvisualisasikan data penjualan dan performa bisnis secara real-time.',
      image: 'https://images.unsplash.com/photo-1554475901-45ef2d43e548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      tech: ['Vue.js', 'Chart.js', 'Python'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Game Edukasi Interaktif',
      description: 'Game sederhana berbasis web untuk mengajarkan konsep dasar pemrograman pada anak-anak.',
      image: 'https://images.unsplash.com/photo-1555076912-49a0c3642c70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return {
    allProjects,
  };
}