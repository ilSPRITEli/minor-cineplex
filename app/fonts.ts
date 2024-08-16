import { Inter } from 'next/font/google';
import { Krub } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const krub = Krub({ subsets: ['latin'],
    style:['normal'],
    weight: [
        '400',
        '500',
        '600',
        '700',
    ]
 });

 export const lstn = Krub({ subsets: ['latin'],
    style:['normal'],
    weight: [
        '400',
        '500',
        '600',
        '700',
    ]
 });

 export const lusitana = Lusitana({ subsets: ['latin'],
    weight: [
        '400'
        ,'700']});
