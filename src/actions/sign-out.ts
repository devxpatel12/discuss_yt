'use server'
import * as auth from "@/auth"

export const signOut = async () => {
    return auth.signOut();
}