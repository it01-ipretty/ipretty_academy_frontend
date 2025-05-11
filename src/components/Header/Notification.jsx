import React, {useContext, useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {AuthContext} from "academy/context/Authcontext";
import NotificationService from "academy/service/NotificationService";
import {Link} from 'react-router-dom';
import {Dropdown, DropdownHeader} from "flowbite-react";
import {timeAgoTemplate} from "academy/helpers/utils";

const Notification = (props) => {
    const {t} = useTranslation()
    const {state} = useContext(AuthContext);
    const [dataNotification, setDataNotification] = useState([]);


    useEffect(() => {
        if (state.isAuthenticated) {
            getListNotification();
        }

    }, [])

    function getListNotification() {
        NotificationService.getListNotification(handleResponses, handlError);
    }

    function handleResponses(res) {
        setDataNotification(res.data.data);
    }

    function handlError(res) {
        // setDataCourse(res.data.data);
        console.log(res)
    }

    return (<>
        {state.isAuthenticated
            ? <div className='group-notificaton'>
            <Dropdown className="!top-[21px] !min-w-[250px]" label="" dismissOnClick={false} renderTrigger={() =>
                <button id="dropdown-notification"
                        className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                        type="button">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor" viewBox="0 0 14 20">
                        <path
                            d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
                    </svg>
                    <div
                        className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900"></div>
                </button>
            }>
                <DropdownHeader className="block font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                    <label className="h1">{t('notification.title')}</label>
                </DropdownHeader>
                {(dataNotification && dataNotification.length > 0) ? dataNotification.map((item, key) => (
                    <Dropdown.Item>
                        <a href="#" key={key} className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <div className="flex-shrink-0">
                                <img className="rounded-full w-11 h-11"
                                     src={item['avatar']} alt="Jese image"/>
                                <div
                                    className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                                    <svg className="w-2 h-2 text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         viewBox="0 0 18 18">
                                        <path
                                            d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z"/>
                                        <path
                                            d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="w-full ps-3">
                                <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                    {item['info']['message']}
                                </div>
                                <div className="text-xs text-blue-600 dark:text-blue-500 text-left">{timeAgoTemplate(item['created_at'])}</div>
                            </div>
                        </a>
                    </Dropdown.Item>
                )) : 'Không có thông báo'}
                <Dropdown.Divider />
                <Dropdown.Item className="!justify-center">
                    <Link to="/notification" href="#"
                          className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                        <div className="inline-flex items-center ">
                            {t("component.view_all")}
                        </div>
                    </Link>
                </Dropdown.Item>
                    {/*<div id="dropdownNotification"*/}
                    {/*     className="z-20 hidden !top-[22px] w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700"*/}
                    {/*     aria-labelledby="dropdown-notification">*/}

                    {/*    <div className="divide-y divide-gray-100 dark:divide-gray-700">*/}
                    {/*        {*/}
                    {/*           */}
                    {/*        }*/}
                    {/*    </div>*/}
                    {/*    <Link to="/notification" href="#"*/}
                    {/*          className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">*/}
                    {/*        <div className="inline-flex items-center ">*/}
                    {/*            {t("component.view_all")}*/}
                    {/*        </div>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}

            </Dropdown>

        </div> : ''}
    </>)
};

export default Notification;


