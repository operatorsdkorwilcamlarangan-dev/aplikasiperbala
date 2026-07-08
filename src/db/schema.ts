import { mysqlTable, int, text, varchar, timestamp } from 'drizzle-orm/mysql-core';

// Mandated users table for Firebase Auth
export const users = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),
  uid: varchar('uid', { length: 255 }).notNull().unique(), // Firebase Auth UID
  email: text('email').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Schools table
export const schools = mysqlTable('schools', {
  npsn: varchar('npsn', { length: 50 }).primaryKey(),
  nama: text('nama').notNull(),
  kecamatan: text('kecamatan').notNull(),
  jumlah_siswa: int('jumlah_siswa').notNull(),
  pagu_per_siswa: int('pagu_per_siswa').notNull(),
  pagu_t1: int('pagu_t1').notNull(),
  pagu_t2: int('pagu_t2').notNull(),
  status: text('status').notNull(),
});

// Operators table
export const operators = mysqlTable('operators', {
  username: varchar('username', { length: 191 }).primaryKey(),
  nama: text('nama').notNull(),
  password: text('password'),
  role: text('role').notNull(), // 'Admin' | 'Anggota'
  instansi: text('instansi').notNull(),
  status: text('status').notNull(),
});

// Monthly Pagu table
export const monthlyPagu = mysqlTable('monthly_pagu', {
  id: int('id').primaryKey().autoincrement(),
  sekolah: text('sekolah').notNull(),
  bulan: text('bulan').notNull(),
  pagu: int('pagu').notNull(),
});

// RAB list table
export const rabList = mysqlTable('rab_list', {
  id: varchar('id', { length: 50 }).primaryKey(),
  nama: text('nama').notNull(),
  sekolah: text('sekolah').notNull(),
  kategori: text('kategori').notNull(), // 'BUKU' | 'ALAT' | 'SIPLAH'
  alokasi: int('alokasi').notNull(),
});

// Transactions table
export const transactions = mysqlTable('transactions', {
  id: varchar('id', { length: 50 }).primaryKey(),
  rab_id: text('rab_id').notNull(),
  nama_barang: text('nama_barang').notNull(),
  sekolah: text('sekolah').notNull(),
  npsn: text('npsn').notNull(),
  kategori: text('kategori').notNull(), // 'BUKU' | 'ALAT' | 'SIPLAH'
  jumlah: text('jumlah').notNull(),
  total_biaya: int('total_biaya').notNull(),
  tanggal: text('tanggal').notNull(),
  status: text('status').notNull(), // 'Disetujui' | 'Pending' | 'Ditolak'
});

// Tarik Tunai table
export const tarikTunaiList = mysqlTable('tarik_tunai_list', {
  id: varchar('id', { length: 50 }).primaryKey(),
  sekolah: text('sekolah').notNull(),
  bulan: text('bulan').notNull(),
  pagu_bulanan: int('pagu_bulanan').notNull(),
  nilai: int('nilai').notNull(),
  status: text('status').notNull(), // 'Pending' | 'Selesai' | 'Ditolak'
  verifikator: text('verifikator').notNull(),
});

// System Config table (single record)
export const systemConfig = mysqlTable('system_config', {
  id: int('id').primaryKey(),
  org_name: text('org_name').notNull(),
  logo_preset: text('logo_preset').notNull(),
  logo_url: text('logo_url').notNull(),
  deadline_t1: text('deadline_t1').notNull(),
  deadline_t2: text('deadline_t2').notNull(),
});
