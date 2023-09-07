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
