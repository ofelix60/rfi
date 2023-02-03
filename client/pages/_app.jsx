import ApiProvider from '../contexts/ApiContext';
import RoomProvider from '../contexts/RoomContext';

export default function App({ Component, pageProps }) {
  return (
    <ApiProvider>
      <RoomProvider>
        <Component {...pageProps} />
      </RoomProvider>
    </ApiProvider>
  );
}
