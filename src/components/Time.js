import { DateTime } from 'luxon';

function Time() {
  return (
    <div className='text-red-500 animate-pulse'>
      {DateTime.now().toLocaleString()}
    </div>
  );
}
export default Time;
