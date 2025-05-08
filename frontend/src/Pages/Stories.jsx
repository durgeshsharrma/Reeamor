import React, { useState } from 'react';
import './Stories.css'

const storiesData = [
    {
        id: 1,
        name: 'Aarav Patel',
        description:
            'After moving to a new city, I felt isolated. Reeamor introduced me to amazing companions who made me feel at home.',
        image: 'https://reeamor.com/Images/Image-2.png',
    },
    {
        id: 2,
        name: 'Meera Shah',
        description:
            'I found genuine people to talk to. Reeamor gave me the space to express myself freely and feel heard.',
         image: 'https://reeamor.com/Images/Image-2.png',
    },
    {
        id: 3,
        name: 'Rohan Verma',
        description:
            'Reeamor helped me reconnect with my emotional side and meet people who truly understand.',
         image: 'https://reeamor.com/Images/Image-2.png',
    },
    {
        id: 3,
        name: 'Rohan Verma',
        description:
            'Reeamor helped me reconnect with my emotional side and meet people who truly understand.',
         image: 'https://reeamor.com/Images/Image-2.png',
    },
    {
        id: 3,
        name: 'Rohan Verma',
        description:
            'Reeamor helped me reconnect with my emotional side and meet people who truly understand.',
         image: 'https://reeamor.com/Images/Image-2.png',
    },
    {
        id: 3,
        name: 'Rohan Verma',
        description:
            'Reeamor helped me reconnect with my emotional side and meet people who truly understand.',
         image: 'https://reeamor.com/Images/Image-2.png',
    },
    {
        id: 3,
        name: 'Rohan Verma',
        description:
            'Reeamor helped me reconnect with my emotional side and meet people who truly understand.',
         image: 'https://reeamor.com/Images/Image-2.png',
    },
    {
        id: 4,
        name: 'Priya Singh',
        description:
            'The companionship I found here has been life-changing. There’s always someone to listen.',
         image: 'https://reeamor.com/Images/Image-2.png',
    },
];

const Stories = () => {
    const [activeCard, setActiveCard] = useState(null);

    const toggleCard = (id) => {
        setActiveCard(prev => (prev === id ? null : id));
    };

    return (
        <div className="min-h-screen px-6 py-12 bg-white">
            <h2 className="text-4xl font-bold text-center text-[#212529] mb-12">
                Real Stories from Our Users
            </h2>

            {/* Horizontal Scroll Container */}
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 w-max">
                    {storiesData.map((story) => {
                        const isActive = activeCard === story.id;

                        return (
                            <div
                                key={story.id}
                                className="relative flex-shrink-0 w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg group"
                                onClick={() => toggleCard(story.id)}
                            >
                                {/* Background Image */}
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="w-full h-full object-cover"
                                />

                                {/* Slide-up Description */}
                                <div
                                    className={`absolute left-0 w-full px-4 py-3 text-white bg-[#856fbb] bg-opacity-80 text-sm h-[30%] transition-all duration-500 ease-in-out z-20 ${isActive ? 'bottom-[30%]' : 'bottom-[-100%]'
                                        } group-hover:bottom-[30%]`}
                                >
                                    {story.description}
                                </div>

                                {/* Name at the bottom */}
                                <div className="absolute bottom-0 w-full  bg-[#856fbb] bg-opacity-60 text-white text-lg font-semibold py-3 px-4 z-10">
                                    {story.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Stories;
