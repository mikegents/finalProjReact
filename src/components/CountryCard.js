import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryCard({ country }) {
    // Build the flag URL from your Abbreviation (e.g. "AF" → "af")
    const code = country.Abbreviation.toLowerCase();
    const flagUrl = `https://flagcdn.com/96x72/${code}.png`;

    const handleError = e => {
        // Fallback if the flag isn't available
        e.target.src = 'https://via.placeholder.com/96x72?text=No+Flag';
    };

    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: 8,
                padding: 16,
                marginBottom: 16,
                background: '#fff',
                color: '#111',
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
            }}
        >
            <img
                src={flagUrl}
                alt={`${country.Country} flag`}
                onError={handleError}
                style={{
                    width: 96,
                    height: 60,
                    objectFit: 'cover',
                    border: '1px solid #aaa',
                    borderRadius: 4,
                    flexShrink: 0,
                }}
            />
            <div>
                <div style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 6 }}>{country.Country}</div>
                <div style={{ marginBottom: 1 }}><span style={{ fontWeight: 'bold' }}>Capital:</span> {country['Capital/Major City']}</div>
                <div style={{ marginBottom: 1 }}><span style={{ fontWeight: 'bold' }}>Language:</span> {country['Official language']}</div>
                <div style={{ marginBottom: 1 }}><span style={{ fontWeight: 'bold' }}>Population:</span> {country.Population}</div>
                <div style={{ marginBottom: 1 }}><span style={{ fontWeight: 'bold' }}>GDP:</span> {country.GDP}</div>
                <div style={{ marginBottom: 1 }}><span style={{ fontWeight: 'bold' }}>Life Expectancy:</span> {country['Life expectancy']} yrs</div>
                <div style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid #eee' }}>
                    <Link to={`/country/${country.Abbreviation}`} style={{ color: '#0074d9', textDecoration: 'underline', marginRight: 12, fontSize: 14 }}>More Info &rarr;</Link>
                    <Link to={`/map/${country.Abbreviation}`} style={{ color: '#0074d9', textDecoration: 'underline', fontSize: 14 }}>View Map</Link>
                </div>
            </div>
        </div>
    );
}
