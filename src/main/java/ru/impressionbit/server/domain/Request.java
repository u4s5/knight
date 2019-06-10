package ru.impressionbit.server.domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import javax.persistence.*;
import java.util.HashMap;
import java.util.Map;

@Entity
@Table(name = "REQUEST")
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    public Integer id;

    @Column(name = "PLACETIME")
    public String placeTime;

    @Column(name = "STYLEATMOSPHERE")
    public String styleAtmosphere;

    @Column(name = "MONEY")
    public String money;

    @Column(name = "NAME")
    public String name;

    @Column(name = "CONTACT")
    public String contact;

    @Column(name = "STATUS")
    public Integer status;

    @Column(name = "ACCEPTED1")
    public Boolean accepted1;

    @Column(name = "ACCEPTED2")
    public Boolean accepted2;

    @Column(name = "MESSAGES")
    public String messages;

    public enum Status {
        INITIAL(0), HANDLED(1), ACCEPTED(2), STARTED(3), COMPLETED(4);

        private int value;
        private static Map map = new HashMap<>();

        Status(int value) {
            this.value = value;
        }

        static {
            for (Status status : Status.values()) {
                map.put(status.value, status);
            }
        }

        public static Status valueOf(int status) {
            return (Status) map.get(status);
        }

        public int getValue() {
            return value;
        }
    }
}
