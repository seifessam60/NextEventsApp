import { useRouter } from "next/router";
import EventsList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data"

export default function EventsPage() {
    const router = useRouter();
    const events = getAllEvents();
    function findEventsHandler(year, month) {
        router.push(`/events/${year}/${month}`)
    }
    return (
        <>
        <EventSearch onSearch={findEventsHandler}/>
      <EventsList items={events}/>
      </>
    )
  }
  