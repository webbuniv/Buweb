'use server';

import { createAdminClient } from '@/lib/appwrite';
import { appwriteConfig } from '@/lib/appwrite/config';
import { ID, Query, Models} from 'node-appwrite';
import { constructFileUrl, parseStringify } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import { getCurrentUser } from '@/lib/actions/user.action';
import { redirect } from 'next/navigation';
import { getNewsletterSubscribers } from "./newsletter"
import nodemailer from "nodemailer"

const handleError = (error: unknown, message: string) => {
  console.error(message, error);
  throw new Error(message);
};

interface MyDocument {
  $id: string;
  $createdAt: string;         // Creation timestamp (ISO 8601 format)
  $updatedAt: string;         // Last updated timestamp (ISO 8601 format)
  $permissions: string[];     // List of permissions for the document
  $collectionId: string;      // Collection ID the document belongs to
  $databaseId: string;        // Database ID the document belongs to
  name: string;               // Name of the document
  description: string;        // Short description of the document
  title: string;              // Title of the news article
  author: string;             // Author of the document
  date: string;               // Date the document was created or relevant (ISO 8601 format)
  file: string;               // File associated with the document (URL or ID)
  category: string;           // Category the document belongs to
  content: string;            // Full content of the document
  summary: string;            // Short summary or excerpt of the document        // Optional custom metadata (for additional info)
}


interface FormDataType {
  get: (key: string) => string | File | null;
}

interface CreateNewsResponse {
  success?: boolean;
  error?: string;
}


const sendEmailNotification = async (email: string, content: string, subject: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

    });

    const mailOptions = {
      from: '"Bugema University Data Team" <data@bugemauniv.ac.ug>',
      to: email,
      subject: subject,
      html: content,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", email, "Message ID:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Failed to send email to:", email, "Error:", error);
    return { success: false, error: "Failed to send email." };
  }
};


