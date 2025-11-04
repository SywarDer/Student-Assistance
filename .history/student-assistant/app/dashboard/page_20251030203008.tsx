import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from "@/components/ui/table";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { PlusSquare, Table } from "lucide-react";
import { Label } from "recharts";

export default function Dashboard() {
    const documents = [
        {
            title: "INV001",
            date: "20/05/2001",
            summary: "this is a summary",
            actions: return(<div>View Edit Delete</div>),
        }
    ]
    return (

        <div className="m-8">
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
                            <h4 className="leading-none font-medium">Subject</h4>
                            <p className="text-muted-foreground text-sm">
                                Set the details for the subject.
                            </p>
                        </div>
                        <div className="grid gap-2 ">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <h1>Title</h1>
                                <Input
                                    id="width"
                                    defaultValue="100%"
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <h1>Summary</h1>
                                <Input
                                    id="maxWidth"
                                    defaultValue="300px"
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <Button className="mt-4">Create Subject</Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>

            {/** List of subjects */}

            <h1>Subjects</h1>
            <h1>Subject 1</h1>
            <table className="min-w-full border">
                <thead>
                    <tr>
                        <th>Invoice</th>
                        <th>Status</th>
                        <th>Method</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice) => (
                        <tr key={invoice.invoice}>
                            <td>{invoice.invoice}</td>
                            <td>{invoice.paymentStatus}</td>
                            <td>{invoice.paymentMethod}</td>
                            <td>{invoice.totalAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    )
}