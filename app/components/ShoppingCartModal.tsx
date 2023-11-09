import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

export default async function ShopingCart() {
    return (
        <Sheet defaultOpen>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                </SheetHeader>
                <div>Hello</div>
            </SheetContent>
        </Sheet>
    );
}
