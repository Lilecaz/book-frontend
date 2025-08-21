"use client";

import { BookOpen, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link"
import React from "react";

interface AppHeaderProps {
    title?: string;
    children?: React.ReactNode;
    showLogout?: boolean;
    homePage?: boolean;
}

export default function AppHeader({ title = "BookAPI", children, showLogout = true, homePage = false }: AppHeaderProps) {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/");
    };

    return (
        <>
            {homePage ? (
                <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <BookOpen className="h-8 w-8 text-slate-900" />
                            <h1 className="text-2xl font-bold text-slate-900">BookAPI</h1>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="ghost" asChild>
                                <Link href="/login">Connexion</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/register">S'inscrire</Link>
                            </Button>
                        </div>
                    </div>
                </header>
            ) : (<header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <a href="/dashboard" className="flex items-center gap-2">
                            <BookOpen className="h-8 w-8 text-slate-900"
                            />
                            <h1 className="text-2xl font-bold text-slate-900">{
                                title
                            }</h1>
                        </a >
                    </div >
                    <div className="flex items-center gap-2">
                        {children}
                        {showLogout && (
                            <Button variant="outline" onClick={handleLogout}>
                                <LogOut className="h-4 w-4 mr-2" />
                                Déconnexion
                            </Button>
                        )}
                    </div>
                </div >
            </header >)
            }
        </>

    );
}