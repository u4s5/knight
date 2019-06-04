package ru.impressionbit.server.service;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import ru.impressionbit.server.domain.Request;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

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

    public List<Request> queryFindHandledRequestsJPA() {
        String query = "from Request where status=1 order by id";
        TypedQuery<Request> typedQuery = entityManager.createQuery(query, Request.class);
        return typedQuery.getResultList();
    }

    public List<Request> insertRequest(
            String placeTime,
            String styleAtmosphere,
            String money,
            String name,
            String contact
    ) {
        String qlString = "insert into Request (placeTime, styleAtmosphere, money, name, contact, status) values (?,?,?,?,?,?)";
        entityManager.createNativeQuery(qlString)
                .setParameter(1, placeTime)
                .setParameter(2, styleAtmosphere)
                .setParameter(3, money)
                .setParameter(4, name)
                .setParameter(5, contact)
                .setParameter(6, 0)
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

//    public List<Request> deleteUserById(Integer id) {
//        String query = "delete from User u where u.id=:id";
//        entityManager.createQuery(query)
//                .setParameter("id", id)
//                .executeUpdate();
//        return queryFindAllRequestsJPA();
//    }
}
