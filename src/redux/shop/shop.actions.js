import { ShopActionTypes } from './shop.types';
import {
  firestore,
  convertCollectionsSnaphotToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

// only for redux-thunk
export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    
    collectionRef
      .get()
      .then(snapShot => {
        const collectionsMap = convertCollectionsSnaphotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  }
};
