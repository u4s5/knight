import React from 'react';
import {connect} from 'react-redux';
import {Alert, Button, Col, Container, Input, Jumbotron, Modal, ModalBody, ModalHeader, Row,} from 'reactstrap';
import {FormattedMessage, injectIntl, intlShape} from "react-intl";
import {setValue} from "app/action/actions";
import axios from 'axios';
import *as url from 'app/axios/url';

class RequestLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            placeTime: '',
            styleAtmosphere: '',
            money: '',
            name: '',
            contact: ''
        };

        this.sendRequest = this.sendRequest.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    sendRequest() {
        axios
            .put(
                url.request,
                {},
                {
                    params: {
                        placeTime: this.state.placeTime,
                        styleAtmosphere: this.state.styleAtmosphere,
                        money: this.state.money,
                        name: this.state.name,
                        contact: this.state.contact
                    }
                })
            .then(res => {
                    this.toggleModal();
                    this.setState(
                        {
                            placeTime: '',
                            styleAtmosphere: '',
                            money: '',
                            name: '',
                            contact: ''
                        }
                    );
                }
            );
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const {modal, placeTime, styleAtmosphere, money, name, contact} = this.state;
        const {intl} = this.props;
        return (
            <div>
                <Jumbotron>
                    <h5><FormattedMessage id='app.page.request.text'/></h5>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <Alert color="light">
                                <FormattedMessage id='app.request.place_time'/>
                            </Alert>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input type="text" id="placeTime"
                                   value={placeTime}
                                   onChange={value => this.setState({placeTime: value.target.value})}/>
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Alert color="light">
                                <FormattedMessage id='app.request.style_atmosphere'/>
                            </Alert>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input type="text" id="styleAtmosphere"
                                   value={styleAtmosphere}
                                   onChange={value => this.setState({styleAtmosphere: value.target.value})}/>
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Alert color="light">
                                <FormattedMessage id='app.request.money'/>
                            </Alert>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input type="text" id="money"
                                   value={money}
                                   onChange={value => this.setState({money: value.target.value})}/>
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Alert color="light">
                                <FormattedMessage id='app.request.name'/>
                            </Alert>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input type="text" id="name"
                                   value={name}
                                   onChange={value => this.setState({name: value.target.value})}/>
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Alert color="light">
                                <FormattedMessage id='app.request.contact'/>
                            </Alert>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input type="text" id="contact"
                                   value={contact}
                                   onChange={value => this.setState({contact: value.target.value})}/>
                            {/*onChange={value => setValue(value.target.value)}/>*/}
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button color="primary"
                                    onClick={() => {
                                        this.sendRequest();
                                    }}>
                                <FormattedMessage id='app.request.send_request'/>
                            </Button>
                        </Col>
                    </Row>
                    {/*<Row>*/}
                    {/*    <Col>*/}
                    {/*        <Alert color="light">*/}
                    {/*            {state.value}*/}
                    {/*        </Alert>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Container>
                <Modal isOpen={modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal}>
                        <FormattedMessage id='app.request.request_sent_title'/>
                    </ModalHeader>
                    <ModalBody>
                        <FormattedMessage id='app.request.request_sent_description'/>
                    </ModalBody>
                </Modal>
            </div>
        );
    };
}

RequestLayout.propTypes = {
    intl: intlShape.isRequired
};

const mapStateToProps = state => ({
    state: state.state.value
});

const mapDispatchToProps = dispatch => ({
    setValue: value => dispatch(setValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(RequestLayout));
