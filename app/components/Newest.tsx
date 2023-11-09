import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

async function getData() {
    const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
        _id,
          name,
          price,
          "Slug": slug.current,
          "CategoryName": category->name,
          "ImageUrl": image[0].asset->url,
        }`;

    const data = await client.fetch(query);

    return data;
}

export default async function Newest() {
    const data: simplifiedProduct[] = await getData();
    return (
        <div className="bg-white ">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:py-24  sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center ">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">
                        Our Newest Products
                    </h2>
                    <Link
                        href="/all"
                        className="text-primary flex items-center gap-x-1 "
                    >
                        See All
                        <span>
                            <ArrowRight />
                        </span>
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((product) => (
                        <div key={product._id} className="group relative">
                            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                                <Image
                                    src={product.ImageUrl}
                                    alt="Products"
                                    className="w-full h-full object-cover lg:h-full lg:w-full"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
