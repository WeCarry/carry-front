
import { faRightLong, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import HomeWrapper from './homeWrapper'

const Home = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [modal, setModal] = useState(false)
    const modalOnOff = () => {
        setModal(!modal)
    }
    const [activeTab, setActiveTab] = useState('1');
    return (
        <HomeWrapper>
            <header className='header px-3 py-2'>
                <Link to={'/'}>
                    <img className='logo' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
                </Link>
                <ul className='header-ul'>
                    <li>
                        <Link to={"/sign-in"}>
                            <button className='btn btn-primary'>Sign in</button>
                        </Link>
                    </li>
                    <li><button className='btn btn-primary' onClick={modalOnOff}>Sign up</button></li>
                </ul>
            </header>
            <div className={`${modal ? 'my-modal-on' : 'my-modal-off'} pt-4`}>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-between '>
                        <span className=' visible-hidden '>x</span>
                        <FontAwesomeIcon onClick={modalOnOff} icon={faX} className=" text-primary h3 cursor-pointer" />
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Link to={'./sign-up-user'}>
                                <div className='d-flex align-items-center justify-content-center my-3 '><h3>Signup User Panel</h3> <FontAwesomeIcon className='ms-3' icon={faRightLong} /> </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6">
                            <Link to={'./sign-up-driver'}>
                                <div className='d-flex align-items-center justify-content-center my-3 '><h3>Signup Driver Panel</h3> <FontAwesomeIcon className='ms-3' icon={faRightLong} /> </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6">
                            <Link to={'./sign-up-merchant'}>
                                <div className='d-flex align-items-center justify-content-center my-3 '><h3>Signup Merchant Panel</h3> <FontAwesomeIcon className='ms-3' icon={faRightLong} /> </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className='container'>
                    <Nav tabs>
                        <NavItem>
                            <NavLink className={`cursor-pointer ${activeTab} == '1' ? 'active' : ''`} onClick={() => setActiveTab('1')}>
                                User
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={`cursor-pointer ${activeTab} == '2' ? 'active' : ''`} onClick={() => setActiveTab('2')}>
                                Driver
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={`cursor-pointer ${activeTab} == '3' ? 'active' : ''`} onClick={() => setActiveTab('3')}>
                                Merchant
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <h1>User</h1>
                            <p>Drive on the platform with the largest network of active riders.</p>
                            <button className='btn btn-primary'>gooo</button>
                        </TabPane>
                        <TabPane tabId="2">
                        <h1>Driver</h1>
                            <p>Drive on the platform with the largest network of active riders.</p>
                            <button className='btn btn-primary'>gooo</button>
                        </TabPane>
                        <TabPane tabId="3">
                        <h1>Merchant</h1>
                            <p>Drive on the platform with the largest network of active riders.</p>
                            <button className='btn btn-primary'>gooo</button>
                        </TabPane>
                    </TabContent>
                </div>
            </section>
        </HomeWrapper>
    )
}

export default Home