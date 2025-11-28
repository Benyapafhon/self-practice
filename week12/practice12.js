export function formatUtcDateToBrowserLocal(utcDateString) {
  const date = new Date(utcDateString);

  // Get the user's browser's IANA timezone name (e.g., "Asia/Bangkok", "America/New_York")
  const userTimeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Options for formatting the date and time
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // Ensures 24-hour format
    // timeZone is omitted here to use the browser's default local timezone
  };

  // Create a single DateTimeFormat instance
  // 'en-GB' locale ensures DD/MM/YYYY for the date part
  const dateTimeFormatter = new Intl.DateTimeFormat('en-GB', options);

  // Format the date
  const formattedDateTime = dateTimeFormatter.format(date);

  // Split the formatted string into date and time parts for reconstruction
  // Example: "10/11/2025, 21:15:16"
  const [formattedDate, formattedTime] = formattedDateTime.split(', ');

  return `${formattedDate}, ${formattedTime} (${userTimeZoneName})`;
}