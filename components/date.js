import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  if (!dateString) return null; // Check if dateString is provided

  const date = parseISO(dateString);
  if (isNaN(date.getTime())) return null; // Check if date is valid

  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
