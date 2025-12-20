"use server"
import { createAdminClient } from '@/lib/appwrite';
import { appwriteConfig } from '@/lib/appwrite/config';
import { staffItem } from '@/lib/types';
import { Query } from 'node-appwrite';

const handleError = (error: unknown, message: string) => {
  console.error(message, error)
  throw new Error(message)
}

export const getAllStaff = async () => {
  const { databases } = await createAdminClient()
  try {

    const staff = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.staffCollectionId
)
    return staff.documents.map((staff) => ({
        id: staff.$id,
        name: staff.name,
        photoUrl: staff.photoUrl,
        department: staff.department,
        school: staff.school,
        role: staff.role,
        qualification: staff.qualification,
        isDean: staff.isDean,
        isHOD: staff.isHOD,
        date: staff.$createdAt,
        UploadedBy: staff.UploadedBy ||"Anonymous", 
    })) as staffItem[]

  } catch (error) {
    handleError(error, "Failed to fetch Images")
    return []
  }
}
export const getDeanBySchool = async(school:string)=>{
        const { databases } = await createAdminClient()
        try {
            const deanResult = await databases.listDocuments(
                appwriteConfig.databaseId,
                appwriteConfig.staffCollectionId,
                [
                    Query.equal("isDean", true),
                    Query.equal("school", school)
                ]
            )
            // Assuming you want the first dean found
            if (deanResult.documents.length === 0) return null;
            const staff = deanResult.documents[0];
            return {
                id: staff.$id,
                name: staff.name,
                photoUrl: staff.photoUrl,
                department: staff.department,
                school: staff.school,
                role: staff.role,
                qualification: staff.qualification,
                isDean: staff.isDean,
                isHOD: staff.isHOD,
                date: staff.$createdAt,
                UploadedBy: staff.UploadedBy || "Anonymous",
            } as staffItem;
        } catch (error) {
            handleError(error, "Failed to fetch Dean ");
            return null;
        }
}
export const getAdmin = async()=>{
        const { databases } = await createAdminClient()
        try {
            const adminResult = await databases.listDocuments(
                appwriteConfig.databaseId,
                appwriteConfig.staffCollectionId,
                [
                    Query.equal("isAdmin", true)
                ]
            )
            // Assuming you want the first dean found
            if (adminResult.documents.length === 0) return null;
            const staff = adminResult.documents.map(
                (doc) => ({
                    id: doc.$id,
                    name: doc.name,
                    photoUrl: doc.photoUrl,
                    department: doc.department,
                    school: doc.school,
                    role: doc.role,
                    qualification: doc.qualification,
                    isDean: doc.isDean,
                    isHOD: doc.isHOD,
                    isAdmin:doc.isAdmin,
                    date: doc.$createdAt,
                    UploadedBy: doc.UploadedBy || "Anonymous",
                })
            )
            return staff;
        } catch (error) {
            handleError(error, "Failed to fetch Admin ");
            return null;
        }
}