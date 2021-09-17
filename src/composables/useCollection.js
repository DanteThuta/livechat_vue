import { db } from '../firebase/config'
import { ref } from '@vue/reactivity'

let useCollection = (collection) => {
    let error = ref(null);

    let addDoc = async(doc) => {
        try {
            await db.collection(collection).add(doc);
        }
        catch(err){
            error.value = err.message;
            err.value = "Could not send the message";
        }
    }
    return {error,addDoc}
}

export default useCollection;