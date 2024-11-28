import { Cormorant_Garamond, Raleway } from 'next/font/google'

export const Cormorant = Cormorant_Garamond({
    subsets: ['cyrillic'],
    weight: ['400'],
    style: ['italic', 'normal']
})

export const RalewayFont = Raleway({
    subsets: ['cyrillic'],
    weight: ['400'],
    style: ['normal'],
})