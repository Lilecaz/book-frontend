"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, BookOpen, Pencil, Trash2 } from "lucide-react";
import { fetchBookDetails, updateBook, deleteBook } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

interface Book {
    id: string;
    title: string;
    author: string;
    publishedDate: string;
    isAvailable: boolean;
}

export default function BookDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const [book, setBook] = useState<Book | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [editOpen, setEditOpen] = useState(false);
    const [editBook, setEditBook] = useState<Partial<Book>>({});
    const [deleteLoading, setDeleteLoading] = useState(false);

    useEffect(() => {
        if (id) {
            const getBookDetails = async () => {
                try {
                    const data = await fetchBookDetails(id);
                    setBook(data);
                } catch (err) {
                    setError("Erreur lors du chargement des détails du livre");
                } finally {
                    setIsLoading(false);
                }
            };
            getBookDetails();
        } else {
            setIsLoading(false);
            setError("Aucun identifiant de livre fourni.");
        }
    }, [id]);

    const handleEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!id) return;
        try {
            const updated = await updateBook(id, editBook);
            setBook(updated);
            setEditOpen(false);
        } catch {
            setError("Erreur lors de la modification du livre");
        }
    };

    const handleDelete = async () => {
        if (!id) return;
        setDeleteLoading(true);
        try {
            await deleteBook(id);
            router.push("/dashboard");
        } catch {
            setError("Erreur lors de la suppression du livre");
        } finally {
            setDeleteLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin" />
            </div>
        );
    }

    if (error) {
        return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
    }

    return (
        <>
            <AppHeader />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
                {book && (
                    <Card className="max-w-md mx-auto">
                        <CardHeader>
                            <CardTitle className="text-2xl">{book.title}</CardTitle>
                            <CardDescription>
                                <div>Auteur: {book.author}</div>
                                <div>Date de publication: {new Date(book.publishedDate).toLocaleDateString("fr-FR")}</div>
                                <div>Status: {book.isAvailable ? "Disponible" : "Indisponible"}</div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <BookOpen className="h-16 w-16 mx-auto mb-4" />
                            <div className="flex gap-2 justify-center mt-4">
                                {/* Modifier */}
                                <Dialog open={editOpen} onOpenChange={setEditOpen}>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="sm" onClick={() => setEditBook(book)}>
                                            <Pencil className="h-4 w-4 mr-1" /> Modifier
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Modifier le livre</DialogTitle>
                                        </DialogHeader>
                                        <form className="space-y-4" onSubmit={handleEdit}>
                                            <Input
                                                value={editBook.title || ""}
                                                onChange={e => setEditBook({ ...editBook, title: e.target.value })}
                                                placeholder="Titre"
                                                required
                                            />
                                            <Input
                                                value={editBook.author || ""}
                                                onChange={e => setEditBook({ ...editBook, author: e.target.value })}
                                                placeholder="Auteur"
                                                required
                                            />
                                            <Input
                                                type="date"
                                                value={editBook.publishedDate ? editBook.publishedDate.slice(0, 10) : ""}
                                                onChange={e => setEditBook({ ...editBook, publishedDate: e.target.value })}
                                                required
                                            />
                                            <Button type="submit" className="w-full">Enregistrer</Button>
                                        </form>
                                    </DialogContent>
                                </Dialog>
                                {/* Supprimer */}
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="destructive" size="sm">
                                            <Trash2 className="h-4 w-4 mr-1" /> Supprimer
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Supprimer ce livre ?</DialogTitle>
                                        </DialogHeader>
                                        <p>Cette action est irréversible.</p>
                                        <Button
                                            variant="destructive"
                                            className="w-full"
                                            onClick={handleDelete}
                                            disabled={deleteLoading}
                                        >
                                            {deleteLoading ? "Suppression..." : "Confirmer la suppression"}
                                        </Button>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
            <AppFooter />
        </>
    );
}