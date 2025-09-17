import HeadingComponent from "./HeadingComponent";
import { SectionComponent } from "./HeadingLevelComponents";

export default function ContextAPIArticleComponent() {
    return (
        <article>
            <main>
                <SectionComponent level={1}>
                    <HeadingComponent>Title</HeadingComponent>
                    <SectionComponent level={2}>
                        <HeadingComponent>Heading</HeadingComponent>
                        <HeadingComponent>Heading</HeadingComponent>
                        <HeadingComponent>Heading</HeadingComponent>
                        <SectionComponent level={3}>
                            <HeadingComponent>Sub-heading</HeadingComponent>
                            <HeadingComponent>Sub-heading</HeadingComponent>
                            <HeadingComponent>Sub-heading</HeadingComponent>
                            <SectionComponent level={4}>
                                <HeadingComponent>Sub-sub-heading</HeadingComponent>
                                <HeadingComponent>Sub-sub-heading</HeadingComponent>
                                <HeadingComponent>Sub-sub-heading</HeadingComponent>
                            </SectionComponent>
                        </SectionComponent>
                    </SectionComponent>
                </SectionComponent>
            </main>
            <footer>
                <p>@ 2025 Danh Nguyen little project on Context API</p>
            </footer>
        </article>
    );
}