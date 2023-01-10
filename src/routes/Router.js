import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "../pages/Cart/cart"
import Feed from "../pages/Feed/feed"
import Login from "../pages/Login/login"
import Profile from "../pages/Profile/profile"
import Restaurant from "../pages/Restaurant/restaurant"
import SignUpAdress from "../pages/SignUpAdress/signUpAdress"
import SignUp from "../pages/SignUp/signUp"
import AdressEdit from "../pages/AdressEdit/adressEdit"
import ProfileEdit from "../pages/ProfileEdit/profileEdit"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="/feed"element={<Feed/>}/>
                <Route path="/signUp"element={<SignUp/>}/>
                <Route path="/signUp/adress"element={<SignUpAdress/>}/>
                <Route path="/adressEdit/:id"element={<AdressEdit/>}/>
                <Route path="/feed/:restaurantId"element={<Restaurant/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/profileEdit/:id" element={<ProfileEdit/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router