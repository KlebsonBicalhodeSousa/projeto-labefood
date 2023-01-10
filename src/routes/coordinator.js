export const goToLogin = (navigate) => {
    navigate("/")
}
export const goToFeed = (navigate) => {
    navigate("/feed")
}
export const goToBack = (navigate) => {
    navigate(-1)
}
export const goToProfile = (navigate) => {
    navigate("/profile")
}
export const goToSignUp = (navigate) => {
    navigate("/signUp")
}
export const goToCart = (navigate) => {
    navigate("/cart")
}
export const goToSignUpAdress = (navigate) => {
    navigate("/signUp/adress")
}
export const goToAdressEdit = (navigate, id) => {
    navigate(`/adressEdit/${id}`)
}
export const goToProfileEdit = (navigate, id) => {
    navigate(`/profileEdit/${id}`)
}
export const goToRestaurant = (navigate, id) => {
    navigate(`/feed/${id}`)
}