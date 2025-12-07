import StudentEventTable from './components/StudentEventTable';
import MessageAlert from '../../components/common/MessageAlert';

const BrowseEventsPage = ({ events, message, loading, onJoin }) => (
  <div>
    <h2>Browse Events</h2>
    <MessageAlert message={message} />
    {loading ? (
      <p>Loading...</p>
    ) : (
      <StudentEventTable events={events} type="all" onAction={onJoin} />
    )}
  </div>
);

export default BrowseEventsPage;
