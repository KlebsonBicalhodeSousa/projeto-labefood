export const goToLogin = (navigate) => {
    navigate("/")
}
export const goToFeed = (navigate) => {
    navigate("/feed")
}
export const goToSignUp = (navigate) => {
    navigate("/signUp")
}
export const goToSignUpAdress = (navigate) => {
    navigate("/signUp/adress")
}
export const goToAdressEdit = (navigate, id) => {
    navigate(`/adressEdit/${id}`)
}
export const goToRestaurant = (navigate, id) => {
    navigate(`/feed/${id}`)
}