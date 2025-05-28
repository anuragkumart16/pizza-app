import React from 'react'

function Table({ headings, data }) {
    return (
        <table className="w-full border border-[var(--color-secondary)] mt-6 rounded-2xl overflow-hidden">
            <thead className="bg-[var(--color-tertiary)] text-left">
                <tr>
                    {headings.map((heading, id) => (
                        <th key={id} className="p-3 border-b border-[var(--color-secondary)] text-m font-bold">
                            {heading}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((array, rowIndex) => (
                    <tr
                        key={rowIndex}
                        className={'bg-[var(--color-tertiary)]'}
                    >
                        {array.map((item, index) => <td key={index} className="p-3 border-b border-[var(--color-secondary)]">{item}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default Table
