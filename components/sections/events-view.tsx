"use client";

import { useMemo } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  parseISO
} from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EventItem } from "@/lib/content";
import { StripeCheckoutButton } from "@/components/forms/stripe-checkout-button";
import { EventRegisterForm } from "@/components/forms/event-register-form";

const formatDate = (value: string) => format(parseISO(value), "MMM d, yyyy");
const formatTime = (value: string) => format(parseISO(value), "h:mm a");

export const EventsView = ({ events }: { events: EventItem[] }) => {
  const calendarDays = useMemo(() => {
    const now = new Date();
    const start = startOfWeek(startOfMonth(now), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(now), { weekStartsOn: 1 });
    return eachDayOfInterval({ start, end });
  }, []);

  const eventsByDay = useMemo(() => {
    const map = new Map<string, EventItem[]>();
    events.forEach((event) => {
      const key = format(parseISO(event.start), "yyyy-MM-dd");
      const list = map.get(key) || [];
      list.push(event);
      map.set(key, list);
    });
    return map;
  }, [events]);

  return (
    <Tabs defaultValue="calendar">
      <TabsList>
        <TabsTrigger value="calendar">Calendar</TabsTrigger>
        <TabsTrigger value="list">List</TabsTrigger>
      </TabsList>
      <TabsContent value="calendar">
        <div className="grid grid-cols-7 gap-2 text-xs uppercase text-muted-foreground">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="py-2 text-center">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day) => {
            const key = format(day, "yyyy-MM-dd");
            const dayEvents = eventsByDay.get(key) || [];
            return (
              <div
                key={key}
                className={`min-h-[110px] rounded-xl border border-border p-2 text-sm ${
                  isSameMonth(day, new Date()) ? "bg-white" : "bg-muted"
                }`}
              >
                <div className="text-xs font-semibold text-muted-foreground">
                  {format(day, "d")}
                </div>
                <div className="mt-2 space-y-1">
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className="rounded-lg bg-brand-50 px-2 py-1 text-[11px] font-semibold text-brand-700"
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </TabsContent>
      <TabsContent value="list">
        <div className="space-y-6">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {formatDate(event.start)} · {formatTime(event.start)}
                  {event.end ? ` - ${formatTime(event.end)}` : ""}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{event.description}</p>
                <div className="text-sm text-muted-foreground">
                  <p>Location: {event.location}</p>
                  {event.capacity ? <p>Capacity: {event.capacity}</p> : null}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-semibold">
                    {event.price > 0 ? `$${event.price}` : "Free"}
                  </p>
                  {event.price > 0 ? (
                    <StripeCheckoutButton tier={`event:${event.id}`} label="Register" />
                  ) : (
                    <EventRegisterForm eventId={event.id} eventTitle={event.title} />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};
