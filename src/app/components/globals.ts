// app/components/globals.ts
// globals.ts
export const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
        const yOffset = -133; // Adjust based on your navbar height and visual gap
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};