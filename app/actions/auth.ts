'use server'

import axios from "axios"
import { redirect } from "next/navigation"
import { UserType } from "../types/user"


const API_URL = "http://localhost:3001"

export const login = async (formData: FormData) => {
   try {
    const response = await axios.get(`${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`
  )
    const user: UserType = response.data[0];
   } catch (error) {

   } 
}

export const logout = () => {
    redirect("/login")
}