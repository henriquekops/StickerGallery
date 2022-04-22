import firebase from './Firebase.js'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

const storage = getStorage(firebase)
const rootRef = ref(storage)

async function getSticker(sticker) {
    var url = await getDownloadURL(
        ref(rootRef, `stickers/${sticker}`)
    )
    return url
}

export default getSticker