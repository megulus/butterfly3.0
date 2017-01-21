
export function setMood(mood) {
    return {
        type: 'SET_MOOD',
        payload: mood,
    }
}

export function unsetMood() {
    return {
        type: 'UNSET_MOOD',
        payload: 'MOOD_UNSET',
    }
}