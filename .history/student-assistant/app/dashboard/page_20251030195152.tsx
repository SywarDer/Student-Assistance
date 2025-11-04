export default function Dashboard(){
    return(
    
        <div className="flex space-x-4">
            <div className="rounded-lg p-4"  style={{
        backgroundColor: "var(--secondary)",
        color: "var(--secondary)",
      }}>
                <h1 className="">Subject</h1>
                <h1>21</h1>
            </div>
            <div className="rounded-lg p-4">
                <h1>File</h1>
                <h1>15</h1>
            </div>
            <div className="rounded-lg p-4">
                <h1>FlashCards</h1>
                <h1>150</h1>
            </div>
        </div>
      
    )
}