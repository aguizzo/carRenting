package com.example.application.users;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.Endpoint;
import org.springframework.beans.factory.annotation.Autowired;

@Endpoint
@AnonymousAllowed
public class UserEndpoint {

    private final UserRepository userRepository;

    @Autowired
    public UserEndpoint(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void saveUser(User user) {
        System.out.println("UserEndpoint.saveUser: " + user);
        userRepository.save(user);
    }

    public void saveBooking(Booking booking) {
        System.out.println("UserEndpoint.saveBooking: " + booking);
        userRepository.save(booking);
    }
}