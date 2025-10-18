export const getFeesStatus = (totalFees: number, totalReceived: number) => {
    if (totalFees == totalReceived) {
        return 'row-full-paid'
    } else if (totalReceived == 0) {
        return 'row-not-paid'
    } else {
        return 'row-partial-paid'
    }
}