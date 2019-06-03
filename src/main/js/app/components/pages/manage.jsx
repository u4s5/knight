import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import *as url from 'app/axios/url';
import {Button, Col, Container, Jumbotron, Row, Table} from 'reactstrap';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';

class ManageLayout extends React.Component {
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
        axios.get(url.request)
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
                    <h5><FormattedMessage id='app.page.manage.text'/></h5>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col xs="9">
                            <h1><FormattedMessage id='app.manage.table.title'/></h1>
                        </Col>
                        {/*<Col xs="3" style={{marginTop: '10px'}}>*/}
                        {/*<Button color="primary"*/}
                        {/*        onClick={() => {*/}
                        {/*            this.toggle();*/}
                        {/*            this.setState(*/}
                        {/*                {userName: '', userRole: '', userPassword: ''}*/}
                        {/*            )*/}
                        {/*        }}>*/}
                        {/*    <FormattedMessage id='app.user.table.add'/>*/}
                        {/*</Button>*/}
                        {/*<Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>*/}
                        {/*    <ModalHeader toggle={this.toggle}>*/}
                        {/*        <FormattedMessage id='app.user.table.add'/>*/}
                        {/*    </ModalHeader>*/}
                        {/*    <ModalBody>*/}
                        {/*        <Input type="text" name="name" id="userName"*/}
                        {/*               placeholder={intl.formatMessage({id: 'app.user.table.name'})}*/}
                        {/*               value={userName}*/}
                        {/*               onChange={value => this.setState({userName: value.target.value})}/>*/}
                        {/*        <br/>*/}
                        {/*        <Input type="text" name="role" id="userRole"*/}
                        {/*               placeholder={intl.formatMessage({id: 'app.user.table.role'})}*/}
                        {/*               value={userRole}*/}
                        {/*               onChange={value => this.setState({userRole: value.target.value})}/>*/}
                        {/*        <br/>*/}
                        {/*        <Input type="text" name="password" id="userPassword"*/}
                        {/*               placeholder={intl.formatMessage({id: 'app.user.table.password'})}*/}
                        {/*               value={userPassword}*/}
                        {/*               onChange={value => this.setState({userPassword: value.target.value})}/>*/}
                        {/*    </ModalBody>*/}
                        {/*    <ModalFooter>*/}
                        {/*        <Button color="primary"*/}
                        {/*                onClick={() => {*/}
                        {/*                    axios.put(url.rest,*/}
                        {/*                        {},*/}
                        {/*                        {params: {name: userName, role: userRole, password: userPassword}})*/}
                        {/*                        .then(res =>*/}
                        {/*                            this.setState({users: res.data})*/}
                        {/*                        );*/}
                        {/*                    this.toggle();*/}
                        {/*                }}>*/}
                        {/*            <FormattedMessage id='app.user.table.add'/>*/}
                        {/*        </Button>{' '}*/}
                        {/*    </ModalFooter>*/}
                        {/*</Modal>*/}
                        {/*</Col>*/}
                    </Row>
                    <Row>
                        <Col>
                            <Table>
                                <thead>
                                <tr>
                                    <th><FormattedMessage id='app.manage.table.id'/></th>
                                    <th><FormattedMessage id='app.manage.table.placeTime'/></th>
                                    <th><FormattedMessage id='app.manage.table.style_atmosphere'/></th>
                                    <th><FormattedMessage id='app.manage.table.money'/></th>
                                    <th><FormattedMessage id='app.manage.table.name'/></th>
                                    <th><FormattedMessage id='app.manage.table.contact'/></th>
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
                                                    }}>
                                            <FormattedMessage id='app.manage.table.accept'/>
                                        </Button></th>
                                    </tr>)
                                }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    };

}

ManageLayout.propTypes = {
    intl: intlShape.isRequired
};

const mapStateToProps = state => ({
    state: state.state.value
});

const mapDispatchToProps = dispatch => ({
    setValue: value => dispatch(setValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ManageLayout));
