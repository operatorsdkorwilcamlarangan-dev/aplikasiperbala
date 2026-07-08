import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

// Mandated users table for Firebase Auth
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(), // Firebase Auth UID
  email: text('email').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Schools table
export const schools = pgTable('schools', {
  npsn: text('npsn').primaryKey(),
  nama: text('nama').notNull(),
  kecamatan: text('kecamatan').notNull(),
  jumlah_siswa: integer('jumlah_siswa').notNull(),
  pagu_per_siswa: integer('pagu_per_siswa').notNull(),
  pagu_t1: integer('pagu_t1').notNull(),
  pagu_t2: integer('pagu_t2').notNull(),
  status: text('status').notNull(),
});

// Operators table
export const operators = pgTable('operators', {
  username: text('username').primaryKey(),
  nama: text('nama').notNull(),
  password: text('password'),
  role: text('role').notNull(), // 'Admin' | 'Anggota'
  instansi: text('instansi').notNull(),
  status: text('status').notNull(),
});

// Monthly Pagu table
export const monthlyPagu = pgTable('monthly_pagu', {
  id: serial('id').primaryKey(),
  sekolah: text('sekolah').notNull(),
  bulan: text('bulan').notNull(),
  pagu: integer('pagu').notNull(),
});

// RAB list table
export const rabList = pgTable('rab_list', {
  id: text('id').primaryKey(),
  nama: text('nama').notNull(),
  sekolah: text('sekolah').notNull(),
  kategori: text('kategori').notNull(), // 'BUKU' | 'ALAT' | 'SIPLAH'
  alokasi: integer('alokasi').notNull(),
});

// Transactions table
export const transactions = pgTable('transactions', {
  id: text('id').primaryKey(),
  rab_id: text('rab_id').notNull(),
  nama_barang: text('nama_barang').notNull(),
  sekolah: text('sekolah').notNull(),
  npsn: text('npsn').notNull(),
  kategori: text('kategori').notNull(), // 'BUKU' | 'ALAT' | 'SIPLAH'
  jumlah: text('jumlah').notNull(),
  total_biaya: integer('total_biaya').notNull(),
  tanggal: text('tanggal').notNull(),
  status: text('status').notNull(), // 'Disetujui' | 'Pending' | 'Ditolak'
});

// Tarik Tunai table
export const tarikTunaiList = pgTable('tarik_tunai_list', {
  id: text('id').primaryKey(),
  sekolah: text('sekolah').notNull(),
  bulan: text('bulan').notNull(),
  pagu_bulanan: integer('pagu_bulanan').notNull(),
  nilai: integer('nilai').notNull(),
  status: text('status').notNull(), // 'Pending' | 'Selesai' | 'Ditolak'
  verifikator: text('verifikator').notNull(),
});

// System Config table (single record)
export const systemConfig = pgTable('system_config', {
  id: integer('id').primaryKey(),
  org_name: text('org_name').notNull(),
  logo_preset: text('logo_preset').notNull(),
  logo_url: text('logo_url').notNull(),
  deadline_t1: text('deadline_t1').notNull(),
  deadline_t2: text('deadline_t2').notNull(),
});
