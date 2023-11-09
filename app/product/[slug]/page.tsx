import ImageGallery from "@/app/components/imageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";

async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
          price,
          image,
          name,
          discription,
          "Slug": slug.current,
          "CategoryName": category->name,
      }`;
    const data = await client.fetch(query);
    return data;
}

export default async function ProductPage({
    params,
}: {
    params: { slug: string };
}) {
    const data: fullProduct = await getData(params.slug);

    return (
        <div className="bg-white ">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery image={data.image} />
                    <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                            <span className="mb-0.5 inline-block text-gray-500 ">
                                {data.CategoryName}
                            </span>
                            <h2 className=" text-2xl font-bold text-gray-800 lg:text-3xl ">
                                {data.name}
                            </h2>
                        </div>
                        <div className="mb-6 flex items-center gap-3 md:mb-10 ">
                            <Button className="rounded-full gap-x-2">
                                <span className="text-sm">4.2</span>
                                <Star className="h-4 w-4" />
                            </Button>
                            <span className="text-sm text-gray-500 transition duration-100">
                                56 Rating
                            </span>
                        </div>
                        <div className=" mb-4">
                            <div className="flex items-end gap-2">
                                <span className="text-xl font-bold text-gray-500 md:text-2xl">
                                    ${data.price}
                                </span>
                                <span className="mb-0.5 text-red-500 line-through">
                                    ${data.price + 30}
                                </span>
                            </div>
                            <span className="text-sm text-gray-500">
                                Inc. Vat plus shipping
                            </span>
                        </div>
                        <div className="mb-6 flex items-center gap-2 text-gray-500 ">
                            <Truck className="w-6 h-6" />
                            <span className="text-sm">2-4 Day Shipping</span>
                        </div>
                        <div className="flex gap-2.5">
                            <Button>Add To Bag</Button>
                            <Button variant={"secondary"}>Check Out Now</Button>
                        </div>
                        <p className="mt-12 text-base text-gray-500 tracking-wide">
                            {data.discription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
