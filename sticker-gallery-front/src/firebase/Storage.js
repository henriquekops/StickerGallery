import firebase from './Firebase.js'
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function getSticker(sticker) {

    // Create a reference to the file we want to download
    const storage = getStorage(firebase);
    const stickerRef = ref(storage, `stickers/` + sticker);
    
    // Get the download URL
    const urlPromise = getDownloadURL(stickerRef).then((url) => {
        console.log(url)
        return url
    })

    return urlPromise
}

export default getSticker