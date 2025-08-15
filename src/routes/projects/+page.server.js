// src/routes/projects/+page.server.js

// Fungsi ini akan dijalankan di sisi server, memastikan data selalu tersedia.
export async function load() {
  const allProjects = [
    {
      title: 'Proyek E-Commerce',
      description: 'Sebuah platform toko online modern dengan fitur keranjang belanja dan otentikasi pengguna.',
      image: 'https://via.placeholder.com/600x400?text=Project+1',
      tech: ['Svelte', 'Tailwind CSS', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Aplikasi Manajemen Tugas',
      description: 'Aplikasi web untuk membantu pengguna mengelola daftar tugas harian secara efisien.',
      image: 'https://via.placeholder.com/600x400?text=Project+2',
      tech: ['React', 'TypeScript', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Blog Pribadi',
      description: 'Sistem blog dengan editor Markdown, kategori, dan fungsionalitas pencarian.',
      image: 'https://via.placeholder.com/600x400?text=Project+3',
      tech: ['Next.js', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Sistem Reservasi Hotel',
      description: 'Aplikasi untuk memesan kamar hotel secara online dengan sistem pembayaran terintegrasi.',
      image: 'https://via.placeholder.com/600x400?text=Project+4',
      tech: ['PHP', 'Laravel', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Dashboard Analitik',
      description: 'Panel admin untuk memvisualisasikan data penjualan dan performa bisnis secara real-time.',
      image: 'https://via.placeholder.com/600x400?text=Project+5',
      tech: ['Vue.js', 'Chart.js', 'Python'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Game Edukasi Interaktif',
      description: 'Game sederhana berbasis web untuk mengajarkan konsep dasar pemrograman pada anak-anak.',
      image: 'https://via.placeholder.com/600x400?text=Project+6',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return {
    allProjects,
  };
}