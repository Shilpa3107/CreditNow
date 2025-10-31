"use client";

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from 'react';

export function ChatbotFab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-16 w-16 flex-col items-center justify-center space-y-1 rounded-full bg-primary shadow-lg hover:bg-primary/90"
        aria-label="Open Chatbot TIA"
      >
        <MessageCircle className="h-7 w-7 text-primary-foreground" />
        <span className="text-xs font-bold text-primary-foreground">TIA</span>
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Chat with TIA</DialogTitle>
            <DialogDescription>
              Our virtual assistant is here to help you with your loan queries.
            </DialogDescription>
          </DialogHeader>
          <div className="flex h-64 items-center justify-center rounded-md bg-muted">
            <p className="text-muted-foreground">Chat interface coming soon.</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
