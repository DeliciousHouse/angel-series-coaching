"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const EventRegisterForm = ({
  eventId,
  eventTitle
}: {
  eventId: string;
  eventTitle: string;
}) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, eventId })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Unable to register.");
      }
      setStatus("success");
      setMessage(`You're registered for ${eventTitle}. Check your email soon.`);
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`name-${eventId}`}>Name</Label>
          <Input id={`name-${eventId}`} name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`email-${eventId}`}>Email</Label>
          <Input id={`email-${eventId}`} name="email" type="email" required />
        </div>
      </div>
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Registering..." : "Register for free"}
      </Button>
      {message ? <p className="text-sm text-muted-foreground">{message}</p> : null}
    </form>
  );
};
