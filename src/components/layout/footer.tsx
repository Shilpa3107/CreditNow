"use client";

import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t bg-background">
      <div className="container max-w-screen-2xl py-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 flex flex-col space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline">CreditNow</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for quick and easy loans.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Products</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Two Wheeler Loan</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Used Car Loan</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Tractor Loan</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Personal Loan</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {year} CreditNow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
