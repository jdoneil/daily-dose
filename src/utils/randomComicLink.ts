export function getRandomComicLink(total = 30): string {
  return `/comic/${Math.floor(Math.random() * total) + 1}`;
}
