import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'

function CareerCard() {
  return (
    <div className='flex flex-col border-l md:px-10 px-3 gap-4 border-neutral-800'>
        <header className='flex gap-3 items-center justify-between'>
            <div className='flex gap-3 items-center'>
                <span className='text-xs text-neutral-400'>01</span>
                <span className='text-xl font-bold'>2026</span>
                <span className='text-xs text-neutral-400 tracking-widest'>JUN - NOV</span>

            </div>
            <span className='text-xs text-neutral-400'>6 Mon</span>
        </header>
        <div className='flex items-center gap-8'>
            <div className='border border-neutral-800'>
                <Image src="/wellmagic.png" alt='logo wellmagic' width={50} height={50}/>
            </div>
            <header>
                <h1 className='text-xs font-bold text-neutral-400 tracking-widest'>INTERNSHIP</h1>
                <h2 className='text-xl font-bold'>Backend Developer</h2>
                <p className='text-sm font-bold text-neutral-400'>WellMagic Media Digital</p>
            </header>
        </div>
        <div className='px-5'>
            <ul className='list-disc'>
                <li className='text-neutral-400 py-2'>Merancang dan membangun endpoint API menggunakan Laravel untuk kebutuhan Learning Management System (LMS) dengan menerapkan best practice RESTful API.</li>
                <li className='text-neutral-400 py-2'>Membangun dashboard manajemen data yang efisien dan dinamis  memanfaatkan kapabilitas Laravel Filament.</li>
                <li className='text-neutral-400 py-2'>Berperan ganda membantu tim frontend dengan menerjemahkan (slicing) desain antarmuka menjadi komponen kode yang responsif menggunakan React.</li>
                <li className='text-neutral-400 py-2'>Mengadopsi kolaborasi versi menggunakan Git secara profesional untuk memastikan pengembangan kode berjalan rapi bersama tim.</li>
            </ul>
        </div>
    </div>
  )
}

export default CareerCard