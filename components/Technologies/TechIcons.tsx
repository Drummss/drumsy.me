import { TechIconProps, Technology } from '.';
import {
  DiscordJSIcon,
  DockerIcon,
  LaravelIcon,
  NestJSIcon,
  NextJSIcon,
  PrismaIOIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from '../Icons';
import TechIcon from './TechIcon';

const createTechIcon = (technology: Technology) => {
  return (props: Partial<TechIconProps>) => (
    <TechIcon technology={technology} {...props} />
  );
};

export const TechIconDiscordJS = createTechIcon({
  icon: DiscordJSIcon,
  label: 'Discord',
  link: 'https://discord.js.org/',
});

export const TechIconDocker = createTechIcon({
  icon: () => <DockerIcon color='docker' />,
  label: 'Docker',
  link: 'https://www.docker.com/',
});

export const TechIconLaravel = createTechIcon({
  icon: LaravelIcon,
  label: 'Laravel',
  link: 'https://laravel.com/',
});

export const TechIconNestJS = createTechIcon({
  icon: () => <NestJSIcon color='nestjs' />,
  label: 'NestJS',
  link: 'https://nestjs.com/',
});

export const TechIconNextJS = createTechIcon({
  icon: NextJSIcon,
  label: 'NextJS',
  link: 'https://nextjs.org/',
});

export const TechIconPrismaIO = createTechIcon({
  icon: PrismaIOIcon,
  label: 'Prisma.io',
  link: 'https://www.prisma.io/',
});

export const TechIconReactJS = createTechIcon({
  icon: () => <ReactIcon color='react' />,
  label: 'ReactJS',
  link: 'https://reactjs.org/',
});

export const TechIconTailwind = createTechIcon({
  icon: TailwindIcon,
  label: 'TailwindCSS',
  link: 'https://tailwindcss.com/',
});

export const TechIconTypeScript = createTechIcon({
  icon: () => <TypeScriptIcon color='typescript' />,
  label: 'TypeScript',
  link: 'https://www.typescriptlang.org/',
});
