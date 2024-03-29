document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const namaProdukInput = document.getElementById('nama_produk');
    const gambarProdukInput = document.getElementById('gambar_produk');
    const deskripsiProdukInput = document.getElementById('deskripsi_produk');
    const hargaProdukInput = document.getElementById('harga_produk');

    const data = {
      nama_produk: namaProdukInput.value,
      gambar_produk: gambarProdukInput.value,
      deskripsi_produk: deskripsiProdukInput.value,
      harga_produk: hargaProdukInput.value
    };

    try {
      const response = await fetch('https://crudcrud.com/api/e9eb48f332bd49d99c2cd52e7464767a/productapi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Produk Gagal Ditambahkan');
      }

      alert('Produk Berhasil Ditambahkan');
      form.reset();
      window.location.href = 'productapi.html';
    } catch (error) {
      console.error('Error:', error);
      alert('Silahkan Coba Lagi');
    }
  });
});
