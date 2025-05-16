import React from 'react';
import { useParams, Link } from 'react-router-dom';
import countries from '../data/countries.json';

export default function CountryMap() {
    const { abbr } = useParams();
    const country = countries.find(c => c.Abbreviation === abbr);

    if (!country) {
        return <p style={{ color: 'red' }}>Country not found.</p>;
    }

    const lat = parseFloat(country.Latitude);
    const lng = parseFloat(country.Longitude);
    const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 2},${lat - 2},${lng + 2},${lat + 2}&layer=mapnik&marker=${lat},${lng}`;

    return (
        <div style={{ border: '1px solid #222', borderRadius: 8, padding: 16, margin: 16, background: '#fff', maxWidth: 900 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 22, marginRight: 8 }}>🌍</span>
                <span style={{ fontWeight: 'bold', fontSize: 22 }}>Country Explorer</span>
            </div>
            <div style={{ marginBottom: 16 }}>
                <Link to="/" style={{
                    display: 'inline-block',
                    padding: '6px 10px',
                    background: '#f5f5f5',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: 14,
                    marginRight: 8
                }}>
                    ← Back to Countries
                </Link>
                <Link to={`/country/${abbr}`} style={{
                    display: 'inline-block',
                    padding: '6px 10px',
                    background: '#e6f2fb',
                    border: '1px solid #7ec0ee',
                    borderRadius: 4,
                    color: '#0074d9',
                    textDecoration: 'none',
                    fontSize: 14,
                }}>
                    Country Details
                </Link>
            </div>
            <div style={{ marginBottom: 8 }}>
                <div style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 6 }}>Map of {country.Country}</div>
                <div style={{ marginBottom: 1 }}><span style={{ fontWeight: 'bold' }}>Capital:</span> {country['Capital/Major City']}</div>
                <div><span style={{ fontWeight: 'bold' }}>Coordinates:</span> {lat}, {lng}</div>
            </div>
            <div style={{ border: '1px solid #ccc', borderRadius: 6, overflow: 'hidden', background: '#eee' }}>
                <iframe
                    width="100%"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    src={osmUrl}
                    title={`${country.Country} map`}
                    style={{ display: 'block' }}
                />
            </div>
        </div>
    );
}
