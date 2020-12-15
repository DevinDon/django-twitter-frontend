import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

export const getRandomAvatar = () => {
  return generator.generateRandomAvatar();
}
