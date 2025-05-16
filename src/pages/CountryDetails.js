// src/pages/CountryDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import countries from '../data/countries.json';

export default function CountryDetails() {
    const { abbr } = useParams();
    const country = countries.find(c => c.Abbreviation === abbr);

    if (!country) {
        return (
            <div style={{ padding: 16, color: '#333' }}>
                Country not found.
            </div>
        );
    }

    // SVG flag URL
    const code = abbr.toLowerCase();
    const flagUrl = `https://flagcdn.com/${code}.svg`;
    const fallback = 'https://via.placeholder.com/400x300?text=No+Flag';

    return (
        <div style={{ padding: '16px', maxWidth: '600px', margin: '0', color: '#111' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 22, marginRight: 8 }}>🌍</span>
                <span style={{ fontWeight: 'bold', fontSize: 22 }}>Country Explorer</span>
            </div>

            {/* Back button */}
            <Link
                to="/"
                style={{
                    display: 'inline-block',
                    marginBottom: 16,
                    padding: '6px 10px',
                    background: '#f5f5f5',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: 14,
                }}
            >
                ← Back to Countries
            </Link>

            {/* Card container */}
            <div style={{ border: '1px solid #ccc', borderRadius: 8, overflow: 'hidden', background: '#fff', padding: 16, maxWidth: 420 }}>
                {/* Country Name */}
                <div style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>{country.Country}</div>
                {/* Flag and Details Row */}
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 24 }}>
                    {/* Flag */}
                    <img
                        src={flagUrl}
                        alt={`${country.Country} flag`}
                        onError={e => {
                            e.target.onerror = null;
                            e.target.src = fallback;
                        }}
                        style={{ width: 120, height: 'auto', display: 'block', objectFit: 'cover', marginRight: 0 }}
                    />
                    {/* Details */}
                    <div style={{ fontSize: 14, color: '#111' }}>
                        <div style={{ margin: '4px 0' }}><span style={{ fontWeight: 'bold' }}>Capital:</span> {country['Capital/Major City']}</div>
                        <div style={{ margin: '4px 0' }}><span style={{ fontWeight: 'bold' }}>Official Language:</span> {country['Official language']}</div>
                        <div style={{ margin: '4px 0' }}><span style={{ fontWeight: 'bold' }}>Population:</span> {country.Population}</div>
                        <div style={{ margin: '4px 0' }}><span style={{ fontWeight: 'bold' }}>GDP:</span> {country.GDP}</div>
                        <div style={{ margin: '4px 0' }}><span style={{ fontWeight: 'bold' }}>Calling Code:</span> {country['Calling Code']}</div>
                        <div style={{ margin: '4px 0' }}><span style={{ fontWeight: 'bold' }}>Life Expectancy:</span> {country['Life expectancy']} years</div>
                    </div>
                </div>
                {/* View on Map Button */}
                <Link
                    to={`/map/${abbr}`}
                    style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        background: '#28a745',
                        color: '#fff',
                        borderRadius: 4,
                        textDecoration: 'none',
                        fontSize: 14,
                        marginTop: 16,
                    }}
                >
                    View on Map
                </Link>
            </div>
        </div>
    );
}
