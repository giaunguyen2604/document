import {call, put, select} from 'redux-saga/effects';
import {API_URL} from '../utils/config/urls';

function* queryApi({endpoint, method, body = null}) {
  const state = yield select();
  const res = yield call(makeRequest, {
    endpoint,
    method,
    headers: {
      Authorization: state.user.accessToken
        ? `Bearer ${state.user.accessToken}`
        : null,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...body,
    }),
  });

  if (res.status === 401) {
    // Log the user out
    // Explain that they need to log back in
  }

  const parsedResponse = yield call(parseResponse, res);
  if (!res.ok) {
    // Handle bad response here
  }

  return parsedResponse;
}

const makeRequest = async ({endpoint, method, headers, body = null}) => {
  return fetch(API_URL + endpoint, {
    method,
    headers,
    body: body === '{}' ? undefined : body,
  });
};

const parseResponse = async response => {
  let parsedResponse;
  try {
    parsedResponse = await response.clone().json();
  } catch {
    parsedResponse = await response.text();
  }

  return parsedResponse;
};

export {queryApi};


//
import {takeEvery, put, call} from 'redux-saga/effects';
import {
  GET_ALL_USER_INFO_REQUEST,
  GET_ALL_USER_INFO_REQUEST_SUCCESS,
} from './actions';
import {queryApi} from '../query-api';

function* handler() {
  yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserInfo);
}

function* getAllUserInfo(action) {
  try {
    const posts = yield call(queryApi, {
      endpoint: '',
      method: 'GET',
    });
    console.log(posts);

    // API call
    yield put({
      type: GET_ALL_USER_INFO_REQUEST_SUCCESS,
      payload: {
        id: 'id1',
        name: posts[0].body,
        email: 'anothertestemail@test.com',
      },
    });
  } catch (err) {
    console.log(err);
    // Handle error
  }
}

export {handler};