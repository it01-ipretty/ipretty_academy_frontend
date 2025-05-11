import TemplateAxios from "academy/helpers/axios";
import {CREATE_ORDER_COURSE, GET_ORDER_DETAIL_COURSE, GET_PAYMENTS_COURSE} from "academy/service/constances";

function createOrderCourse(responseCb, errors, data) {
    return TemplateAxios.axiosTemplate('POST', CREATE_ORDER_COURSE, '', data, responseCb, errors);
}

function getOrderDetail(responseCb, errors, param){
    return TemplateAxios.axiosTemplate('GET', GET_ORDER_DETAIL_COURSE, param , '' , responseCb, errors);
}

const OrderService = {
    createOrderCourse,
    getOrderDetail
};

export default OrderService;