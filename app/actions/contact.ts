'use server'
import { error } from "console";
import { createContact, deleteContact } from "../api/contact";
import { revalidatePath } from "next/cache";
import { getSession } from "../_lib/session";
import { ContactType } from "../types/contact";
import { updateContact } from "../api/contact";

export const createContactAction = async(
     prevstate: any,
     formData: FormData
    ) => {
     if(!formData.get("name")) {
      return { error: `Name is missing` };
     }

     const user = await getSession();

     const newContact:ContactType = {
       name: formData.get("name") as string,
       email: formData.get("email") as string,
       userId: user?.id,
     }

     try {
         await createContact(newContact);
         revalidatePath("/contact");
         return{ success: true };
     } catch (error) {
          console.log("Error creating contact : ", error);
      return { error: "Failed to create contact" };
     }
 };

 export const updateContactAction = async(
     prevstate: any,
     formData: FormData
    ) => {
      const id = formData.get("id") as string;
     const user = await getSession();

     const updatedContact:ContactType = {
       name: formData.get("name") as string,
       email: formData.get("email") as string,
       userId: user?.id,
     }

     try {
         await updateContact( id, updatedContact);
         revalidatePath("/contact");
         return{ success: true };
     } catch (error) {
          console.log("Error updating contact : ", error);
      return { error: "Failed to update contact" };
     }
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
     console.log("Error deleting contact : ", error);
      return { error: "Failed to delete contact" };
    }
 };

