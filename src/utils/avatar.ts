export const getRandomAvatar = async () => {
  // const { imgurl: image }: { imgurl: string } = await (
  //   await fetch('https://api.uomg.com/api/rand.avatar?format=json')
  // ).json();
  const image = `https://api.sunweihu.com/api/sjtx/api.php?random=${Math.random()}`;
  return image;
}
