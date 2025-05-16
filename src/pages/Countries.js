import React, { useState, useMemo } from 'react';
import countries from '../data/countries.json';
import SearchBar from '../components/SearchBar';
import CountryCard from '../components/CountryCard';

export default function Countries() {
    const [search, setSearch] = useState('');
    const [sortKey, setSortKey] = useState('Country');
    const [ascending, setAscending] = useState(true);

    const parseNum = str =>
        Number(String(str).replace(/[^0-9.-]/g, '')) || 0;

    const visible = useMemo(() => {
        let list = countries.filter(c =>
            c.Country.toLowerCase().includes(search.toLowerCase())
        );
        list.sort((a, b) => {
            if (sortKey !== 'Country') {
                return parseNum(a[sortKey]) - parseNum(b[sortKey]);
            }
            return a.Country.localeCompare(b.Country);
        });
        return ascending ? list : list.reverse();
    }, [search, sortKey, ascending]);

    return (
        <div style={{ border: '1px solid #222', borderRadius: 8, padding: 16, margin: 16, background: '#fff', maxWidth: 900 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 22, marginRight: 8 }}>🌍</span>
                <span style={{ fontWeight: 'bold', fontSize: 22 }}>Country Explorer</span>
            </div>
            <div style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>Explore Countries</div>
            <SearchBar
                search={search}
                onSearch={setSearch}
                sortKey={sortKey}
                onSortChange={setSortKey}
                ascending={ascending}
                onAscChange={setAscending}
            />
            <div>
                {visible.map(c => (
                    <CountryCard key={c.Abbreviation} country={c} />
                ))}
            </div>
        </div>
    );
}
