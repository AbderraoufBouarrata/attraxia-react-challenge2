import Image from 'next/image';
import React from 'react';
import Loading from '@/app/_assets/animations/loading.svg';

export default function loading() {
    return <Image src={Loading} alt="loading" />;
}
