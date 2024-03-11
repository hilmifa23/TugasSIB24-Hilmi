document.write('<h2>Variabel</h2>')
var nama = "M. Hilmi Fajrul Alam"
let kampus = "Universitas Trunojoyo Madura"
const prodi = "Teknik Informatika"

document.write(nama)
document.write('<br>')
document.write(kampus)
document.write('<br>')
document.write(prodi)

document.write('<h2>Tipe Data Number</h2>')
let angka = 18
let desimal = 9.5

document.write(angka)
document.write('<br>')
document.write('tipe data ',angka,' : ',typeof(angka))
document.write('<br>')
document.write(desimal)
document.write('<br>')
document.write('tipe data ',desimal,' : ',typeof(desimal))

document.write('<h2>Tipe Data String</h2>')
let text = 'javascript'

document.write(text)
document.write('<br>')
document.write('tipe data ',text,' : ',typeof(text))

document.write('<h2>Tipe Data Boolean</h2>')

let perbandingan1 = 8 > 2
let perbandingan2 = 8 < 2

document.write('hasil dari 8 > 2 adalah ', perbandingan1)
document.write('<br>')
document.write('hasil dari 8 < 2 adalah ', perbandingan2)

document.write('<h2>Tipe Data Object</h2>')

let mahasiswa = {
    nama: 'Rama',
    nim : 123456789,
    umur : 20,
    alamat : 'Surabaya'
}

document.write(`nama saya ${mahasiswa.nama} nim saya ${mahasiswa.nim} umur saya ${mahasiswa.umur} dan alamat saya di ${mahasiswa.alamat}`)
document.write('<br>')
document.write(mahasiswa)

document.write('<h2>Operator Aritmatika</h2>')

let a = 15
let b = 5

document.write('hasil penjumlahan dari ',a,'+',b,' = ',a+b)
document.write('<br>')
document.write('hasil pengurangan dari ',a,'-',b,' = ',a-b)
document.write('<br>')
document.write('hasil perkalian dari ',a,'x',b,' = ',a*b)
document.write('<br>')
document.write('hasil pembagian dari ',a,'/',b,' = ',a/b)
document.write('<br>')

// Operator Comparison
document.write('<h2>Operator Comparison</h2>')

document.write('hasil dari ',a,' == ', b, ' adalah ', a == b)
document.write('<br>')
document.write('hasil dari ',a, ' < ', b, ' adalah ', a < b)
document.write('<br>')
document.write('hasil dari ',a, ' > ', b, ' adalah ', a > b)
document.write('<br>')
document.write('hasil dari ',a, ' != ', b, ' adalah ', a != b)

// Operator Logika
document.write('<h2>Operator Logika</h2>')

document.write('hasil dari ',a, ' && ', b, ' adalah ', a && b)
document.write('<br>')
document.write('hasil dari ',a, ' || ', b, ' adalah ', a || b)
document.write('<br>')
document.write('hasil dari ','!',b, ' adalah ', !b)

// Operator Ternary
document.write('<h2>Operator Ternary</h2>')

document.write(a == b ? 'sama' : 'berbeda')

// Percabangan If & Else
// document.write('<h2>Percabangan if & else</h2>')

let pesan = confirm('apakah kamu ada waktu luang?')
if (pesan) {
    alert('ada')
}else{
    alert('tidak')
}

// perulangan 
document.write('<h2>Perulangan</h2>')
for (let i = 1; i < 6; i++){
    document.write('Hai')
    document.write('<br>')
}