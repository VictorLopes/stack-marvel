import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Modal } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import FitImage from 'react-native-fit-image';


var styles = StyleSheet.create({
    fitImage: {
        margin: -16
    },
  });

type Props = {};
class CharCard extends Component<Props> {
    render() {
        return (
            <Card
                title={this.props.name}
                >
                <FitImage
                    source={{ uri: this.props.image }}
                    style={styles.fitImage}
                />
            </Card>
        );
    }
}

export default CharCard;