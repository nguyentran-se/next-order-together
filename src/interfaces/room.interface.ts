import { IDish } from './dish.interface';
import { IHost } from './host.interface';

export interface RoomInfo {
  roomId: string;
  hostId: string;
  hostName: string;
  roomName: string;
}

export interface IRoom {
  id: string;
  alias: string;
  createdAt: string;
  dueTime: null;
  scrapingData: IRoomScrapingData;
  members: { user: IHost }[];
  host: IHost;
}

export interface MyRoom {
  alias: string;
  createdAt: Date;
  updatedAt: Date;
  discount: string;
  dueTime: string;
  hostID: string;
  id: string;
  restaurantId: string;
  scrapingData: IRoomScrapingData;
  scrapingUrl: string;
}

export interface IRoomCardInfo {
  hostName: string;
  dueTime: string | null;
  roomName: string;
  photoHref: string;
}

interface IRoomScrapingData {
  activeMerchantID: string;
  cuisine: Record<string, any>;
  entities: Record<string, IRoomDetail>;
  loadings: Record<string, boolean>;
  errors: Record<string, null>;
  menuRefreshedInfoBarVisible: boolean;
}

export interface IRoomDetail {
  ID: string;
  ETA: number;
  menu: IMenu;
  name: string;
  promo: {
    hasPromo: boolean;
    description: string;
  };
  latlng: {
    latitude: number;
    longitude: number;
  };
  radius: number;
  rating: number;
  status: 'ACTIVE' | 'INACTIVE'; // Add more options if available
  address: IAddress;
  cuisine: string;
  section: string;
  currency: {
    code: string;
    symbol: string;
    exponent: number;
    ISOSymbol: string;
  };
  features: {
    enableSTO: boolean;
    enableServiceBasedMenu: boolean;
  };
  timeZone: string;
  deliverBy: string;
  photoHref: string;
  voteCount: number;
  isLeadsGen: boolean;
  description: string;
  phoneNumber: string;
  businessType: 'FOOD' | 'OTHER'; // Add more options if available
  distanceInKm: number;
  isIntegrated: boolean;
  openingHours: Record<string, string>;
  sectionOpenHours: Record<string, string>;
  sofConfiguration: ISofConfiguration;
  schedulerOrderConfig: ISchedulerOrderConfig;
}

export interface IMenu {
  menuMeta: {
    orderValueLimit: number;
    noLocationOrderValueLimit: number;
  };
  campaigns: any[]; // Replace with the actual type if available
  categories: IMenuCategory[];
}

interface IMenuCategory {
  ID: string;
  name: string;
  items: IDish[];
  available: boolean;
  sortOrder: number;
}

interface IAddress {
  city: string;
  house: string;
  state: string;
  cityID: number;
  street: string;
  suburb: string;
  acronym: string;
  country: string;
  postcode: string;
  countryID: number;
  combinedCity: string;
  combinedAddress: string;
}

interface ISofConfiguration {
  fixFeeInMin: number;
  thresholdInMin: number;
  calculationMode: 'FixedFee' | 'Other'; // Add more options if available
  fixFeeForDisplay: {
    amountDisplay: string;
    amountInMinor: number;
  };
  thresholdForDisplay: {
    amountDisplay: string;
    amountInMinor: number;
  };
}

interface ISchedulerOrderConfig {
  scheduleTimeSpan: number;
  scheduleTimeSlots: {
    timeSlots: {
      to: {
        seconds: number;
      };
      from: {
        seconds: number;
      };
      available: boolean;
    }[];
  }[];
  enableScheduleOrder: boolean;
  preSelectedStartTime: {
    seconds: number;
  };
  scheduleIntervalTime: number;
  minAdvancePeriodInMin: number;
}
