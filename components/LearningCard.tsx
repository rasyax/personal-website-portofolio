import { Award } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function LearningCard() {
    return (
        <div className='flex flex-col gap-5 border-l px-3 md:px-10 border-neutral-800'>
            <header className='flex items-center justify-between'>
                <span className='text-xs text-neutral-400 tracking-wider'>01</span>
                <span className='text-xs text-neutral-400 tracking-wider'>2023 - 2026</span>
            </header>
            <div className='flex items-center gap-8'>
                <div className='border border-neutral-800'>
                    <Image src="/smkn4tangerang.png" alt='logo wellmagic' width={50} height={50} />
                </div>
                <header>
                    <h1 className='text-xs font-bold text-neutral-400 tracking-widest'>ACADEMIC RECORD</h1>
                    <h2 className='text-xl font-bold'>Software Engineering Major</h2>
                    <p className='text-sm font-bold text-neutral-400'>SMK NEGERI 4 TANGERANG</p>
                </header>
            </div>
                <div className='flex flex-col'>
                    <header className='flex items-center gap-3'>
                        <span><Award size={12}/></span>
                        <h1 className='text-sm font-bold'>ACHIVEMENT</h1>
                    </header>
                    <div className='flex items-center gap-3 border-b border-neutral-800 py-5'>
                        <span className='text-xs font-bold text-neutral-400'>01</span>
                        <p className='text-neutral-400 tracking-wide text-justify'>1st Place - Pengembangan Talenta Peserta Didik Bidang Web Technologies SMK Negeri 4 Kota Tangerang Tahun 2024</p>
                    </div>
                    <div className='flex items-center gap-3 border-b border-neutral-800 py-5'>
                        <span className='text-xs font-bold text-neutral-400'>02</span>
                        <p className='text-neutral-400 tracking-wide text-justify'>3rd Place - Lomba Kompetensi Siswa Sekolah Menengah Kejuruan (LKS SMK) Bidang Lomba Web Technologies Tingkat Kota Tangerang Tahun 2025</p>
                    </div>
                </div>
        </div>
    )
}
