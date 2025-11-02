/**
 * Date utilities for handling dates consistently across the codebase.
 * All functions parse YYYY-MM-DD date strings as local dates to avoid timezone conversion issues.
 */

/**
 * Parses a YYYY-MM-DD date string as a local date (not UTC) to avoid timezone conversion issues.
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns A Date object representing the date in local timezone
 */
export function parseLocalDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

/**
 * Formats a date string (YYYY-MM-DD) to a human-readable format.
 * @param dateString - Date string in YYYY-MM-DD format
 * @param options - Intl.DateTimeFormatOptions for customizing the output
 * @returns Formatted date string
 */
export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  const date = parseLocalDate(dateString);
  return date.toLocaleDateString('en-US', options);
}

/**
 * Formats a date string to a short format (e.g., "Nov 2, 2025")
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Formatted date string
 */
export function formatDateShort(dateString: string): string {
  return formatDate(dateString, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Formats a date string to a long format (e.g., "November 2, 2025")
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Formatted date string
 */
export function formatDateLong(dateString: string): string {
  return formatDate(dateString, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Compares two date strings (YYYY-MM-DD) for sorting purposes.
 * @param dateStringA - First date string
 * @param dateStringB - Second date string
 * @returns Negative if A < B, positive if A > B, 0 if equal
 */
export function compareDates(dateStringA: string, dateStringB: string): number {
  const dateA = parseLocalDate(dateStringA);
  const dateB = parseLocalDate(dateStringB);
  return dateA.getTime() - dateB.getTime();
}

/**
 * Gets the timestamp of a date string for use in sorting.
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Timestamp in milliseconds
 */
export function getDateTimestamp(dateString: string): number {
  return parseLocalDate(dateString).getTime();
}

