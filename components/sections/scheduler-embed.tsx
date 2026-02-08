"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const SchedulerEmbed = () => {
  const url = process.env.NEXT_PUBLIC_SCHEDULER_EMBED_URL;

  if (!url) {
    return (
      <Card>
        <CardContent className="space-y-4 p-6">
          <h3 className="text-lg font-semibold">Scheduler unavailable</h3>
          <p className="text-sm text-muted-foreground">
            The booking scheduler is not configured yet. Please contact us and
            we will set up your session.
          </p>
          <Button asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
      <iframe
        src={url}
        title="Schedule your session"
        className="h-[720px] w-full"
      />
    </div>
  );
};
