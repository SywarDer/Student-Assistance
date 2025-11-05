"use client";

// imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from "@/components/ui/table";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@radix-ui/react-dialog";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { PlusSquare, Table } from "lucide-react";
import { useEffect, useState } from "react";
//

export default function Dashboard() {
    // get url from env
    const apiUrl = process.env.NEXT_PUBLIC_API_URL!;
    // Add subject state
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // GraphQl queries

    // graphql request to add subject
    const createSubject = async () => {
    const query = `
      mutation CreateSubject($title: String!, $description: String!) {
        addSubject(title: $title, description: $description) {
          id
          title
          description
        }
      }
    `;
    const variables = {title,description};
        try {
                const res = await fetch(apiUrl, {  
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ query, variables }),
                });

                const data = await res.json();
                console.log("Subject Created:", data.data.createSubject);
        } catch (err) {
                console.error("Error creating subject:", err);
            }
    };

    // graphql query to add subject
    const getSubjects = async () => {
    const query = `
      query 
        subjects{
          id
          title
          description
        }
     
    `;

        try {
                const res = await fetch(apiUrl, {  
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ query}),
                });

                const data = await res.json();
                console.log("Subjects :", data.data.subjects);
        } catch (err) {
                console.error("Error creating subject:", err);
            }
    };

    useEffect(() => {
        getSubjects();
    }, []);

    const documents = [
        {
            id: "1",
            title: "INV001",
            date: "20/05/2001",
            summary: "this is a summary",
            actions: <div className="flex">
                <Button variant="outline" size="sm" className="mr-2">Delete</Button>
                <Button variant="outline" size="sm" className="mr-2">Download</Button>
                <Button variant="outline" size="sm">View</Button>
            </div>,
        }
    ]
    return (

        <div className="m-8 space-y-8">
            {/*Dashboard Cards*/}
            <div className="flex space-x-4 justify-between w-full">
                <div className="rounded-lg p-4 w-1/3" style={{
                    backgroundColor: "var(--chart-1)",
                    color: "var(--card-foreground)",
                }}>
                    <h1 className="text-xl">Subject</h1>
                    <h1 className="text-4xl">21</h1>
                </div>
                <div className="rounded-lg p-4 w-1/3" style={{
                    backgroundColor: "var(--chart-2)",
                    color: "var(--card-foreground)",
                }}>
                    <h1 className="text-xl">File</h1>
                    <h1 className="text-4xl">15</h1>
                </div>
                <div className="rounded-lg p-4 w-1/3" style={{
                    backgroundColor: "var(--chart-3)",
                    color: "var(--card-foreground)",
                }}>
                    <h1 className="text-xl">FlashCards</h1>
                    <h1 className="text-4xl">150</h1>
                </div>
            </div>

            {/* Button new subject */}
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="cursor-pointer text-sm" style={{ backgroundColor: "var(--ring)" }}>
                        Add Subject <PlusSquare />
                    </Button>

                </PopoverTrigger>
                <PopoverContent
                    side="bottom"
                    align="start"
                    className="w-80 bg-black p-4"
                >
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
                                    className="col-span-2 h-8"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <h1>Description</h1>
                                <Input
                                    id="maxWidth"
                                    className="col-span-2 h-8"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <Button 
                            className="mt-4"
                            onClick={createSubject}
                            >Create Subject</Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>

            {/** List of subjects */}

            <h1 className="text-md">Subject 1</h1>
            <table className="min-w-full border">

                <caption className="text-left text-xl cursor-pointer">

                    <Dialog>
                        <form>
                            <DialogTrigger asChild>
                                <Button variant="outline"><PlusSquare /></Button>
                            </DialogTrigger>
                            {/** Drag and drop a document */}
                            <DialogContent className="sm:max-w-[425px]">
                                <div>
                                    <DialogTitle>Upload Documents</DialogTitle>
                                    <DialogDescription>
                                        Drag and drop your files below or click the button to upload.
                                    </DialogDescription>
                                </div>

                                {/* Drag & Drop area */}
                                <div
                                    className="mt-4 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition"
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) => {
                                        e.preventDefault();
                                        const files = Array.from(e.dataTransfer.files);
                                        console.log("Dropped files:", files);

                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-upload text-gray-500 mb-2"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="17 8 12 3 7 8" />
                                        <line x1="12" x2="12" y1="3" y2="15" />
                                    </svg>
                                    <p className="text-sm text-gray-600">
                                        Drop your files here or click below to upload
                                    </p>
                                </div>

                                {/* Upload button */}
                                <div className="mt-4 flex justify-center space-x-3">
                                    <input
                                        type="file"
                                        id="file-upload"
                                        multiple
                                        className="hidden"
                                        onChange={(e) => {
                                            const files = Array.from(e.target.files ?? []);
                                            console.log("Selected files:", files);
                                            // TODO: handle upload logic
                                        }}
                                    />
                                    <label htmlFor="file-upload">
                                        <Button asChild>
                                            <span>Choose Files</span>
                                        </Button>
                                    </label>
                                    <Button type="submit">Upload</Button>
                                </div>

                                {/* Cancel button */}
                                <div className="mt-4 flex justify-end">
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                </div>
                            </DialogContent>

                        </form>
                    </Dialog>

                </caption>

                <thead className="gap-4 rounded-full">
                    <tr >
                        <th className="p-4">Document</th>
                        <th className="p-4">Title</th>
                        <th className="p-4">Summary</th>
                        <th className="p-4">Date</th>
                        <th className="p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map((doc) => (
                        <tr className="rounded-full" key={doc.id}>
                            <td className="p-4">{doc.id}</td>
                            <td className="p-4">{doc.title}</td>
                            <td className="p-4">{doc.summary}</td>
                            <td className="p-4">{doc.date}</td>
                            <td className="p-4">{doc.actions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    )
}