export const getRandomAvatar = async () => {
  const { imgurl: image }: { imgurl: string } = await (
    await fetch('https://api.uomg.com/api/rand.avatar?format=json')
  ).json();
  return image;
}
