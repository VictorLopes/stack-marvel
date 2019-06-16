import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

// redux
import {
  connect
} from 'react-redux';

//const [open, setOpen] = React.useState(false);
// getModalStyle is not a pure function, we roll the style only on the first render
//const [modalStyle] = React.useState(getModalStyle);
  
const style = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        top: `50%`, 
        left: `50%`, 
        transform: `translate(-50%, -50%)`, 
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        width: '500px',
        padding: theme.spacing(4),
        outline: 'none'
    },
    image: {
        postion: 'relative',
        width: `calc(100% + ${theme.spacing(8)}px)`,
        marginLeft: theme.spacing(-4),
    }

}));

function CharModal (props){
    return (
        <div>
            {(props.visible) && (
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={props.visible}
                    onClose={() => {props.close_modal()}}
                >
                    <div 
                        style={{
                            height: '90%',
                            overflow: 'auto'
                        }}
                        className={style().paper}
                    >
                        <Typography 
                            style={{textAlign: 'center'}}
                            variant="h4" 
                        >
                            {props.character.name}
                        </Typography>
                        <img
                            className={style().image}
                            //src={props.character.thumbnail.path} 
                            src={props.character.thumbnail.path + '/landscape_incredible.jpg'}
                            alt={props.character.name} />
                        {
                            (props.character.description !== "") && (
                                <Typography
                                    style={{
                                        textAlign: 'justify',
                                    }}
                                    variant="subtitle1"
                                >
                                    {props.character.description}
                                </Typography>
                            )  

                        }
                        {
                            (props.character.description === "") && (
                                <Typography
                                    style={{
                                        textAlign: 'center',
                                    }}
                                    variant="subtitle1"
                                >
                                    Sem Descrição
                                </Typography>
                            )
                        }
                    </div>
                </Modal>
            )
            }
        </div>
    );
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
//export default App;
