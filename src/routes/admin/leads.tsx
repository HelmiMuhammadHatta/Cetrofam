import { createFileRoute } from '@tanstack/react-router';
import * as React from 'react';
import { db } from '../../db';
import { contactSubmissions, investorLeads, newsletterSubscribers } from '../../db/schema';
import { createServerFn } from '@tanstack/react-start';

export const fetchLeads = createServerFn({ method: 'GET' })
  .handler(async () => {
    try {
      const contacts = await db.select().from(contactSubmissions).orderBy(contactSubmissions.createdAt);
      const investors = await db.select().from(investorLeads).orderBy(investorLeads.createdAt);
      const newsletters = await db.select().from(newsletterSubscribers).orderBy(newsletterSubscribers.createdAt);
      
      return { contacts, investors, newsletters };
    } catch (e) {
      console.error(e);
      return { error: 'Failed to fetch' };
    }
  });

export const Route = createFileRoute('/admin/leads')({
  component: AdminLeadsPage,
  loader: async () => {
    return await fetchLeads();
  }
});

function AdminLeadsPage() {
  const data = Route.useLoaderData();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'cetrofarm2026') {
      setIsAuthenticated(true);
    } else {
      alert('Password salah');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-sm shadow-md max-w-sm w-full">
          <h1 className="text-2xl font-bold text-forest mb-6">Admin Login</h1>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-forest/20 rounded-sm mb-4"
            placeholder="Password"
          />
          <button type="submit" className="w-full bg-forest text-cream py-2 rounded-sm font-bold">
            Login
          </button>
        </form>
      </div>
    );
  }

  if ('error' in data) {
    return <div className="p-8 text-red-500">Error loading data.</div>;
  }

  return (
    <div className="min-h-screen bg-cream p-8">
      <h1 className="text-3xl font-serif font-bold text-forest mb-8">Data Leads</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-forest mb-4">Inquiry Investor</h2>
          <div className="bg-white rounded-sm shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-forest text-cream">
                <tr>
                  <th className="p-4">Tanggal</th>
                  <th className="p-4">Nama</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Perusahaan</th>
                  <th className="p-4">Pesan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest/10">
                {data.investors.map((lead: any) => (
                  <tr key={lead.id}>
                    <td className="p-4">{new Date(lead.createdAt).toLocaleString()}</td>
                    <td className="p-4">{lead.name}</td>
                    <td className="p-4">{lead.email}</td>
                    <td className="p-4">{lead.company || '-'}</td>
                    <td className="p-4">{lead.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-forest mb-4">Kontak / Customer</h2>
          <div className="bg-white rounded-sm shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-forest text-cream">
                <tr>
                  <th className="p-4">Tanggal</th>
                  <th className="p-4">Nama</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Telepon</th>
                  <th className="p-4">Pesan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest/10">
                {data.contacts.map((contact: any) => (
                  <tr key={contact.id}>
                    <td className="p-4">{new Date(contact.createdAt).toLocaleString()}</td>
                    <td className="p-4">{contact.name}</td>
                    <td className="p-4">{contact.email}</td>
                    <td className="p-4">{contact.phone || '-'}</td>
                    <td className="p-4">{contact.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-forest mb-4">Newsletter Subscribers</h2>
          <div className="bg-white rounded-sm shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-forest text-cream">
                <tr>
                  <th className="p-4">Tanggal</th>
                  <th className="p-4">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest/10">
                {data.newsletters.map((sub: any) => (
                  <tr key={sub.id}>
                    <td className="p-4">{new Date(sub.createdAt).toLocaleString()}</td>
                    <td className="p-4">{sub.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
