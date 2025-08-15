<svelte:head>
  <title>Memahami Dasar-Dasar Machine Learning | Blog</title>
</svelte:head>

<main class="py-20 mt-16">
  <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
    <div class="prose dark:prose-invert max-w-none">
      <h1 class="text-5xl font-poppins font-bold">Memahami Dasar-Dasar Machine Learning</h1>
      <p class="text-sm text-gray-500">Oleh Rahmat Mulia | 10 Agustus 2025</p>
      
      <img 
        src="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1621&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Ilustrasi Machine Learning" 
        class="w-full rounded-lg my-8 shadow-lg bg-white dark:bg-gray-800 p-2"
      />
      
      <p>
        <strong>Machine Learning (ML)</strong> adalah salah satu cabang <em>Artificial Intelligence</em> (AI) yang paling menarik dan berkembang pesat. 
        Dengan ML, kita dapat melatih komputer untuk belajar dari data dan membuat prediksi tanpa diprogram secara eksplisit.
      </p>

      <h2>Apa Itu Machine Learning?</h2>
      <p>
        Sederhananya, ML adalah ilmu dan seni membuat komputer belajar. 
        Alih-alih memberikan instruksi langkah demi langkah, kita memberikan algoritma sejumlah besar data, dan dari data tersebut, 
        algoritma belajar untuk mengenali pola dan membuat keputusan.
      </p>

      <h2>Jenis-jenis Pembelajaran</h2>
      <p>Ada tiga jenis utama dalam Machine Learning:</p>
      <ol>
        <li>
          <strong>Supervised Learning:</strong> Algoritma belajar dari data yang sudah diberi label. 
          Contohnya adalah mendeteksi apakah email adalah spam atau bukan.
        </li>
        <li>
          <strong>Unsupervised Learning:</strong> Algoritma belajar dari data tanpa label. 
          Tujuannya adalah menemukan struktur atau pola tersembunyi dalam data.
        </li>
        <li>
          <strong>Reinforcement Learning:</strong> Algoritma belajar melalui proses coba-coba, 
          menerima <em>reward</em> atau <em>penalty</em> berdasarkan tindakan yang diambil, 
          mirip dengan cara manusia belajar.
        </li>
      </ol>

      <h3>Contoh Kode Sederhana (Python)</h3>
      <pre><code>{`import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Contoh dataset
data = {'tahun': [2010, 2012, 2014, 2016, 2018],
        'harga': [100, 150, 200, 250, 300]}
df = pd.DataFrame(data)

# Melatih model
model = LinearRegression()
model.fit(df[['tahun']], df['harga'])

# Membuat prediksi
prediksi = model.predict([[2020]])
print(f"Prediksi harga tahun 2020: {prediksi[0]}")
`}</code></pre>

      <p>
        Memahami dasar-dasar ini adalah langkah pertama yang krusial untuk terjun ke dunia AI dan mengembangkan solusi berbasis data.
      </p>
    </div>
  </div>
</main>
