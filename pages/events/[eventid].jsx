import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import EventSummary from "../../components/event-detail/event-summary";

export default function EventsDetailsPage() {
  const router = useRouter();
  const eventId = router.query.eventid;
  const event = getEventById(eventId);
  if (!event){
    return <p>No event found!</p>
  }
    return (
      <>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      </>
    )
  }
  