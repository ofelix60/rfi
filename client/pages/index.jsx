import Link from 'next/link';

export default function index() {
  return (
    <div>
      <Link href='/create'>Create a room</Link>
      <Link href='/join'>Join a room</Link>
    </div>
  );
}
