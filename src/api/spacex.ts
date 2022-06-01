import { SPACE_X_BASE_URL } from '../constants';
import { Landpad, Launch, Launchpad } from '../types';

interface ILaunches {
  (): Promise<Launch[]>;
}
interface ILaunchpad {
  (): Promise<Launchpad[]>;
}
interface ILandpad {
  (): Promise<Landpad[]>;
}

interface ILaunch {
  (): Promise<Launch>;
}

export const getUpcomingLaunches: ILaunches = async () => {
  const url = new URL('launches/upcoming', SPACE_X_BASE_URL).href;
  const response = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  });

  if (!response.ok) {
    console.warn(`Error fetching upcoming launches, API status: ${response.status}`);
    return null;
  }

  return response.json();
};

export const getPastLaunches: ILaunches = async () => {
  const url = new URL('launches/past', SPACE_X_BASE_URL).href;
  const response = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  });

  if (!response.ok) {
    console.warn(`Error fetching past launch, API status: ${response.status}`);
    return null;
  }

  return response.json();
};

export const getLatestLaunch: ILaunch = async () => {
  const url = new URL('launches/latest', SPACE_X_BASE_URL).href;
  const response = await fetch(url, {
    method: 'GET',
  });

  if (!response.ok) {
    console.warn(`Error fetching latest launch, API status: ${response.status}`);
    return null;
  }

  return response.json();
};

export const getNextLaunch: ILaunch = async () => {
  const url = new URL('launches/next', SPACE_X_BASE_URL).href;
  const response = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  });

  if (!response.ok) {
    console.warn(`Error fetching next launch, API status: ${response.status}`);
    return null;
  }

  return response.json();
};

export const getAllLaunchpads: ILaunchpad = async () => {
  const url = new URL('launchpads', SPACE_X_BASE_URL).href;
  const response = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  });

  if (!response.ok) {
    console.warn(`Error fetching all launch pads, API status: ${response.status}`);
    return null;
  }

  return response.json();
};

export const getAllLandingpads: ILandpad = async () => {
  const url = new URL('landpads', SPACE_X_BASE_URL).href;
  const response = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  });

  if (!response.ok) {
    console.warn(`Error fetching all land pads, API status: ${response.status}`);
    return null;
  }

  return response.json();
};
