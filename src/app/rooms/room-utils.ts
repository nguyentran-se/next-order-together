import moment from 'moment';
import { IRoom } from '../_interfaces';

export const getRoomDetailFromRoomData = (roomData: IRoom) => {
  return Object.values(roomData.scrapingData.entities)[0];
};

export const getRoomInfoFromRoomData = (roomData: IRoom) => {
  const tableDetail = getRoomDetailFromRoomData(roomData);
  return {
    hostName: roomData.host.firstName + ' ' + roomData.host.lastName,
    dueTime: roomData.dueTime,
    roomName: tableDetail.name,
    photoHref: tableDetail.photoHref,
  };
};

export const getRoomMenuFromRoomData = (roomData: IRoom) => {
  const tableDetail = getRoomDetailFromRoomData(roomData);
  return tableDetail.menu;
};

export const isUrlValid = (url: string) => {
  if (url) {
    const urlRegex = /^(https?):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(url);
  } else {
    return false;
  }
};

export const isDueTimeValid = (dueTime: string) => {
  if (dueTime) {
    const dueTimeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return dueTimeRegex.test(dueTime);
  } else {
    return false;
  }
};
