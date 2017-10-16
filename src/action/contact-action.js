import superagent from 'superagent';

export const createContact = payload => ({
  type: 'CONTACT_CREATE',
  payload
})

export const updateContact = payload => ({
  type: 'CONTACT_UPDATE',
  payload
})

export const deleteContact = payload => ({
  type: 'CONTACT_DELETE',
  payload
})

