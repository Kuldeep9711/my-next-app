'use server'
import { deleteContact } from "../api/contact";
import { revalidatePath } from "next/cache";

export const createContactAction = async(
     prevstate: any,
     formData: FormData
    ) => {

 };

 export const updateContactAction = async(
     prevstate: any,
     formData: FormData
    ) => {

 };

export const deleteContactAction = async(
     prevstate: any,
     formData: FormData
    ) => {
const id = formData.get("id") as string;
  try {
     await deleteContact(id);
     revalidatePath("/contact");
     return {success: true }
   } catch (error) {
     // console.log("Error deleting contact : ", error);
      return { error: "Failed to delete contact" };
    }
 };