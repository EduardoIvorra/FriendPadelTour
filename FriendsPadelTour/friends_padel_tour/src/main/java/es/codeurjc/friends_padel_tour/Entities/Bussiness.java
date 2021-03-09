package es.codeurjc.friends_padel_tour.Entities;

import java.sql.Blob;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Bussiness{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String userName;
    private String bussinessName;
    private String userSurname;
    private String location;
    private String email;
    private String adress;

    @Lob
    @JsonIgnore
    private Blob image;

    public Bussiness(){}

    public Bussiness(String name2, String userName2, String userSurname2, String location2, String email2,
            String adress2) {
                name = name2;
                userName = userName2;
                userSurname = userSurname2;
                email = email2;
                location = location2;
                adress = adress2;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getAdress() {
        return adress;
    }
    public String getBussinessName() {
        return bussinessName;
    }
    public void setBussinessName(String bussinessName) {
        this.bussinessName = bussinessName;
    }
    public String getSurname() {
        return userSurname;
    }
    public void setSurname(String surname) {
        this.userSurname = surname;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setAdress(String adress) {
        this.adress = adress;
    }
    
}
