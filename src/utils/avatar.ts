import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

export const getRandomGenerator = () => {
  return generator.generateRandomAvatar();
}
