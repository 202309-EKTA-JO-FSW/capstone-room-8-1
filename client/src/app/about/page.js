'use client';

import { useRef, useState, useEffect } from 'react';
import FAQ from './FAQ';
import JoinTeam from './JoinTeam';
import HeroSection from '../components/HeroSection';

const FadeInImage = ({ src, alt, className }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
    }, [src]);

    return (
        <div
            className={`relative h-96 w-full transition-opacity duration-1000 md:w-96 ${
                loaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <img
                src={src}
                alt={alt}
                className={`${className} h-full w-full rounded-lg object-cover`}
            />
        </div>
    );
};

function SectionWithImage({ title, paragraph, imgSrcs, imgAlt, reverse }) {
    const ref = useRef(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(ref.current);
            }
        });

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`flex flex-col md:flex-row ${
                reverse ? 'md:flex-row-reverse' : ''
            } my-10 items-center justify-center gap-8 md:gap-4 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
            } transition-opacity duration-1000`}
        >
            <div className="flex-1 px-4">
                <h2 className="mb-4 text-3xl font-bold text-black">{title}</h2>
                <p className="text-lg text-black">{paragraph}</p>
            </div>
            <div className="mt-4 flex flex-1 justify-center px-4 md:mt-0 md:justify-center">
                <div className="flex w-full md:w-auto md:space-x-4">
                    {imgSrcs.map((src, index) => (
                        <FadeInImage
                            key={index}
                            src={src}
                            alt={imgAlt + index}
                            className="shadow-lg"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function AboutPage() {
    return (
        <main>
            <div className="min-h-screen bg-white px-20 py-10">
                <SectionWithImage
                    title="Our Vision at Orderio"
                    paragraph="Here at Orderio, it all started with a vision that sprouted in the minds of few college students. A group of enterprising students, united by their shared passion for technology and good food, set out to create more than just a meal delivery service. We envisioned a platform that would revolutionize the way people access their favorite foods, while also offering fellow students a flexible way to earn money during their college journey. Orderio was born from the belief that everyone deserves to savor delicious meals without the wait, and that's exactly what we deliver, one order at a time."
                    imgSrcs={['https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg']}
                    imgAlt="Vision Image"
                    reverse={false}
                />

                {/* Updated to accept multiple images */}
                <SectionWithImage
                    title="Four Years of Culinary Connections"
                    paragraph="Since laying our digital cornerstone four years ago, Orderio has grown from a simple idea into a flourishing community staple. We've been riding a wave of unrelenting growth, seeing our workforce expand and our partnerships with local restaurants strengthen. With each passing year, we reaffirm our commitment to the communities we serve, forging links that turn first-time users into lifelong fans. Orderio isn't just a business; it's an integral thread in the fabric of local dining, continuously woven over four years of dedicated service and innovation."
                    imgSrcs={[
                        'https://media.istockphoto.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.jpg?b=1&s=612x612&w=0&k=20&c=ENiwiKPJOCT7PhV9BlHBmVoyiOeGX3zaCRgjiKara5Q=',
                        'https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?b=1&s=612x612&w=0&k=20&c=E5YZ31t5xyOIaZ48S4U1sTnbVChrPo6YdRH1oJtRk8g=',
                    ]}
                    imgAlt="Connections Image"
                    reverse={true}
                />

                <SectionWithImage
                    title="Team Dynamics and Service Excellence"
                    paragraph="Teamwork is the heart of Orderio's operations. Our team is a mosaic of skill and enthusiasm, where every player, from our delivery heroes to our coordination maestros, contributes to the seamless tapestry of our service. We operate with the precision of a well-oiled machine and the warmth of a family dinner table, ensuring that our customer service doesn't just meet expectations—it sets new benchmarks. Around the clock, across all weather, Orderio stands ready. Because when you choose Orderio, you're not just ordering food; you're embracing an experience that's meticulously curated and lovingly delivered, right to your doorstep."
                    imgSrcs={[
                        'https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=600',
                        'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=600',
                    ]}
                    imgAlt="Team Image"
                    reverse={false}
                />

                <SectionWithImage
                    title="Beyond the Meal - A Mission Woven into Every Delivery"
                    paragraph="At Orderio, we’re more than a business; we're a team that values community and connection as much as we relish a good feast. Our core values—teamwork, community contribution, and the joy of delivering delectable delights to your door—are the ingredients we mix into the recipe of our operation. We cherish the moments we create with every delivery, knowing that with each dish, we're not just fueling bodies; we're feeding souls. Welcome to Orderio—where every bite is a journey, and every delivery is a promise fulfilled."
                    imgSrcs={['https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=600']}
                    imgAlt="Mission Image"
                    reverse={true}
                />
                <FAQ />
                <JoinTeam />
            </div>
        </main>
    );
}
