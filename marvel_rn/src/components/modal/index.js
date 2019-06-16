import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button, Image, Overlay } from 'react-native-elements';
import FitImage from 'react-native-fit-image';


var styles = StyleSheet.create({
    fitImage: {
        width: 300,
        height: 250,
        
    },
});

// redux
import { connect } from 'react-redux';

type Props = {};
class CharModal extends Component<Props> {
    render() {
        return (
            <View style={{ marginTop: 22 }}>
                {
                    (this.props.visible) && (
                        <Overlay
                            isVisible={this.props.visible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <ScrollView style={{
                                flex: 1,
                                flexDirection: 'column',
                            }}>
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Text h3>{this.props.character.name}</Text>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'stretch',
                                            marginTop: 10
                                        }}
                                    >
                                        <FitImage
                                            source={{ uri: this.props.character.thumbnail.path + '/standard_large.jpg' }}
                                            style={styles.fitImage}
                                        />
                                    </View>
                                </View>

                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        marginTop: 10
                                    }}
                                >
                                {
                                    (this.props.character.description !== "") && (
                                        <Text
                                            style={{
                                                marginBottom: 10,
                                                textAlign: 'justify'
                                            }}
                                        >{this.props.character.description}</Text>
                                    ) || (
                                        <Text
                                            style={{
                                                marginBottom: 10,
                                                textAlign: 'center'
                                            }}
                                        >Sem Descrição</Text>
                                    )
                                }

                                <Button
                                    style={{ width: 200, height: 50 }}
                                    title="Close"
                                    onPress={() => {
                                        this.props.close_modal()
                                    }} />
                                </View>
                            </ScrollView>
                        </Overlay>
                    )
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        visible: state.characters.modal.opened,
        character: state.characters.modal.character
    };
}

const mapDispatchToProps = dispatch => ({
    close_modal: () => {
        dispatch({
            type: "CLOSE_MODAL_TRIGGER"
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CharModal);