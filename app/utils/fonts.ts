import { Cormorant_Garamond, Raleway } from 'next/font/google'

export const Cormorant = Cormorant_Garamond({
    subsets: ['cyrillic'],
    weight: [ '300', '400', '500', '600', '700'],
    style: ['italic', 'normal']
})

export const RalewayFont = Raleway({
    subsets: ['cyrillic'],
    weight: ['100', '200', '300', '400', '500'],
    style: ['normal'],
})