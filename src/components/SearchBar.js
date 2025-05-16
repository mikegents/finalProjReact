import React from 'react';

export default function SearchBar({
    search,
    onSearch,
    sortKey,
    onSortChange,
    ascending,
    onAscChange
}) {
    return (
        <div style={{ marginBottom: 12 }}>
            <input
                type="text"
                placeholder="Search countries..."
                value={search}
                onChange={e => onSearch(e.target.value)}
                style={{
                    width: '100%',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    padding: '6px 8px',
                    fontSize: 14,
                    fontFamily: 'inherit',
                    marginBottom: 8,
                    boxShadow: 'none',
                }}
            />
            <label style={{ fontSize: 14, marginRight: 8 }}>
                Sort by:
                <select
                    value={sortKey}
                    onChange={e => onSortChange(e.target.value)}
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: 4,
                        padding: '2px 6px',
                        fontSize: 14,
                        fontFamily: 'inherit',
                        marginLeft: 8,
                        marginRight: 4,
                        boxShadow: 'none',
                    }}
                >
                    <option value="Country">Name</option>
                    <option value="Population">Population</option>
                    <option value="GDP">GDP</option>
                    <option value="Life expectancy">Life Expectancy</option>
                </select>
            </label>
            <label style={{ fontSize: 14, marginRight: 8 }}>
                <input
                    type="checkbox"
                    checked={ascending}
                    onChange={e => onAscChange(e.target.checked)}
                    style={{ marginLeft: 8, marginRight: 4 }}
                />
                Ascending
            </label>
        </div>
    );
}
