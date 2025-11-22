"use client";
import { Button, Textarea } from "@heroui/react";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-1">
      <Textarea
        className="max-w-xs"
        placeholder="What events are you looking to add to your calendar?"
      />
      <Button>Show me suggestions</Button>
    </div>
  );
}
