import React from 'react'

// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="mb-2 text-center">Result University</h1>
//             <h3 className="text-center mb-2" style={{ color: '#666' }}>
//                 Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами
//             </h3>
//         </section>
//     )
// }

const e =  React.createElement;

export default function IntroSection() {
    return (
        e(
            'section', 
            null, 
            [
                e('h1', { className: 'mb-2 text-center', key: 0 }, 'Result University'),
                e('h1', { className: 'mb-2 text-center', style: { color: '#666' }, key: 1}, 'A frontend development university that saturates the IT sector with qualified programmers')
            ]
        )
    )
}