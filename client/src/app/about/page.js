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
                    paragraph="
                    At Orderio, a bunch of college students had a cool idea. They loved tech and tasty food, so they decided to make something awesome. They didn't just want to deliver meals; they wanted to change how people get their favorite foods. Plus, they wanted to help other students earn cash while in college. That's how Orderio came to life. We believe everyone should enjoy yummy meals without waiting too long. So, we make it happen, one order at a time."
                    imgSrcs={['https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg']}
                    imgAlt="Vision Image"
                    reverse={false}
                />

                {/* Updated to accept multiple images */}
                <SectionWithImage
                    title="Four Years of Culinary Connections"
                    paragraph="
                    Since we started Orderio, we've grown a lot. Our team has gotten bigger, and we've teamed up with more local restaurants. Every year, we promise to keep serving our communities and making new fans. Orderio isn't just a business; it's a big part of local dining. We've been serving and innovating for four years, making sure we're always woven into the community."
                    imgSrcs={[
                        'https://media.istockphoto.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.jpg?b=1&s=612x612&w=0&k=20&c=ENiwiKPJOCT7PhV9BlHBmVoyiOeGX3zaCRgjiKara5Q=',
                        'https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?b=1&s=612x612&w=0&k=20&c=E5YZ31t5xyOIaZ48S4U1sTnbVChrPo6YdRH1oJtRk8g=',
                    ]}
                    imgAlt="Connections Image"
                    reverse={true}
                />

                <SectionWithImage
                    title="Team Dynamics and Service Excellence"
                    paragraph="
                    At Orderio, teamwork is key. Our team is made up of people with different skills and lots of energy. From our delivery folks to our organizers, everyone works together smoothly. We're like a well-tuned machine, but we also feel like family. Our customer service isn't just good—it's great! We're always here for you, no matter the weather or time of day. When you pick Orderio, you're not just getting food; you're getting a carefully made and friendly experience, brought right to you."
                    imgSrcs={[
                        'https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=600',
                        'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=600',
                    ]}
                    imgAlt="Team Image"
                    reverse={false}
                />

                <SectionWithImage
                    title="Beyond the Meal - A Mission Woven into Every Delivery"
                    paragraph="
                    At Orderio, we're not just a regular business. We're a team that loves being part of the community and making connections as much as we love tasty food. Our main values are working together, giving back to the community, and the happiness of bringing delicious food to your doorstep. We treasure the moments we share with each delivery because we know it's not just about filling stomachs; it's about making people happy. Welcome to Orderio, where every bite is an adventure, and every delivery is a promise we keep."
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
