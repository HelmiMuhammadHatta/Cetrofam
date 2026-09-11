import React from 'react';
import ReactPDF, { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import fs from 'fs';
import path from 'path';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#FAF7EF',
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#1B2A21',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#C9A227',
    paddingBottom: 15,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: '#14532D',
  },
  subLogoText: {
    fontSize: 9,
    color: '#2F7A45',
    marginTop: 2,
  },
  badge: {
    backgroundColor: '#14532D',
    color: '#FAF7EF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 2,
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    color: '#14532D',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    color: '#2F7A45',
    marginBottom: 20,
    lineHeight: 1.4,
  },
  section: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderLeftWidth: 3,
    borderLeftColor: '#C9A227',
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: '#14532D',
    marginBottom: 8,
  },
  text: {
    fontSize: 10,
    color: '#1B2A21',
    lineHeight: 1.5,
    marginBottom: 6,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 15,
  },
  card: {
    width: '48%',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#E5E0D8',
  },
  cardTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#14532D',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 9,
    color: '#4A5568',
    lineHeight: 1.4,
  },
  table: {
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#E5E0D8',
    borderRadius: 3,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#14532D',
    padding: 8,
  },
  tableHeaderCell: {
    color: '#FAF7EF',
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
  },
  tableRow: {
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E0D8',
  },
  tableCell: {
    fontSize: 9,
    color: '#1B2A21',
  },
  footer: {
    position: 'absolute',
    bottom: 25,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#E5E0D8',
    paddingTop: 8,
    fontSize: 8,
    color: '#718096',
  }
});

