"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppProps {
    image: any;
}

export default function ImageGallery({ image }: iAppProps) {
    //state
    const [bigImage, setBigImage] = useState(image[0]);

    //functions
    const handleSmallImageClick = (image: any) => {
        setBigImage(image);
    };

    return (
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {image.map((image: any, index: any) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg bg-gray-100"
                    >
                        <Image
                            src={urlFor(image).url()}
                            alt="image"
                            width={200}
                            height={200}
                            className="h-full w-full object-cover object-center cursor-pointer"
                            onClick={() => handleSmallImageClick(image)}
                        />
                    </div>
                ))}
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image
                    src={urlFor(bigImage).url()}
                    alt="image"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-gray-500 px-3 py-1.5 text-sm  uppercase tracking-wider text-white ">
                    Sale
                </span>
            </div>
        </div>
    );
}
