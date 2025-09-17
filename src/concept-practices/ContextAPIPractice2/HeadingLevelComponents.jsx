import { HeadingLevelContext } from "./HeadingLevelContext";

function SectionComponent({ level, children }) {
    // return (
    //     <section className="section">
    //         {children}
    //     </section>
    // );
    return (
        <section className="section">
            <HeadingLevelContext value={level}>
                {children}
            </HeadingLevelContext>
        </section>
    );
}

export { SectionComponent }