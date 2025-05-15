// app/components/Sidebar.tsx
import Link from 'next/link';

interface SidebarProps {
    onClose: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white shadow-lg">
                <div className="p-4">
                    <button
                        className="text-gray-700"
                        onClick={onClose}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-4 space-y-4">
                    <Link href="/auth/sign-in" className="block py-2 text-gray-700 hover:text-blue-600">
                        Sign In
                    </Link>
                    <Link href="/auth/sign-up" className="block py-2 text-gray-700 hover:text-blue-600">
                        Sign Up
                    </Link>
                    <Link href="/premium" className="block py-2 text-gray-700 hover:text-blue-600">
                        Premium
                    </Link>
                    <Link href="/settings" className="block py-2 text-gray-700 hover:text-blue-600">
                        Settings
                    </Link>
                </div>
            </div>
        </div>
    );
}
