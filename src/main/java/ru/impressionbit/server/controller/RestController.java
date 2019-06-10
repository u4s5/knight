package ru.impressionbit.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.impressionbit.server.domain.Request;
import ru.impressionbit.server.service.ORMRequestService;

import java.util.List;

@RepositoryRestController
@Controller
public class RestController {

    private final ORMRequestService ormRequestService;

    @Autowired
    public RestController(ORMRequestService ormRequestService) {
        this.ormRequestService = ormRequestService;
    }

    @RequestMapping(
            value = "/api/request",
            method = RequestMethod.GET)
    @ResponseBody
    public List<Request> ormFindAllRequests() {
        return ormRequestService.queryFindAllRequestsJPA();
    }

    @RequestMapping(
            value = "/api/request/handled1",
            method = RequestMethod.GET)
    @ResponseBody
    public List<Request> ormFindHandled1Requests() {
        return ormRequestService.queryFindHandled1RequestsJPA();
    }

    @RequestMapping(
            value = "/api/request/handled2",
            method = RequestMethod.GET)
    @ResponseBody
    public List<Request> ormFindHandled2Requests() {
        return ormRequestService.queryFindHandled2RequestsJPA();
    }

    @RequestMapping(
            value = "/api/request/accepted1",
            method = RequestMethod.PUT)
    @ResponseBody
    public List<Request> ormSetRequestAccepted1(
            @RequestParam(value = "id") Integer id
    ) {
        return ormRequestService.setAccepted1(id);
    }

    @RequestMapping(
            value = "/api/request/accepted2",
            method = RequestMethod.PUT)
    @ResponseBody
    public List<Request> ormSetRequestAccepted2(
            @RequestParam(value = "id") Integer id
    ) {
        return ormRequestService.setAccepted2(id);
    }

    @RequestMapping(
            value = "/api/request/status",
            method = RequestMethod.PUT)
    @ResponseBody
    public List<Request> ormSetRequestStatus(
            @RequestParam(value = "id") Integer id,
            @RequestParam(value = "status") Integer status
    ) {
        return ormRequestService.setRequestStatus(id, status);
    }

    @RequestMapping(
            value = "/api/request/message",
            method = RequestMethod.PUT)
    @ResponseBody
    public List<Request> ormSetRequestMessage(
            @RequestParam(value = "id") Integer id,
            @RequestParam(value = "message") String message
    ) {
        return ormRequestService.setRequestMessage(id, message);
    }

    @RequestMapping(
            value = "/api/request/message",
            method = RequestMethod.GET)
    @ResponseBody
    public String ormGetRequestMessage(
            @RequestParam(value = "id") Integer id
    ) {
        return ormRequestService.getRequestMessage(id);
    }

    @RequestMapping(
            value = "/api/request",
            method = RequestMethod.PUT)
    @ResponseBody
    public List<Request> ormInsertRequestById(
            @RequestParam(value = "placeTime") String placeTime,
            @RequestParam(value = "styleAtmosphere") String styleAtmosphere,
            @RequestParam(value = "money") String money,
            @RequestParam(value = "name") String name,
            @RequestParam(value = "contact") String contact
    ) {
        return ormRequestService.insertRequest(placeTime, styleAtmosphere, money, name, contact);
    }

//    @RequestMapping(
//            value = "/api/rest",
//            method = RequestMethod.DELETE)
//    @ResponseBody
//    public List<Request> ormDeleteUserById(@RequestParam(value = "id") Integer id) {
//        return ormRequestService.deleteUserById(id);
//    }

}
