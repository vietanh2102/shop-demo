export const IsIntoView = (ref, setIsIntoView) => {
    const rect = ref?.current?.getBoundingClientRect()
    if (!rect) {
        return
    } else {
        rect.top < window.innerHeight - 100 ? setIsIntoView(true) : setIsIntoView(false)
    }
}