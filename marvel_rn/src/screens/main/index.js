import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  View,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

// redux
import {
  connect
} from 'react-redux';


// Project components
import CharCard from '../../components/card'
import CharModal from '../../components/modal'

var page = 0;

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.get_characters();
  }

  // Thanks to: https://stackoverflow.com/questions/41056761/detect-scrollview-has-reached-the-end
  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  render() {

    return (
      <React.Fragment>
        {
          (!this.props.characters.length > 0) && (
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <ActivityIndicator size='large' color='#000' />
            </View>
          )
        }

        {
          (this.props.characters.length > 0 ) && (
            <View style={{
              flex: 1
            }}>
              <CharModal />
              <FlatList
                data={this.props.characters}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={() => { this.props.open_modal(item) }}>
                    <CharCard
                      name={item.name}
                      image={item.thumbnail.path + '/standard_large.jpg'}
                    />
                  </TouchableOpacity>
                )}
                keyExtractor={char => char.name}
                contentContainerStyle={{}}
                onEndReached={() => {
                  this.props.get_characters();
                }}
                onEndReachedThreshold={0.5}
              />
            </View>
          )
        }

      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters.chars,
  };
}

const mapDispatchToProps = dispatch => ({
  get_characters() {
    dispatch({
      type: "GET_CHARACTERS_TRIGGER",
      page: page++
    });
  },

  open_modal(character) {
    dispatch({
      type: "OPEN_MODAL_TRIGGER",
      character: character
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);