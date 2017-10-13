import superagent from 'superagent';
import SocketIOClient from 'socket.io-client';
import socketRouter from '../lib/socket-router.js';

export const setSocket = socket => ({
  type: 'SOCKET_SET',
  payload: socket
})

export const deleteSocket = () => ({
  type: 'SOCKET_DELETE'
});

export const connectSocket = profile => (dispatch, getState) => {
  let {socket} = getState();
  if(!socket && profile) {
    let socket = SocketIOClient(__API_URL__);

    dispatch(setSocket(socketRouter(socket, getState, dispatch)));

  }

}
