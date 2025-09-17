import React from 'react';

function Heading({ level, children }) {
    switch (level) {
        case 1:
            return <h1>{children}</h1>
        case 2:
            return <h2>{children}</h2>
        case 1:
            return <h3>{children}</h3>
        case 1:
            return <h4>{children}</h4>
        case 1:
            return <h5>{children}</h5>
        case 1:
            return <h6>{children}</h6>
        default: 
            throw Error('Unknown Level: ', level);
    }
}

function Section({ children }) {
    return (
        <section className="section">
            {children}
        </section>
    );
}

function ContextAPI2ComponentIdea() {
    return (
        <Section>
            <Heading level={1}>Title</Heading>
            <Heading level={2}>Heading</Heading>
            <Heading level={3}>Sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={5}>Sub-sub-sub-heading</Heading>
            <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
        </Section>
    )
}