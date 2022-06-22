import formatDate from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

export const getInitials = (name: string): string => {
  const initials = name.match(/\b\w/g) || [];
  return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
};
export const getFormattedDate = (date: string): string =>
  formatDate(parseISO(date), 'MMMM d, yyyy');
