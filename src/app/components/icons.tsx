// src/app/components/icons.tsx
import Image from 'next/image'

// Define the props interface
interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    unoptimized: boolean;
}

// General-purpose image component
export function ImageComponent({ src, alt, width, height, unoptimized }: ImageProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            unoptimized={unoptimized}
        // Optional: Add additional props like className or onClick
        />
    );
}

// Example usage for your Window Cleaning icon:
export function WindowCleaningIcon() {
    return (
        <ImageComponent
            src="/icons-animated/window-cleaning.gif"
            alt="Ikkunat siivous"
            width={50}
            height={50}
            unoptimized={true}
        />
    );
}
export function Trolley() {
    return (
        <ImageComponent
            src="/icons-animated/cleaning-trolley.gif"
            alt="Ikkunat siivous"
            width={50}
            height={50}
            unoptimized={true}
        />
    );
}
export function Duster() {
    return (
        <ImageComponent
            src="/icons-animated/duster.gif"
            alt="Ikkunat siivous"
            width={50}
            height={50}
            unoptimized={true}
        />
    );
}
export function Cleaning() {
    return (
        <ImageComponent
            src="/icons-animated/cleaning.gif"
            alt="Ikkunat siivous"
            width={50}
            height={50}
            unoptimized={true}
        />
    );
}
export function Tools() {
    return (
        <ImageComponent
            src="/icons-animated/cleaning-tools.gif"
            alt="Ikkunat siivous"
            width={50}
            height={50}
            unoptimized={true}
        />
    );
}
export function Vacuum() {
    return (
        <ImageComponent
            src="/icons-animated/vacuum.gif"
            alt="Ikkunat siivous"
            width={50}
            height={50}
            unoptimized={true}
        />
    );
}
export function Spray() {
    return (
        <ImageComponent
            src="/icons-animated/cleaning-spray.gif"
            alt="Ikkunat siivous"
            width={50}
            height={50}
            unoptimized={true}
        />
    );
}
export function Mop() {
    return (
        <ImageComponent
            src="/icons-animated/mop.gif"
            alt="Ikkunat siivous"
            width={50}
            height={50}
            unoptimized={true}
        />
    );
}
export function Hand() {
    return (
        <ImageComponent
            src="/icons-animated/hand-cleaning.gif"
            alt="Ikkunat siivous"
            width={50}
            height={50}
            unoptimized={true}
        />
    );
}
export function CleanHome() {
    return (
        <ImageComponent
            src="/icons-animated/cleaning-service.png"
            alt="Ikkunat siivous"
            width={50}
            height={50}
            unoptimized={true}
        />
    );
}
export function Call() {
    return (
        <ImageComponent
            src="/icons-animated/24-hours.png"
            alt="24-tuntia siivous"
            width={35}
            height={35}
            unoptimized={true}
        />
    );
}
export function WhatsAppIcon() {
    return (
        <ImageComponent
            src="/icons-animated/whatsapp.png"
            alt="WhatsApp"
            width={35}
            height={35}
            unoptimized={true}
        />
    );
}