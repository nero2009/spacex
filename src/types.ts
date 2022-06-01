export interface Launch {
  fairings?: any;
  links: Links;
  static_fire_date_utc: Date;
  static_fire_date_unix: number;
  tdb: boolean;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: any[];
  details: string;
  crew: any[];
  ships: any[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  auto_update: boolean;
  flight_number: number;
  name: string;
  date_utc: Date;
  date_unix: number;
  date_local: Date;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  id: string;
}

export interface Links {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

export interface Patch {
  small: string;
  large: string;
}

export interface Reddit {
  campaign: string;
  launch: string;
  media: string;
  recovery?: any;
}

export interface Flickr {
  small: any[];
  original: string[];
}

export interface Core {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt?: any;
  landing_success?: any;
  landing_type?: any;
  landpad?: any;
}

export interface Failure {
  time: number;
  altitude?: any;
  reason: string;
}

export interface LaunchPadImages {
  large: string[];
}

export interface Launchpad {
  images: LaunchPadImages;
  name: string;
  full_name: string;
  locality: string;
  region: string;
  latitude: number;
  longitude: number;
  launch_attempts: number;
  launch_successes: number;
  rockets: string[];
  timezone: string;
  launches: any[];
  status: string;
  details: string;
  id: string;
}

export interface LandpadImages {
  large: string[];
}

export interface Landpad {
  images: LandpadImages;
  name: string;
  full_name: string;
  status: string;
  type: string;
  locality: string;
  region: string;
  latitude: number;
  longitude: number;
  landing_attempts: number;
  landing_successes: number;
  wikipedia: string;
  details: string;
  launches: string[];
  id: string;
}
