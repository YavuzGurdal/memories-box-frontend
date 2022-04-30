import { CREATE, UPDATE, DELETE, FETCH_ALL } from '../constants/actionsConstants'


// eslint-disable-next-line import/no-anonymous-default-export
export default (memories = [], action) => {
    switch (action.type) {
        case FETCH_ALL: // gelen action FETCH_ALL ise asagidakini yapiyor
            return action.payload // memoryActions dan dispatch icinde payload ile gonderdigim data 

        case CREATE:
            return [...memories, action.payload] // memories'in hepsini al payload'dan gelen memory'i ekle demek

        case UPDATE:
            return memories.map((memory) =>

                memory._id === action.payload._id ? action.payload : memory
            )
        // return memories.forEach((memory) => {
        //     if (memory._id === action.payload._id) {
        //         memory = action.payload
        //     }
        // })

        case DELETE:
            return memories.filter((memory) => memory._id !== action.payload)

        default:
            return memories
    }
}