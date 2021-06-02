export const getExercises = async () => {
    const response = await (
        fetch('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/')
        .then(response => {
            if (!response?.ok) {
                throw new Error('Could not fetch exercises due to network error')
            }
            return response.json()
        })
    )

    return response
}