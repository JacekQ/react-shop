import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

// import {
//   firestore,
//   convertCollectionsSnaphotToMap
// } from '../../firebase/firebase.utils';
// import { updateCollections } from '../../redux/shop/shop.actions';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  // state = {
  //   loading: true
  // };

  componentDidMount() {
    // 3) by redux-thunk
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();

    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');
    // 2) Firebase Promise patern
    // collectionRef.get().then(snapShot => {
    //   const collectionsMap = convertCollectionsSnaphotToMap(snapShot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    // 1) Firebase Observable patern
    // collectionRef.onSnapshot(snapShot => {
    //   const collectionsMap = convertCollectionsSnaphotToMap(snapShot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer} 
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  // updateCollections: collectionsMap =>
  //   dispatch(updateCollections(collectionsMap)),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
