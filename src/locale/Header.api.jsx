export  const headers = () => {
    const config = {
        headers : {
            /** change the userToken */
            'Content-Type': "application/json; charset=utf-8",
            token : localStorage.getItem('token')
        }
    }
    return config
}
export default headers()


