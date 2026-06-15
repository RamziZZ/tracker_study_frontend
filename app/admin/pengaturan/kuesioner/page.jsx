import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Import custom form components
import TextInputCard from '@/components/admin/pengaturan/manage_kuisioner/TextInputCard';
import NumberInputCard from '@/components/admin/pengaturan/manage_kuisioner/NumberInputCard';
import RadioInputCard from '@/components/admin/pengaturan/manage_kuisioner/RadioInputCard';
import DatePickerCard from '@/components/admin/pengaturan/manage_kuisioner/DatePickerCard';
import CheckboxInputCard from '@/components/admin/pengaturan/manage_kuisioner/CheckboxInputCard';

export default function KuisionerPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-0 px-2 text-slate-900">
      <div className="w-full mx-auto space-y-8">
        
        {/* TOP SECTION: Status & Deadline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Status Kuesioner */}
          <Card className="md:col-span-1 border-rose-100 bg-rose-50/50">
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-rose-900">Status Kuisioner:</h3>
                  <p className="text-xl font-bold text-rose-600">Tidak Aktif</p>
                </div>
                <Switch id="status-kuisioner" />
              </div>
              <p className="text-xs text-rose-700 leading-relaxed">
                Deadline kuesioner telah terpenuhi atau dinonaktifkan. Jika Anda ingin memperpanjang, silakan ubah tanggal pengisian dan simpan kembali.
              </p>
            </CardContent>
          </Card>

          {/* Deadline Kuesioner */}
          <Card className="md:col-span-2 border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2">
                📅 Deadline Kuisioner
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="start-date" className="text-xs text-slate-600">Awal</Label>
                  <Input type="date" id="start-date" defaultValue="2018-02-23" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="end-date" className="text-xs text-slate-600">Akhir</Label>
                  <Input type="date" id="end-date" defaultValue="2027-08-07" />
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-slate-500">Akan berakhir dalam beberapa tahun lagi</span>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Simpan Deadline</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MAIN SECTION: Daftar Pertanyaan */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <CardTitle className="text-xl font-bold text-slate-800">Daftar Pertanyaan Kuisioner</CardTitle>
              <CardDescription>Kelola seluruh subset pertanyaan pelacakan alumni</CardDescription>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Tambah Pertanyaan</Button>
          </CardHeader>
          <CardContent className="pt-6 space-y-10">
            
            {/* KATEGORI: IDENTITAS ALUMNI */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-700 border-b pb-1 border-slate-200">Identitas Alumni</h2>
              <TextInputCard label="NIM" placeholder="Type: input text" />
              <NumberInputCard label="Tahun Lulus" placeholder="Type: input data (Tahun)" />
              <TextInputCard label="Nama Alumni" placeholder="Type: input text" />
              <TextInputCard label="Email" placeholder="Type: input text" />
              <TextInputCard label="No Hp" placeholder="Type: input data" />
            </div>

            {/* KATEGORI: STATUS */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-1 border-slate-200">
                <h2 className="text-lg font-bold text-slate-700">Status</h2>
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">Tambah Kategori Status</Button>
              </div>
              <RadioInputCard 
                label="Jelaskan status Anda saat ini?" 
                options={["Bekerja", "Wiraswasta", "Studi Lanjut", "Pengangguran"]} 
              />
            </div>

            {/* KATEGORI: BEKERJA */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-700 border-b pb-1 border-slate-200">Bekerja</h2>
              <NumberInputCard label="Dalam berapa bulan Anda mendapatkan pekerjaan pertama? (Jika Memilih Bekerja)" placeholder="Type: input number (Scount Bulan)" />
              <NumberInputCard label="Berapa rata-rata pendapatan anda per bulan? (Jika memili Bekerja)" placeholder="Type: input number (Rupiah)" />
              <RadioInputCard 
                label="Dimana lokasi anda bekerja?" 
                options={["Pilihan Wilayah Provinsi", "Pilihan Wilayah Kabupaten"]} 
              />
              <RadioInputCard 
                label="Apa jenis perusahaan/instansi tempat anda bekerja?" 
                options={["Instansi pemerintah", "BUMN/BUMD", "Institusi/Organisasi Multilateral", "Organisasi non-profit/Lembaga Swadaya Masyarakat", "Perusahaan swasta", "Wiraswasta/perusahaan sendiri"]} 
                hasOther={true}
              />
              <TextInputCard label="Posisi anda di perusahaan atau Instansi?" placeholder="Type: input text" />
              <TextInputCard label="Apa nama perusahaan/instansi tempat Anda bekerja?" placeholder="Type: input text" />
            </div>

            {/* KATEGORI: WIRASWASTA */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-700 border-b pb-1 border-slate-200">Wiraswasta</h2>
              <NumberInputCard label="Dalam Berapa bulan setelah lulus anda memulai wiraswasta?" placeholder="Type: input number (Scount Bulan)" />
              <NumberInputCard label="Berapa rata-rata Pendapatan per Bulan?" placeholder="Type: input number (Rupiah)" />
              <RadioInputCard 
                label="Dimana lokasi anda bekerja?" 
                options={["Pilihan Wilayah Provinsi", "Pilihan Wilayah Kabupaten"]} 
              />
              <RadioInputCard 
                label="Apa jenis perusahaan/instansi tempat anda bekerja?" 
                options={["Instansi pemerintah", "BUMN/BUMD", "Institusi/Organisasi Multilateral", "Organisasi non-profit/Lembaga Swadaya Masyarakat", "Perusahaan swasta", "Wiraswasta/perusahaan sendiri"]} 
                hasOther={true}
              />
              <RadioInputCard 
                label="Bila berwiraswasta, apa posisi/jabatan anda saat ini?" 
                options={["Founder / Pemilik / Owner", "Co-Founder / Mitra", "CEO / Direktur Utama", "Manager / Pengelola", "Freelancer / Tenaga Ahli"]} 
                hasOther={true}
              />
              <TextInputCard label="Apa nama perusahaan/instansi tempat Anda bekerja?" placeholder="Type: input text" />
            </div>

            {/* KATEGORI: STUDI LANJUT */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-700 border-b pb-1 border-slate-200">Studi Lanjut</h2>
              <RadioInputCard 
                label="Sumber biaya studi lanjut:" 
                options={["Biaya Sendiri / Keluarga", "Beasiswa Pemerintah Indonesia (LPDP)", "Beasiswa Kementerian (Kemendikbud, Kemenag, Kemenkes)", "Beasiswa Pemerintah Asing", "Beasiswa Perusahaan / Swasta", "Beasiswa Perguruan Tinggi"]} 
                hasOther={true}
              />
              <TextInputCard label="Perguruan Tinggi studi lanjut?" placeholder="Type: Pilihan Tunggal dengan input teks pilihan lainnya" />
              <DatePickerCard label="Tanggal Masuk" />
              <TextInputCard label="Program Studi?" placeholder="Type: Pilihan Tunggal dengan input teks pilihan lainnya" />
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}