export async function CreateNews(previousState: any, formData: FormDataType): Promise<CreateNewsResponse> {
  const { storage, databases } = await createAdminClient()

  let fileID: string | undefined
  const file = formData.get("file") as File | null

  try {
    if (file) {
      const fileResponse = await storage.createFile(appwriteConfig.bucketId, ID.unique(), file)
      fileID = fileResponse.$id
    }

    const news = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.newsCollectionId,
      ID.unique(),
      {
        title: formData.get("title") as string,
        file: fileID,
        category: formData.get("category") as string,
        author: formData.get("author") as string,
        date: formData.get("date") as string,
        summary: formData.get("summary") as string,
        content: formData.get("content") as string,
      },
    )

    // Send email notifications
    const subscribers = await getNewsletterSubscribers();
    const emailSubject = `New Article: ${news.title}`
    const emailContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Article from Bugema University</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                  <td align="center" style="padding: 0;">
                      <table role="presentation" style="width: 600px; border-collapse: collapse; text-align: left; background-color: #ffffff;">
                          <tr>
                              <td style="padding: 20px 30px;">
                                  <img src="https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/67a9b42b0011188988a3/view?project=674dcf7b003d57db960a&mode=admin" alt="Bugema University Logo" style="width: 150px; height: auto;">
                              </td>
                          </tr>
                          <tr>
                              <td style="padding: 30px 30px 20px 30px;">
                                  <h1 style="margin: 0; color: #003366; font-size: 28px;">New Article: ${news.title}</h1>
                                  <p style="margin: 20px 0; color: #666666; font-size: 16px; line-height: 1.5;">
                                      ${news.summary}
                                  </p>
                              </td>
                          </tr>
                          <tr>
                              <td style="padding: 0 30px 30px 30px;">
                                  <h2 style="color: #003366; font-size: 22px;">Article Details:</h2>
                                  <ul style="color: #666666; font-size: 16px; line-height: 1.5;">
                                      <li>Category: ${news.category}</li>
                                      <li>Author: ${news.author}</li>
                                      <li>Date: ${news.date}</li>
                                  </ul>
                              </td>
                          </tr>
                          <tr>
                              <td style="padding: 0 30px 30px 30px;">
                                  <a href="https://www.bugemauniv.ac.ug/news/${news.$id}" style="background-color: #003366; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 5px; font-weight: bold; display: inline-block;">Read Full Article</a>
                              </td>
                          </tr>
                          <tr>
                              <td style="padding: 30px; background-color: #003366;">
                                  <p style="margin: 0; color: #ffffff; font-size: 14px; line-height: 1.5; text-align: center;">
                                      Stay connected with Bugema University:
                                      <br><br>
                                      <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Facebook</a> |
                                      <a href="https://x.com/UnivBugema" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Twitter</a> |
                                      <a href="https://www.instagram.com/bugemauniv/" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Instagram</a> |
                                      <a href="https://www.linkedin.com/school/bugema-university/" style="color: #ffffff; text-decoration: none; margin: 0 10px;">LinkedIn</a>
                                  </p>
                              </td>
                          </tr>
                          <tr>
                              <td style="padding: 30px; text-align: center; font-size: 12px; color: #666666;">
                                  <p>You're receiving this email because you subscribed to the Bugema University newsletter.</p>
                                  <p>© ${new Date().getFullYear()} Bugema University. All rights reserved.</p>
                                  <p>Bugema, Luweero, Uganda • <a href="mailto:info@bugemauniv.ac.ug" style="color: #003366;">info@bugemauniv.ac.ug</a></p>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      </body>
      </html>
    `

    for (const email of subscribers) {
      const emailResult = await sendEmailNotification(email, emailContent, emailSubject);
    }

    revalidatePath("/news")
    return { success: true }
  } catch (error: any) {
    const errorMessage = error.response?.message || "Failed to create news document"
    return { error: errorMessage }
  }
}


export const getNews = async  ({ 
  searchText = '',
  sort = "$createdAt-desc", 
  limit,
 }: GetNewsProps): Promise<News[]> => {
  const { databases } = await createAdminClient();
  try {
    const queries = [
      ...(searchText ? [Query.search("name", searchText)] : []),
      ...(limit ? [Query.limit(limit)] : []),
      Query.orderDesc(sort.split("-")[0]),
    ];
    const currentUser = await getCurrentUser();
  
    if (!currentUser) {
      redirect('/signin');
    }

    const news = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.newsCollectionId,
      queries
    );
    return news.documents.map((news) => ({
      $id: news.$id,
      title: news.title || 'undefined',
      file: news.file || 'undefined',
      category: news.category || 'undefined',
      date: news.date || 'undefined',
      content: news.content || 'undefined',
      summary: news.summary || 'undefined',
      author: news.author || 'undefined',
      $createdAt: new Date(news.$createdAt).getTime(),
    }))
    
  } catch (error) {
    handleError(error, "Failed to fetch News");
    return [];
  }
}

export const getNewsById = async (id: string): Promise<NewsItem | null> => {
  const { databases } = await createAdminClient();
  try {
    const news = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.newsCollectionId,
      id
    )

    return {
      id: news.$id,
      title: news.title || 'undefined',
      file: news.file || 'undefined',
      category: news.category || 'undefined',
      date: news.date || 'undefined',
      author: news.author || 'undefined',
      content: news.content || 'undefined',
      summary: news.summary || 'undefined',
    } as NewsItem;
  } catch (error) {
    handleError(error, "Failed to fetch News");
    return null; // Explicitly return null if an error occurs
  }
};

export const deleteNews = async (id: string) => {
  const currentUser = await getCurrentUser();
  
  if (!currentUser) {
    redirect('/signin');
  }

  const { databases } = await createAdminClient();

  const newsToDelete = getNewsById(id);

  if (!newsToDelete) {
    return { error: 'News not found' };
  }

  try {
    await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.newsCollectionId,
      id
    );
    revalidatePath('/news');
    return { success: true };
  } catch (error) {
    handleError(error, 'Failed to delete news');
    return { error: 'Failed to delete news' };
  }
};

export async function updateNews(
  id: string,
  formData: FormDataType
): Promise<CreateNewsResponse> {
  const { storage, databases } = await createAdminClient();

  let fileID: string | undefined;
  const file = formData.get('file') as File | null;

  try {
    if (file && file.size > 0 && file.name !== 'undefined') {
      try {
        const response = await storage.createFile(appwriteConfig.bucketId, ID.unique(), file);
        fileID = response.$id;
      } catch (error) {
        return {
          error: 'Error uploading file',
        };
      }
    } else {
      console.log('No new file provided or file is invalid. Retaining the existing file.');
    }

    // Build the updated data object
    const updatedData: Record<string, any> = {
      title: formData.get('title') as string,
      category: formData.get('category') as string,
      author: formData.get('author') as string,
      date: formData.get('date') as string,
      summary: formData.get('summary') as string,
      content: formData.get('content') as string,
    };

    if (fileID) {
      updatedData.file = fileID;
    }

    await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.newsCollectionId,
      id,
      updatedData
    );

    revalidatePath('/news');
    return { success: true };
  } catch (error: any) {
    const errorMessage = error.response?.message || 'Failed to update news document';
    return { error: errorMessage };
  }
}


export const getNewsByCreation = async () => {
  const { databases } = await createAdminClient();
  try {
    const news: Models.DocumentList<MyDocument> = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.newsCollectionId
    );

    return news;
  } catch (error) {
    console.error("Error fetching document:", error);
    throw error; 
  }
}