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
        <button>
            Add Subject 
        </button>
        </>

    )
}