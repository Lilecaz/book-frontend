import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Shield, Zap } from "lucide-react"
import AppFooter from "@/components/AppFooter"
import AppHeader from "@/components/AppHeader"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <AppHeader homePage={true} />

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm mb-6">
            <Zap className="h-4 w-4" />
            API Simple et Efficace
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Gérez votre bibliothèque
            <br />
            <span className="text-slate-600">en toute simplicité</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Une API moderne pour organiser vos livres. Authentification sécurisée, interface intuitive et gestion
            complète de votre collection.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/register">Commencer gratuitement</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/login">Se connecter</Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-slate-900 mb-4" />
              <CardTitle>Gestion complète</CardTitle>
              <CardDescription>
                Ajoutez, modifiez et organisez vos livres avec une interface simple et intuitive.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Shield className="h-12 w-12 text-slate-900 mb-4" />
              <CardTitle>Sécurisé</CardTitle>
              <CardDescription>
                Authentification JWT robuste pour protéger vos données et votre bibliothèque personnelle.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-slate-900 mb-4" />
              <CardTitle>Multi-utilisateurs</CardTitle>
              <CardDescription>
                Chaque utilisateur dispose de sa propre bibliothèque privée et sécurisée.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-slate-900 text-white border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Créez votre compte et commencez à organiser votre bibliothèque dès maintenant.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">Créer un compte gratuit</Link>
            </Button>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <AppFooter />
    </div>
  )
}
