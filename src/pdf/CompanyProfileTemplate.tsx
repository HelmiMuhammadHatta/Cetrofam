import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register standard fonts or use default
// Font.register({ family: 'Helvetica', src: '...' });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FAF8F5', // cream
    padding: 40,
    fontFamily: 'Helvetica',
  },
  coverPage: {
    flexDirection: 'column',
    backgroundColor: '#1C3F35', // forest
    padding: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    color: '#FAF8F5',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: '#D4B872', // wheat
    textAlign: 'center',
    marginBottom: 60,
  },
  footerText: {
    position: 'absolute',
    bottom: 40,
    color: '#FAF8F5',
    fontSize: 12,
    opacity: 0.7,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#1C3F35',
    marginBottom: 20,
    fontWeight: 'bold',
    borderBottom: '2px solid #D4B872',
    paddingBottom: 10,
  },
  text: {
    fontSize: 12,
    color: '#333333',
    lineHeight: 1.6,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  col: {
    flex: 1,
    paddingRight: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 4,
    border: '1px solid #E5E5E5',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1C3F35',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 10,
    color: '#666666',
  },
  metricBox: {
    flex: 1,
    backgroundColor: '#1C3F35',
    padding: 20,
    marginRight: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 24,
    color: '#D4B872',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  metricLabel: {
    fontSize: 10,
    color: '#FAF8F5',
    textTransform: 'uppercase',
  },
  legalText: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 5,
  }
});

export const CompanyProfileTemplate = () => (
  <Document>
    {/* Cover Page */}
    <Page size="A4" style={styles.coverPage}>
      <Text style={styles.title}>CETROFARM</Text>
      <Text style={styles.subtitle}>Company Profile & Investment Deck</Text>
      <Text style={styles.footerText}>PT. Cetro Tama Indonesia | 2026</Text>
    </Page>

    {/* Ringkasan Bisnis & Traksi */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Ringkasan Bisnis</Text>
      <Text style={styles.text}>
        Cetrofarm merawat rantai pasok pangan dari petani binaan langsung ke meja Anda. Memberikan kepastian bagi offtaker dan kesejahteraan bagi petani sejak 2018.
        Model bisnis kami memotong 3-4 titik tengkulak tradisional, memberikan harga beli lebih tinggi ke petani dan harga jual lebih kompetitif ke offtaker B2B.
      </Text>

      <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Traksi & Metrik Kunci</Text>
      <View style={styles.row}>
        <View style={styles.metricBox}>
          <Text style={styles.metricValue}>210+</Text>
          <Text style={styles.metricLabel}>Mitra Peternak</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricValue}>340 ha</Text>
          <Text style={styles.metricLabel}>Lahan Kelola</Text>
        </View>
        <View style={[styles.metricBox, { marginRight: 0 }]}>
          <Text style={styles.metricValue}>150 ton</Text>
          <Text style={styles.metricLabel}>Volume/Bulan</Text>
        </View>
      </View>
    </Page>

    {/* Lini Bisnis & Legalitas */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Lini Bisnis Utama</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sayuran Segar</Text>
        <Text style={styles.cardText}>Margin: 15-20% | Menyuplai HORECA dan Ritel Modern dengan standar organik tersertifikasi.</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Bahan Pokok (Beras)</Text>
        <Text style={styles.cardText}>Margin: 10-15% | Volume tinggi untuk stabilitas. Offtaker distributor regional.</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Protein Hewani</Text>
        <Text style={styles.cardText}>Margin: 12-18% | Kemitraan peternak ayam untuk pemenuhan gizi protein sehat.</Text>
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 40 }]}>Legalitas & Sertifikasi</Text>
      <Text style={styles.legalText}>• PT. Cetro Tama Indonesia</Text>
      <Text style={styles.legalText}>• NIB: 9120212080575</Text>
      <Text style={styles.legalText}>• Sertifikasi Organik INOFICE</Text>
      <Text style={styles.legalText}>• Izin Edar BPOM (Beberapa lini produk)</Text>
    </Page>
  </Document>
);
