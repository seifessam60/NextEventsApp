import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventsList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";

export default function EventsSlugPage() {
    const router = useRouter();
    const filterData = router.query.slug;

    if (!filterData) {
        return <p className="center">Loading....</p>;
    }

    const year = +filterData[0];
    const month = +filterData[1];

    if (isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12) {
        return <>
        <ErrorAlert>Invalid Filter</ErrorAlert>
        <div className="center">
            <Button link={'/events'}>Show All Events</Button>
        </div>
        </>;;
    }

    const filteredEvents = getFilteredEvents({year:year, month:month})
    if (!filteredEvents || filteredEvents.length === 0) {
        return <>
        <ErrorAlert>No Events Found</ErrorAlert>
        <div className="center">
            <Button link={'/events'}>Show All Events</Button>
        </div>
        </>;
    }

    return (
      <>
        <ResultsTitle date={new Date(year, month-1)}/>
        <EventsList items={filteredEvents}/>
      </>
    )
  }
  