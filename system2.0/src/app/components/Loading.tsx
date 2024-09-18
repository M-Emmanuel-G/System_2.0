export default function Loading() {
 return (
    <div className="w-screen hidden justify-center items-center h-screen absolute bg-black bg-opacity-50" id="Loading">
        <div className="rounded-full h-10 w-10 bg-cyan-400 animate-ping"></div>
    </div>
 );
}