"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BookOpen, Plus, LogOut, Search, Calendar, User, Loader2, AlertCircle } from "lucide-react"
import AppHeader from "@/components/AppHeader"

interface Book {
    id: string
    title: string
    author: string
    publishedDate: string
    isAvailable: boolean
}

export default function Dashboard() {
    const [books, setBooks] = useState<Book[]>([])
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
    const [searchTerm, setSearchTerm] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const [isAddingBook, setIsAddingBook] = useState(false)
    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        publishedDate: "",
        isAvailable: true,
    })
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            router.push("/unauthorized")
            return
        }

        fetchBooks(token)
    }, [router])

    useEffect(() => {
        const filtered = books.filter(
            (book) =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        setFilteredBooks(filtered)
    }, [books, searchTerm])

    const fetchBooks = async (token: string) => {
        try {
            const res = await fetch("http://localhost:3000/books", {
                headers: { Authorization: `Bearer ${token}` },
            })

            if (res.ok) {
                const data = await res.json()
                setBooks(data)
            } else {
                setError("Erreur lors du chargement des livres")
            }
        } catch (err) {
            setError("Erreur de connexion au serveur")
        } finally {
            setIsLoading(false)
        }
    }

    const handleAddBook = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsAddingBook(true)

        const token = localStorage.getItem("token")
        if (!token) return

        try {
            const res = await fetch("http://localhost:3000/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newBook),
            })

            if (res.ok) {
                const addedBook = await res.json()
                setBooks([...books, addedBook])
                setNewBook({ title: "", author: "", publishedDate: "", isAvailable: true })
            } else {
                setError("Erreur lors de l'ajout du livre")
            }
        } catch (err) {
            setError("Erreur de connexion au serveur")
        } finally {
            setIsAddingBook(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        router.push("/")
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin text-slate-900 mx-auto mb-4" />
                    <p className="text-slate-600">Chargement de votre bibliothèque...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <AppHeader />

            <main className="container mx-auto px-4 py-8">
                {error && (
                    <Alert variant="destructive" className="mb-6">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">Total des livres</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{books.length}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">Disponibles</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">{books.filter((book) => book.isAvailable).length}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">Indisponibles</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-red-600">{books.filter((book) => !book.isAvailable).length}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input
                            placeholder="Rechercher un livre ou un auteur..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <Plus className="h-4 w-4 mr-2" />
                                Ajouter un livre
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Ajouter un nouveau livre</DialogTitle>
                                <DialogDescription>
                                    Remplissez les informations du livre à ajouter à votre bibliothèque.
                                </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleAddBook} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Titre</Label>
                                    <Input
                                        id="title"
                                        value={newBook.title}
                                        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="author">Auteur</Label>
                                    <Input
                                        id="author"
                                        value={newBook.author}
                                        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="publishedDate">Date de publication</Label>
                                    <Input
                                        id="publishedDate"
                                        type="date"
                                        value={newBook.publishedDate}
                                        onChange={(e) => setNewBook({ ...newBook, publishedDate: e.target.value })}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full" disabled={isAddingBook}>
                                    {isAddingBook ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Ajout en cours...
                                        </>
                                    ) : (
                                        "Ajouter le livre"
                                    )}
                                </Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Books Grid */}
                {filteredBooks.length === 0 ? (
                    <Card className="text-center py-12">
                        <CardContent>
                            <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                {books.length === 0 ? "Aucun livre dans votre bibliothèque" : "Aucun résultat"}
                            </h3>
                            <p className="text-slate-600 mb-6">
                                {books.length === 0
                                    ? "Commencez par ajouter votre premier livre !"
                                    : "Essayez de modifier votre recherche"}
                            </p>
                            {books.length === 0 && (
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button>
                                            <Plus className="h-4 w-4 mr-2" />
                                            Ajouter mon premier livre
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Ajouter un nouveau livre</DialogTitle>
                                            <DialogDescription>
                                                Remplissez les informations du livre à ajouter à votre bibliothèque.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <form onSubmit={handleAddBook} className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="title">Titre</Label>
                                                <Input
                                                    id="title"
                                                    value={newBook.title}
                                                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="author">Auteur</Label>
                                                <Input
                                                    id="author"
                                                    value={newBook.author}
                                                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="publishedDate">Date de publication</Label>
                                                <Input
                                                    id="publishedDate"
                                                    type="date"
                                                    value={newBook.publishedDate}
                                                    onChange={(e) => setNewBook({ ...newBook, publishedDate: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <Button type="submit" className="w-full" disabled={isAddingBook}>
                                                {isAddingBook ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Ajout en cours...
                                                    </>
                                                ) : (
                                                    "Ajouter le livre"
                                                )}
                                            </Button>
                                        </form>
                                    </DialogContent>
                                </Dialog>
                            )}
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredBooks.map((book) => (
                            <Card key={book.id} className="hover:shadow-lg transition-shadow" onClick={() => router.push(`/book/${book.id}`)}>

                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <CardTitle className="text-lg leading-tight mb-2">{book.title}</CardTitle>
                                            <CardDescription className="flex items-center gap-1">
                                                <User className="h-4 w-4" />
                                                {book.author}
                                            </CardDescription>
                                        </div>
                                        <Badge variant={book.isAvailable ? "default" : "secondary"}>
                                            {book.isAvailable ? "Disponible" : "Indisponible"}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-1 text-sm text-slate-600">
                                        <Calendar className="h-4 w-4" />
                                        {new Date(book.publishedDate).toLocaleDateString("fr-FR")}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}
