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

    public void saveUser(UserItem userItem) {
        System.out.println("UserEndpoint.saveUser: " + userItem);
        userRepository.save(userItem);
    }

    public void saveBooking(BookingItem bookingItem) {
        System.out.println("UserEndpoint.saveBooking: " + bookingItem);
        userRepository.save(bookingItem);
    }
}