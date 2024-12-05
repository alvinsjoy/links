import { IconType } from 'react-icons';
import {
  FaGlobe,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRedditAlien,
  FaInstagram,
  FaDiscord,
  FaSpotify,
  FaStackOverflow,
  FaHackerrank,
  FaBluesky,
} from 'react-icons/fa6';
import { SiWakatime, SiLeetcode } from 'react-icons/si';

interface LinkItem {
  title: string;
  description: string;
  href: string;
  icon: IconType;
}

interface Links {
  title: string;
  links: LinkItem[];
}

export const Links: Links[] = [
  {
    title: 'Primary',
    links: [
      {
        title: 'Portfolio',
        description: 'Check out my portfolio',
        href: 'https://alvin.is-a.dev',
        icon: FaGlobe,
      },
      {
        title: 'Email',
        description: 'Get in touch',
        href: 'mailto:hi@alvin.is-a.dev',
        icon: FaEnvelope,
      },
      {
        title: 'GitHub',
        description: 'Browse my open-source contributions and projects',
        href: 'https://github.com/alvinsjoy',
        icon: FaGithub,
      },
      {
        title: 'LinkedIn',
        description: 'Connect with me',
        href: 'https://linkedin.com/in/alvinsjoy',
        icon: FaLinkedin,
      },
    ],
  },
  {
    title: 'Coding Profiles',
    links: [
      {
        title: 'LeetCode',
        description: 'View my LeetCode profile',
        href: 'https://leetcode.com/u/alvinjoy',
        icon: SiLeetcode,
      },
      {
        title: 'HackerRank',
        description: 'Check out my HackerRank profile',
        href: 'https://www.hackerrank.com/alvinjoy',
        icon: FaHackerrank,
      },
      {
        title: 'StackOverflow',
        description: 'See my StackOverflow profile',
        href: 'https://stackoverflow.com/users/23590914',
        icon: FaStackOverflow,
      },
      {
        title: 'WakaTime',
        description: 'Explore my coding activity and language stats',
        href: 'https://wakatime.com/@alvinjoy',
        icon: SiWakatime,
      },
    ],
  },
  {
    title: 'Social Media',
    links: [
      {
        title: 'X',
        description: 'Follow me on X/Twitter',
        href: 'https://x.com/_alvinjoy_',
        icon: FaXTwitter,
      },
      {
        title: 'Instagram',
        description: 'Follow/DM me on Instagram',
        href: 'https://instagram.com/_alvinjoy_',
        icon: FaInstagram,
      },
      {
        title: 'Discord',
        description: 'Talk to me on Discord',
        href: 'https://discord.com/users/825382504353234954',
        icon: FaDiscord,
      },
      {
        title: 'Reddit',
        description: 'Follow me on Reddit',
        href: 'https://reddit.com/u/alvinjoy',
        icon: FaRedditAlien,
      },
      {
        title: 'Bluesky',
        description: 'Follow me on Bluesky',
        href: 'https://bsky.app/profile/alvin.is-a.dev',
        icon: FaBluesky,
      },
    ],
  },
  {
    title: 'Entertainment',
    links: [
      {
        title: 'Spotify',
        description: 'Discover my playlists and music taste',
        href: 'https://open.spotify.com/user/lwsg3h1l2wm80gp22bfiv1npi',
        icon: FaSpotify,
      },
    ],
  },
];
