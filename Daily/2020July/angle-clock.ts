function angleClock(hour: number, minutes: number): number {
  const hourAngle = hour === 12 ? minutes * 0.5 : hour * 30 + minutes * 0.5;
  const minutesAngle = minutes * 6;
  const angle = Math.abs(minutesAngle - hourAngle);
  return angle >= 180 ? 360 - angle : angle;
}
