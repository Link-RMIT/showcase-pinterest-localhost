export function add (pin) {
    return {
        type: "ADD_PIN",
        payload: pin,
    }
}

export function remove (id){
    return {
        type: "REMOVE_PIN",
        payload: id,
    }
}
