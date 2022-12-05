function removeZeroToLeft(){
    const input = [1, -3, 2, 0, 5, 0, 10, 0, -1]
    const filter = input.filter(i => i !== 0)
    return [...Array(input.length - filter.length).fill(0),...filter]
}
