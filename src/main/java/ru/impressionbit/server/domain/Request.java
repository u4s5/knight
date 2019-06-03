package ru.impressionbit.server.domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import javax.persistence.*;

@Entity
@Table(name = "REQUEST")
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "PLACETIME")
    private String placeTime;

    @Column(name = "STYLEATMOSPHERE")
    private String styleAtmosphere;

    @Column(name = "MONEY")
    private String money;

    @Column(name = "NAME")
    private String name;

    @Column(name = "CONTACT")
    private String contact;

}
