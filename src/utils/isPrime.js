export default function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i + 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}
