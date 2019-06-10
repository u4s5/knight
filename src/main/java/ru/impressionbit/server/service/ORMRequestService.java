package ru.impressionbit.server.service;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import ru.impressionbit.server.domain.Request;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Objects;

@Repository
@Transactional
public class ORMRequestService {

    @PersistenceContext
    private EntityManager entityManager;

    public List<Request> queryFindAllRequestsJPA() {
        String query = "from Request order by id";
        TypedQuery<Request> typedQuery = entityManager.createQuery(query, Request.class);
        return typedQuery.getResultList();
    }

    public List<Request> queryFindHandled1RequestsJPA() {
        String query = "from Request where status=1 or accepted1=true order by id";
        TypedQuery<Request> typedQuery = entityManager.createQuery(query, Request.class);
        return typedQuery.getResultList();
    }

    public List<Request> queryFindHandled2RequestsJPA() {
        String query = "from Request where status=1 or accepted2=true order by id";
        TypedQuery<Request> typedQuery = entityManager.createQuery(query, Request.class);
        return typedQuery.getResultList();
    }

    public List<Request> setAccepted1(
            Integer request_id
    ) {
        String qlString = "update Request set accepted1=" + true + " where id=" + request_id;
        entityManager.createNativeQuery(qlString)
                .executeUpdate();
        List<Request> requests = queryFindAllRequestsJPA();
        for (Request req : requests) {
            if (Objects.equals(req.id, request_id) && (req.accepted2 == null || req.accepted2)) {
                setRequestStatus(request_id, 2);
            }
        }
        return queryFindAllRequestsJPA();
    }

    public List<Request> setAccepted2(
            Integer request_id
    ) {
        String qlString = "update Request set accepted2=" + true + " where id=" + request_id;
        entityManager.createNativeQuery(qlString)
                .executeUpdate();
        List<Request> requests = queryFindAllRequestsJPA();
        for (Request req : requests) {
            if (Objects.equals(req.id, request_id) && (req.accepted1 == null || req.accepted1)) {
                setRequestStatus(request_id, 2);
            }
        }
        return queryFindAllRequestsJPA();
    }

    public List<Request> insertRequest(
            String placeTime,
            String styleAtmosphere,
            String money,
            String name,
            String contact
    ) {
        String qlString = "insert into Request (placeTime, styleAtmosphere, money, name, contact, status, accepted1, accepted2, messages) values (?,?,?,?,?,?,?,?,?)";
        entityManager.createNativeQuery(qlString)
                .setParameter(1, placeTime)
                .setParameter(2, styleAtmosphere)
                .setParameter(3, money)
                .setParameter(4, name)
                .setParameter(5, contact)
                .setParameter(6, 0)
                .setParameter(7, false)
                .setParameter(8, false)
                .setParameter(9, "")
                .executeUpdate();
        return queryFindAllRequestsJPA();
    }

    public List<Request> setRequestStatus(
            Integer request_id,
            Integer request_status
    ) {
//        Request.Status new_status = Request.Status.valueOf(request_status);
//        String query = "update Request set status=" + request_status + " where id=" + request_id;
//        TypedQuery<Request> typedQuery = entityManager.createQuery(query, Request.class);
//                .setParameter(1, new_status)
//                .setParameter(2, request_id);
//        typedQuery.getResultList();
        String qlString = "update Request set status=" + request_status + " where id=" + request_id;
        entityManager.createNativeQuery(qlString)
//                .setParameter(1, placeTime)
//                .setParameter(2, styleAtmosphere)
//                .setParameter(3, money)
//                .setParameter(4, name)
//                .setParameter(5, contact)
//                .setParameter(6, 0)
                .executeUpdate();
        return queryFindAllRequestsJPA();
    }

    public List<Request> setRequestMessage(
            Integer request_id,
            String request_message
    ) {
        String query = "select messages from Request where id=" + request_id;
        TypedQuery<String> typedQuery = entityManager.createQuery(query, String.class);
        String msgs = typedQuery.getSingleResult();
        if (msgs == null){
            msgs = "";
        }
        msgs = msgs.concat(request_message + " ; ");

        String qlString = "update Request set messages='" + msgs + "' where id=" + request_id;
        entityManager.createNativeQuery(qlString)
//                .setParameter(1, placeTime)
//                .setParameter(2, styleAtmosphere)
//                .setParameter(3, money)
//                .setParameter(4, name)
//                .setParameter(5, contact)
//                .setParameter(6, 0)
                .executeUpdate();
        return queryFindAllRequestsJPA();
    }

    public String getRequestMessage(
            Integer request_id
    ) {
        String query = "select messages from Request where id=" + request_id;
        TypedQuery<String> typedQuery = entityManager.createQuery(query, String.class);
        return typedQuery.getSingleResult();
    }

//    public List<Request> deleteUserById(Integer id) {
//        String query = "delete from User u where u.id=:id";
//        entityManager.createQuery(query)
//                .setParameter("id", id)
//                .executeUpdate();
//        return queryFindAllRequestsJPA();
//    }
}
