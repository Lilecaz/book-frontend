"use client";

import { useEffect, useState } from "react";
import AppHeader from "@/components/AppHeader";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, BookOpen } from "lucide-react";
import { fetchBookDetails } from "@/lib/api";

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
                            <BookOpen className="h-16 w-16 mx-auto" />
                        </CardContent>
                    </Card>
                )}
            </div>
        </>

    );
}