const CompanyProfileDocument = () => (
  React.createElement(Document, {},
    React.createElement(Page, { size: 'A4', style: styles.page },
      React.createElement(View, { style: styles.header },
        React.createElement(View, {},
          React.createElement(Text, { style: styles.logoText }, "CETROFARM"),
          React.createElement(Text, { style: styles.subLogoText }, "PT. Cetro Tama Indonesia — Ekosistem Agrikultur Terintegrasi")
        ),
        React.createElement(Text, { style: styles.badge }, "COMPANY PROFILE 2026")
      ),
      React.createElement(Text, { style: styles.title }, "Membangun Ketahanan Pangan Indonesia"),
      React.createElement(Text, { style: styles.subtitle }, "Integrator Rantai Pasok Pangan Terpusat Pada Kesejahteraan Petani Binaan & Kepastian Pasokan B2B Offtaker"),
      
      React.createElement(View, { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, "Ringkasan Eksekutif"),
        React.createElement(Text, { style: styles.text }, "Cetrofarm (PT. Cetro Tama Indonesia) berdiri sejak 2018 sebagai business aggregator agrikultur. Kami menghubungkan 210+ petani binaan di Jawa Tengah langsung ke pasar B2B (Supermarket, Horeca, dan Distributor Regional) dengan efisiensi post-harvest loss < 5%."),
        React.createElement(Text, { style: styles.text }, "NIB: 9120212080575 | Sertifikasi Organik SNI & NKV Tingkat II | Lahan Kelola: 340 Hektar")
      ),

      React.createElement(Text, { style: styles.sectionTitle }, "5 Lini Bisnis Utama"),
      React.createElement(View, { style: styles.grid },
        React.createElement(View, { style: styles.card },
          React.createElement(Text, { style: styles.cardTitle }, "1. Sayuran Segar"),
          React.createElement(Text, { style: styles.cardDesc }, "Sayuran daun organik & konvensional. Kapasitas: 120 Ton/Bulan (Berjalan).")
        ),
        React.createElement(View, { style: styles.card },
          React.createElement(Text, { style: styles.cardTitle }, "2. Sayuran Root & Buah"),
          React.createElement(Text, { style: styles.cardDesc }, "Sayuran tahan lama distribusi antarprovinsi. Kapasitas: 85 Ton/Bulan (Berjalan).")
        ),
        React.createElement(View, { style: styles.card },
          React.createElement(Text, { style: styles.cardTitle }, "3. Ubi Madu Premium"),
          React.createElement(Text, { style: styles.cardDesc }, "Ubi madu ekspor & ritel modern. Kapasitas: 40 Ton/Bulan (Berjalan).")
        ),
        React.createElement(View, { style: styles.card },
          React.createElement(Text, { style: styles.cardTitle }, "4. Protein Hewani (Ayam)"),
          React.createElement(Text, { style: styles.cardDesc }, "Ayam kampung sehat bebas residu antibiotik. Kapasitas: 1.200 Ekor/Siklus (Berjalan).")
        ),
        React.createElement(View, { style: styles.card },
          React.createElement(Text, { style: styles.cardTitle }, "5. Bahan Pokok Grosir"),
          React.createElement(Text, { style: styles.cardDesc }, "Beras organik & komoditas curah industri. Kapasitas: 20 Ton/Bulan (Uji Coba).")
        )
      ),

      React.createElement(View, { style: styles.footer },
        React.createElement(Text, {}, "PT. Cetro Tama Indonesia — Confidential Investor Brief"),
        React.createElement(Text, {}, "Halaman 1 dari 2")
      )
    ),

    React.createElement(Page, { size: 'A4', style: styles.page },
      React.createElement(View, { style: styles.header },
        React.createElement(View, {},
          React.createElement(Text, { style: styles.logoText }, "CETROFARM"),
          React.createElement(Text, { style: styles.subLogoText }, "Investor Metrics & Unit Economics (Q2 2026)")
        ),
        React.createElement(Text, { style: styles.badge }, "CONFIDENTIAL")
      ),

      React.createElement(Text, { style: styles.sectionTitle }, "Unit Economics per Siklus Panen"),
      React.createElement(View, { style: styles.table },
        React.createElement(View, { style: styles.tableHeader },
          React.createElement(Text, { style: [styles.tableHeaderCell, { width: '35%' }] }, "Komponen Metrik"),
          React.createElement(Text, { style: [styles.tableHeaderCell, { width: '25%' }] }, "Sayuran Organik"),
          React.createElement(Text, { style: [styles.tableHeaderCell, { width: '25%' }] }, "Protein Hewani"),
          React.createElement(Text, { style: [styles.tableHeaderCell, { width: '15%' }] }, "Target Margin")
        ),
        React.createElement(View, { style: styles.tableRow },
          React.createElement(Text, { style: [styles.tableCell, { width: '35%', fontFamily: 'Helvetica-Bold' }] }, "HPP / Sourcing"),
          React.createElement(Text, { style: [styles.tableCell, { width: '25%' }] }, "60%"),
          React.createElement(Text, { style: [styles.tableCell, { width: '25%' }] }, "72%"),
          React.createElement(Text, { style: [styles.tableCell, { width: '15%' }] }, "Fix HPP")
        ),
        React.createElement(View, { style: styles.tableRow },
          React.createElement(Text, { style: [styles.tableCell, { width: '35%', fontFamily: 'Helvetica-Bold' }] }, "Processing & Cold Chain"),
          React.createElement(Text, { style: [styles.tableCell, { width: '25%' }] }, "12%"),
          React.createElement(Text, { style: [styles.tableCell, { width: '25%' }] }, "10%"),
          React.createElement(Text, { style: [styles.tableCell, { width: '15%' }] }, "< 5% Loss")
        ),
        React.createElement(View, { style: styles.tableRow },
          React.createElement(Text, { style: [styles.tableCell, { width: '35%', fontFamily: 'Helvetica-Bold', color: '#14532D' }] }, "Gross Margin"),
          React.createElement(Text, { style: [styles.tableCell, { width: '25%', fontFamily: 'Helvetica-Bold' }] }, "28%"),
          React.createElement(Text, { style: [styles.tableCell, { width: '25%', fontFamily: 'Helvetica-Bold' }] }, "18%"),
          React.createElement(Text, { style: [styles.tableCell, { width: '15%', fontFamily: 'Helvetica-Bold' }] }, "25-30%")
        )
      ),

      React.createElement(View, { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, "Rencana Penggunaan Dana Investasi (Fund Allocation)"),
        React.createElement(Text, { style: styles.text }, "• 45% Capex Cold Storage: Pembangunan fasilitas gudang pendingin 200 ton di Semarang."),
        React.createElement(Text, { style: styles.text }, "• 30% Ekspansi Lahan: Onboarding 300+ petani binaan baru dan sewa lahan greenhouse."),
        React.createElement(Text, { style: styles.text }, "• 25% Tech & Working Capital: Upgrade ERP traceability & bridging payment B2B.")
      ),

      React.createElement(View, { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, "Kontak & Manajemen Resmi"),
        React.createElement(Text, { style: styles.text }, "• HQ: Jl. Setro Raya, Desa Gondoriyo, Kec. Bergas, Kab. Semarang, Jawa Tengah"),
        React.createElement(Text, { style: styles.text }, "• Website: https://cetrofarm.vercel.app | Email: customerrelation@cetrofarm.com"),
        React.createElement(Text, { style: styles.text }, "• WhatsApp Relations: +62 85 8603 00 111 | Telepon: 024 6933 5138")
      ),

      React.createElement(View, { style: styles.footer },
        React.createElement(Text, {}, "PT. Cetro Tama Indonesia — Official Company Profile"),
        React.createElement(Text, {}, "Halaman 2 dari 2")
      )
    )
  )
);

async function generatePDF() {
  const destDir = path.join(process.cwd(), 'public/docs');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const destPath = path.join(destDir, 'CetroFarm-Company-Profile.pdf');
  
  await ReactPDF.render(React.createElement(CompanyProfileDocument), destPath);
  console.log(`Generated PDF at ${destPath} - ${fs.statSync(destPath).size} bytes`);
}

generatePDF().catch(console.error);
