"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Users } from "lucide-react"
import { getUsers } from "@/lib/actions/user.actions"

interface User {
  $id: string
  fullName: string
  email: string
  $createdAt: string
}

export function UsersList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers()
        const mappedUsers: User[] = usersData.map((doc: any) => ({
          $id: doc.$id,
          fullName: doc.fullName,
          email: doc.email,
          $createdAt: doc.$createdAt,
        }))
        setUsers(mappedUsers)
      } catch (error) {
        console.error("Failed to fetch users:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">Manage system users and administrators</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search users..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>All Users ({filteredUsers.length})</span>
            </CardTitle>
            <CardDescription>List of all registered users in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredUsers.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">No users found</p>
              ) : (
                filteredUsers.map((user) => (
                  <div key={user.$id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        {user.fullName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{user.fullName}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Joined {new Date(user.$createdAt).toLocaleDateString()}
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
