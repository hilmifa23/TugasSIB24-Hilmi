document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('https://crudcrud.com/api/e9eb48f332bd49d99c2cd52e7464767a/productapi');
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Produk Gagal Ditampilkan');
    }

    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '';

    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      const img = document.createElement('img');
      img.src = product.gambar_produk;
      img.alt = product.nama_produk;

      const title = document.createElement('h3');
      title.textContent = product.nama_produk;

      const description = document.createElement('p');
      description.textContent = product.deskripsi_produk;

      const price = document.createElement('div');
      price.textContent = 'Rp' + product.harga_produk;

      const button = document.createElement('button');
      button.textContent = 'Pesan';

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(description)
      card.appendChild(price);
      card.appendChild(button);

      productContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error:', error);
    alert('Mohon Coba Lagi');
  }
});
