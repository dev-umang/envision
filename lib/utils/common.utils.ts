export const maskableKey = (key: string, keys: string[]): boolean => {
  if (!key) return false;
  //   if (key.toLowerCase() === "vite_apikey") debugger;
  return keys
    .map((k) => k.toLowerCase())
    .some((item) =>
      key
        .replace(/[^a-zA-Z]/g, "")
        .toLowerCase()
        .includes(item)
    );
};

export const mask = (
  _str: string,
  percentage: number = 60,
  maskChar: string = "*"
): string => {
  const str = _str?.toString() ?? "";

  // If the string is too short, mask all characters
  if (str.length <= 5) return maskChar.repeat(str.length);

  // Ensure percentage is within valid range (0-100)
  percentage = Math.min(100, Math.max(0, percentage));

  // Calculate the number of characters to mask
  const maskLength = Math.floor(str.length * (percentage / 100));

  // Create a string of mask characters
  const maskedPart = maskChar.repeat(maskLength);

  // Extract the visible part of the string starting
  // from the end of the masked portion
  const visiblePart = str.slice(maskLength);

  // Concatenate the masked and visible parts
  // to form the final masked string
  return maskedPart + visiblePart;
};
