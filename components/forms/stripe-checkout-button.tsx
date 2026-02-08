"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export const StripeCheckoutButton = ({
  tier,
  label = "Pay & Book",
  email
}: {
  tier: string;
  label?: string;
  email?: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier, email })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Unable to start checkout.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <Button onClick={onClick} disabled={loading}>
        {loading ? "Redirecting..." : label}
      </Button>
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
};
