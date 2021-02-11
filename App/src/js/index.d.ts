/**
 * Setup for WordPress use.
 */
declare var wp: object;

declare namespace Sliders {
    const name: string;
    const namespace: string;
    const title: string;
    const category: string;
    const icon: string;
    const attributes: SlidersAttributes;
}

interface SlidersAttributes {
    'slides': object,
    'width': string
}