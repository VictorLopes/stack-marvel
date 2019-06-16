import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { Spinner } from 'react-activity';
import 'react-activity/lib/Spinner/Spinner.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Card from '../../components/card'
import Modal from '../../components/modal'

// redux
import {
  connect
} from 'react-redux';

const style = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 100,
    height: '100%',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  }
}));

const tileData = [
  {
    thumbnail: {
      path: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
    },
    name: 'Image',
    description: 'Tempor cupidatat deserunt ut ea et dolore consectetur cupidatat proident et ex sit esse. Irure Lorem ea exercitation do aliqua consectetur culpa qui aliqua ex nulla.'
  },
];

var page = 0;

class App extends React.Component {
  handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      this.props.get_characters();
    }
  }

  componentDidMount() {
    this.props.get_characters();
  }

  render() {
    return (
      <div 
        className={style.root}
      >
        <Modal />
        <div
          style={{
            width: '100%',
            height: '100vh',
            overflow: 'auto'
          }}
          onScroll={this.handleScroll}
        >
          <CssBaseline />
          <Container maxWidth="md">
          {
            (!this.props.characters.length > 0) && (
            //(!tileData > 0) && (
              <div style={{
                margin: '0',
                position: 'absolute',
                top: '50%',
                left: '50%',
                textAlign: 'center'
              }}
                >
                <Spinner size={25} />
              </div>
            )
          }
          {
            (this.props.characters.length > 0) && (
            //(tileData.length > 0) && (
              <div>
                <GridList cellHeight={200} style={style.gridList} spacing={10} >
                  {
                    (this.props.characters) && (
                    //(tileData) && (
                      this.props.characters.map((item, i) => (
                        //tileData.map((item, i) => (
                          <Card 
                            key={i}
                            style={{cursor: 'pointer'}}
                            onClick={() => { this.props.open_modal(item) }}
                            //image={item.thumbnail.path}
                            image={item.thumbnail.path + '/landscape_incredible.jpg'}
                            name={item.name}
                          />
                      ))
                    )
                  }
                </GridList>
              </div>
            )
          }
          </Container>
        </div>
        
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
