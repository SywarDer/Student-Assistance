import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { PlusSquare } from "lucide-react";
import { Label } from "recharts";

export default function Dashboard() {
    return (

        <>
            {/*Dashboard Cards*/}
            <div className="flex space-x-4 justify-between w-full">
                <div className="rounded-lg p-4" style={{
                    backgroundColor: "var(--chart-1)",
                    color: "var(--card-foreground)",
                }}>
                    <h1 className="text-xl">Subject</h1>
                    <h1 className="text-6xl">21</h1>
                </div>
                <div className="rounded-lg p-4" style={{
                    backgroundColor: "var(--chart-2)",
                    color: "var(--card-foreground)",
                }}>
                    <h1 className="text-xl">File</h1>
                    <h1 className="text-6xl">15</h1>
                </div>
                <div className="rounded-lg p-4" style={{
                    backgroundColor: "var(--chart-3)",
                    color: "var(--card-foreground)",
                }}>
                    <h1 className="text-xl">FlashCards</h1>
                    <h1 className="text-6xl">150</h1>
                </div>
            </div>

            {/* Button new subject */}
           
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Add Subject <PlusSquare /></Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <h4 className="leading-none font-medium">Dimensions</h4>
                            <p className="text-muted-foreground text-sm">
                                Set the dimensions for the layer.
                            </p>
                        </div>
                        <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <h1>Width</h1>
                                <Input
                                    id="width"
                                    defaultValue="100%"
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <h1>Max. width</h1>
                                <Input
                                    id="maxWidth"
                                    defaultValue="300px"
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="height">Height</Label>
                                <Input
                                    id="height"
                                    defaultValue="25px"
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="maxHeight">Max. height</Label>
                                <Input
                                    id="maxHeight"
                                    defaultValue="none"
                                    className="col-span-2 h-8"
                                />
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </>

    )
}