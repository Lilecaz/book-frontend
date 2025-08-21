"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsLoggedIn(!!localStorage.getItem("token"));
        }
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Affiche le header seulement quand l'état est connu */}
            {isLoggedIn !== null && <AppHeader homePage={!isLoggedIn} />}
            <main className="px-4 py-16 flex flex-col items-center justify-center text-center">
                <BookOpen className="h-16 w-16 text-slate-400 mb-6" />
                <h1 className="text-4xl font-bold mb-4 text-slate-900">Page introuvable</h1>
                <p className="text-slate-600 mb-8">
                    Oups, la page que vous cherchez n’existe pas ou a été déplacée.
                </p>
                {isLoggedIn === null ? null : isLoggedIn ? (
                    <Button asChild>
                        <Link href="/dashboard">Retour à la bibliothèque</Link>
                    </Button>
                ) : (
                    <Button asChild>
                        <Link href="/">Retour à l'accueil</Link>
                    </Button>
                )}
            </main>
            <AppFooter />
        </div>
    );
}