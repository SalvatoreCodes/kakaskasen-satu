import React from "react";
import "./styles/general.css";
import LogoTomohon from "./assets/logo tomohon.webp";
import Galean from "./assets/galean.jpg";

function App() {
  return (
    <div className="app">
      <div className="hero">
        <h1>
          WELCOME <br></br>TO <br></br> KAKASKASEN <br></br> SATU
        </h1>
        <button>
          <a href="#pelayanan-umum">Pelayanan Umum</a>
        </button>
      </div>
      <div className="sejarah">
        <header>
          <img src={LogoTomohon} alt="logo tomohon" />
          <h1>Kelurahan Kakaskasen Satu</h1>
          <img src={LogoTomohon} alt="logo tomohon" />
        </header>
        <div className="information">
          <h3>
            Kelurahan Kakaskasen Satu merupakan salah satu kelurahan yang berada
            di kecamatan Tomohon Utara, Kota Tomohon, Provinsi Suwasei Utara,
            Indonesia. Sejarah perkembangan penduduk Kakaskasen ke arah utara
            (kini Kakaskasen Satu dan Dua) terjadi pada tahun 1985. Seiring
            dengan perkembangan penduduk serta masuknya Pemerintah Belanda, maka
            Kakaskasen menjadi Distrik, dan menjadi kelurahan kakaskasen satu
            pada tahun 2003 dengan 10 Lingkungan.
          </h3>
        </div>
      </div>
      <div className="pelayanan-umum-container" id="pelayanan-umum">
        <h1 className="pelayanan-umum-title">Pelayanan Umum</h1>
        <div className="pelayanan-umum">
          <div className="layanan gray">
            <h1>KTP</h1>
            <ul>
              <li>FC Kartu Keluarga</li>
              <li>Pas Foto Ukuran 2x3 (2 Lembar)</li>
              <li>Tahun Lahir Ganjil Latar Merah</li>
              <li>Tahun Lahir Genap Latar Biru</li>
              <li>Mengisi Formulir</li>
            </ul>
          </div>
          <div className="layanan gray">
            <h1>Kartu Keluarga</h1>
            <ul>
              <li>FC Kutipan Akte Perkawinan</li>
              <li>Fc Kutipan Akte Kelahiran Anak</li>
              <li>Mengisi Formulir</li>
            </ul>
          </div>
          <div className="layanan white">
            <h1>Akte Kematian</h1>
            <ul>
              <li>Asli Kartu Keluarga</li>
              <li>Keterangan Kematian Dari Rumah Sakit</li>
              <li>Mengisi Formulir</li>
            </ul>
          </div>
          <div className="layanan white">
            <h1>Akte Kelahiran</h1>
            <ul>
              <li>Asli Kartu Keluarga</li>
              <li>Keterangan Kelahrian Dari Rumah Sakit/Puskesmas</li>
              <li>FC Kutipan Akte Perkawinan</li>
              <li>KTP Suami Istri</li>
            </ul>
          </div>
          <div className="layanan gray">
            <h1>Perkawinan</h1>
            <ul>
              <li>Pas Foto Ganden 5 Lembar</li>
              <li>FC KTP Calon Suami Istri 2 Rangkap</li>
              <li>FC Kartu Keluarga</li>
              <li>FC Kutipan Akte Kelahiran</li>
              <li>
                FC Kutipan Akte Perkawinan Orangtua (bagi yang beragama nasrani)
              </li>
              <li>FC Surat Baptisan</li>
              <li>FC Surat SIDI</li>
              <li>Keterangan Imunisasi Calon Pengantin Dari Puskesmas</li>
              <li>
                Asli Dan FC Kutipan Akte Perceraian (bagi yang pernah menikah)
              </li>
            </ul>
          </div>
          <div className="layanan gray">
            <h1>Pindah</h1>
            <ul>
              <li>Asli Kartu Keluarga</li>
              <li>Asli KTP</li>
              <li>Mengisi Formulir Keterangan Pindah Datang</li>
            </ul>
          </div>
          <div className="layanan white">
            <h1>Datang</h1>
            <ul>
              <li>Keterangan Pindah Datang dari Catatan Sipil Daerah Asal</li>
            </ul>
          </div>
          <div className="layanan white">
            <h1>Keterangan</h1>
            <ul>
              <li>Domisili</li>
              <li>Penduduk</li>
              <li>Kelahiran</li>
              <li>Kematian</li>
              <li>Memiliki Usaha</li>
              <li>Kelakuan Baik (SKCK)</li>
              <li>Belum Pernah Kawin</li>
              <li>Pernah Kawin</li>
              <li>Ahli Waris</li>
              <li>Hilang</li>
              <li>Kurang Mampu (Untuk Beasiswa Susunan Keluarga)</li>
              <li>Lain-lain</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
