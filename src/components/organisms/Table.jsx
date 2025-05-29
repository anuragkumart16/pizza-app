import React from 'react'

function Table({ headings, data }) {
    return (
        <table className="w-full  border-[var(--color-tertiary)] mt-6 rounded-2xl border-separate border-spacing-0">
            <thead>
                <tr>
                    {headings.map((heading, id) => (
                        <th
                            key={id}
                            className="p-3 border-b border-[var(--color-secondary)] text-sm font-bold"
                        >
                            {heading}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((array, rowIndex) => (
                    <tr key={rowIndex} >
                        {array.map((item, index) => (
                            <td
                                key={index}
                                className="p-3 border-b border-[var(--color-secondary)] text-sm text-center"
                            >
                                {item}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>


    )
}

export default Table
