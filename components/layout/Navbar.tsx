"use client"

import * as React from "react"
import Link from "next/link"
import NextImage from "next/image"
import { Menu, Moon, Sun, Phone } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"

const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Nosotros", href: "/#nosotros" },
    { name: "Contacto", href: "/#contacto" },
]

export function Navbar() {
    const { setTheme, theme } = useTheme()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <img
                        src="/images/logo.webp"
                        alt="Danchin Logo"
                        width="40"
                        height="40"
                        className="h-10 w-auto object-contain"
                        fetchPriority="high"
                    />
                    <span className="text-xl font-bold text-primary tracking-tight hidden sm:block">Danchin</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="transition-colors hover:text-primary text-foreground/60"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="mr-2"
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>

                    <div className="hidden md:block">
                        <Button className="font-semibold bg-primary hover:bg-primary/90 text-primary-foreground gap-2 transition-all shadow-md hover:shadow-lg" asChild>
                            <Link href="https://wa.me/51936000728?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20cita." target="_blank">
                                <Phone className="h-4 w-4" />
                                <span>Reservar</span>
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Navigation */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="pl-1 pr-0">
                            <div className="mobile-nav px-7 py-4">
                                <Link
                                    href="/"
                                    className="flex items-center"
                                >
                                    <span className="font-bold text-lg">Danchin</span>
                                </Link>
                            </div>
                            <div className="flex flex-col space-y-3 px-7">
                                {navItems.map((item) => (
                                    <SheetClose key={item.name} asChild>
                                        <Link
                                            href={item.href}
                                            className="block text-lg font-medium py-2 hover:text-primary transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </SheetClose>
                                ))}
                                <div className="pt-4">
                                    <Button className="w-full font-semibold bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-md" asChild>
                                        <Link href="https://wa.me/51936000728?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20cita." target="_blank">
                                            <Phone className="h-4 w-4" />
                                            <span>Reservar Cita</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
