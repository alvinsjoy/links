'use client';

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
import { LinkCard } from './link-card';
import { title } from 'process';

const links = [
  {
    title: 'Portfolio',
    description: 'Check out my portfolio',
    href: 'https://alvin.is-a.dev',
    icon: FaGlobe,
  },
  {
    title: 'Email',
    description: 'Send me an email',
    href: 'mailto:hi@alvin.is-a.dev',
    icon: FaEnvelope,
  },
  {
    title: 'GitHub',
    description: 'Check out my projects',
    href: 'https://github.com/alvinsjoy',
    icon: FaGithub,
  },
  {
    title: 'LinkedIn',
    description: 'Connect with me',
    href: 'https://linkedin.com/in/alvinsjoy',
    icon: FaLinkedin,
  },
  {
    title: 'X',
    description: 'Follow me on X/Twitter',
    href: 'https://x.com/_alvinjoy_',
    icon: FaXTwitter,
  },
  {
    title: 'Instagram',
    description: 'Follow me on Instagram',
    href: 'https://instagram.com/_alvinjoy_',
    icon: FaInstagram,
  },
  {
    title: 'Reddit',
    description: 'Follow me on Reddit',
    href: 'https://reddit.com/u/alvinjoy',
    icon: FaRedditAlien,
  },
  {
    title: 'Discord',
    description: 'Talk to me on Discord',
    href: 'https://discord.com/users/825382504353234954',
    icon: FaDiscord,
  },
  {
    title: 'Bluesky',
    description: 'Follow me on Bluesky',
    href: 'https://bsky.app/profile/alvin.is-a.dev',
    icon: FaBluesky,
  },
  {
    title: 'Leetcode',
    description: 'Check out my Leetcode',
    href: 'https://leetcode.com/u/alvinjoy',
    icon: SiLeetcode,
  },
  {
    title: 'HackerRank',
    description: 'Check out my HackerRank',
    href: 'https://www.hackerrank.com/alvinjoy',
    icon: FaHackerrank,
  },
  {
    title: 'Wakatime',
    description: 'See my coding stats',
    href: 'https://wakatime.com/@alvinjoy',
    icon: SiWakatime,
  },
  {
    title: 'StackOverflow',
    description: 'Check out my StackOverflow',
    href: 'https://stackoverflow.com/users/23590914',
    icon: FaStackOverflow,
  },
  {
    title: 'Spotify',
    description: "See what I'm listening to",
    href: 'https://open.spotify.com/user/lwsg3h1l2wm80gp22bfiv1npi',
    icon: FaSpotify,
  },
];

export function LinkList() {
  return (
    <div className="space-y-4">
      {links.map((link) => (
        <LinkCard key={link.title} {...link} />
      ))}
    </div>
  );
}
