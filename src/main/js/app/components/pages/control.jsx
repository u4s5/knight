import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import *as url from 'app/axios/url';
import {Button, Col, Container, Jumbotron, Row, Table} from 'reactstrap';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';

// const urlWebSocket = baseUrl + '/endpoint';
// const connectionStatusOpen = 'WebSocket connection: open';
// const connectionStatusClose = 'WebSocket connection: close';

class ControlLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            requests: []
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {
        axios.get(url.requestHandled)
            .then(res =>
                this.setState({requests: res.data})
            )
    }

    render() {
        const {modal, requests} = this.state;
        const {intl} = this.props;

        return (
            <div>
                <Jumbotron>
                    <h5><FormattedMessage id='app.page.control.text'/></h5>
                </Jumbotron>
                <Container>
                    {/*<Row>*/}
                    {/*    <Col>*/}

                    {/*        <Alert color={connectionStatus}>*/}
                    {/*            <PulseLoader*/}
                    {/*                sizeUnit={"px"}*/}
                    {/*                size={30}*/}
                    {/*                color={'#FFF'}*/}
                    {/*                loading={connectionStatus === 'danger'}*/}
                    {/*            />*/}
                    {/*            {connectionMessage}*/}
                    {/*        </Alert>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Row>*/}
                    {/*    <Col>*/}
                    {/*        <InputGroup>*/}
                    {/*            <Input*/}
                    {/*                type="text"*/}
                    {/*                placeholder={intl.formatMessage({id: 'app.websocket.input.message'})}*/}
                    {/*                value={sendMessage}*/}
                    {/*                onChange={value => this.setState({sendMessage: value.target.value})}/>*/}
                    {/*            <InputGroupAddon addonType="append">*/}
                    {/*                <Button*/}
                    {/*                    color="primary"*/}
                    {/*                    onClick={() => {*/}
                    {/*                        this.sendMessage()*/}
                    {/*                    }}>*/}
                    {/*                    <FormattedMessage id='app.websocket.button.send'/>*/}
                    {/*                </Button>*/}
                    {/*            </InputGroupAddon>*/}
                    {/*        </InputGroup>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Row>*/}
                    {/*    <Col>*/}
                    {/*        <br/>*/}
                    {/*        <Alert color="info">*/}
                    {/*            {getMessage}*/}
                    {/*        </Alert>*/}
                    {/*        <SockJsClient url={urlWebSocket}*/}
                    {/*                      topics={['/server/message']}*/}
                    {/*                      autoReconnect={true}*/}
                    {/*                      onConnect={() => {*/}
                    {/*                          this.setState({*/}
                    {/*                              connectionStatus: 'success',*/}
                    {/*                              connectionMessage: connectionStatusOpen*/}
                    {/*                          })*/}
                    {/*                      }}*/}
                    {/*                      onDisconnect={() => {*/}
                    {/*                          this.setState({*/}
                    {/*                              connectionStatus: 'danger',*/}
                    {/*                              connectionMessage: connectionStatusClose*/}
                    {/*                          })*/}
                    {/*                      }}*/}
                    {/*                      onMessage={(response) => {*/}
                    {/*                          this.setState({getMessage: response.message})*/}
                    {/*                      }}*/}
                    {/*                      ref={(client) => {*/}
                    {/*                          this.clientRef = client*/}
                    {/*                      }}/>*/}
                    {/*    </Col>*/}

                    {/*</Row>*/}
                    <Row>
                        <Col xs="9">
                            <h1><FormattedMessage id='app.manage.table.title'/></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table>
                                <thead>
                                <tr>
                                    <th><FormattedMessage id='app.control.table.id'/></th>
                                    <th><FormattedMessage id='app.control.table.placeTime'/></th>
                                    <th><FormattedMessage id='app.control.table.style_atmosphere'/></th>
                                    <th><FormattedMessage id='app.control.table.money'/></th>
                                    <th><FormattedMessage id='app.control.table.name'/></th>
                                    <th><FormattedMessage id='app.control.table.contact'/></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {requests.map((item, index) =>
                                    <tr key={index}>
                                        <th>{item.id}</th>
                                        <th>{item.placeTime}</th>
                                        <th>{item.styleAtmosphere}</th>
                                        <th>{item.money}</th>
                                        <th>{item.name}</th>
                                        <th>{item.contact}</th>
                                        <th><Button color="secondary" size="sm"
                                                    onClick={() => {
                                                        // axios.delete(url.rest, {params: {id: item.id}})
                                                        //     .then(res =>
                                                        //         this.setState({users: res.data})
                                                        //     )
                                                        axios.put(
                                                            url.requestStatus,
                                                            {},
                                                            {params: {id: item.id, status: 2}}
                                                        )
                                                    }}>
                                            <FormattedMessage id='app.control.table.accept'/>
                                        </Button></th>
                                    </tr>)
                                }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

ControlLayout.propTypes = {
    intl: intlShape.isRequired
};

const mapStateToProps = state => ({
    state: state.state.value
});

const mapDispatchToProps = dispatch => ({
    setValue: value => dispatch(setValue(value))
});

export default injectIntl(ControlLayout);

// export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ControlLayout));
