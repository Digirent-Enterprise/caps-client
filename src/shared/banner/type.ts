export interface IBannerProps {
  banner: string;
  avatar: string;
  name: string;
  job: string;
  posts: number | string;
  followers: number | string;
  following: number | string;
  [x: string]: any;
}
