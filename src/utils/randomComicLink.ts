export function getRandomComicLink(total = 9): string {
  return `/comic/${Math.floor(Math.random() * total) + 1}`;
}
