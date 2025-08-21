import Link from 'next/link';

export default function UnauthorizedPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
                <svg
                    className="mx-auto mb-4 h-16 w-16 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 48 48"
                >
                    <circle cx="24" cy="24" r="22" strokeWidth="4" />
                    <line x1="16" y1="16" x2="32" y2="32" strokeWidth="4" strokeLinecap="round" />
                    <line x1="32" y1="16" x2="16" y2="32" strokeWidth="4" strokeLinecap="round" />
                </svg>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Accès non autorisé</h1>
                <p className="text-gray-600 mb-6">
                    Vous n&apos;avez pas la permission d&apos;accéder à cette page.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Retour à l&apos;accueil
                </Link>
            </div>
        </div>
    );
}