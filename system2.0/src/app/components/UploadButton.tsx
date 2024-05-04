"use client"
import { UploadButton } from "./UploadThings";
import AddImage from "../actions/addImage";


export default function UpButton() {
 return (
    <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
        
            const add = async()=>{
                await AddImage({
                    imageUrl:res[0].url,
                    nameArchive:res[0].name
                })
            }
            add()
        alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
    }}
/>
 );
}