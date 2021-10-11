export default function indicator(item) {
  const { health } = item;

  if (health > 50) {
    return 'healthy';
  }
  if (health < 15) {
    return 'critical';
  }

  return 'wounded';
}
