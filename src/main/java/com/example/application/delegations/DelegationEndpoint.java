package com.example.application.delegations;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.Endpoint;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class DelegationEndpoint {

    private final DelegationRepository delegationRepository;

    @Autowired
    public DelegationEndpoint(DelegationRepository delegationRepository) {
        this.delegationRepository = delegationRepository;
    }

    // Save Delegation
    public void saveDelegation(DelegationItem delegationItem) {
        delegationRepository.save(delegationItem);
    }

    // Save Car
    public void saveCar(CarItem car) {
        delegationRepository.save(car);
    }

    // Get Delegation by keys
    public DelegationItem getDelegation(String delegationId, String operation) {
        return delegationRepository.get(delegationId, operation, DelegationItem.class);
    }

    // Get Car by keys
    public CarItem getCar(String id, String operation) {
        return delegationRepository.get(id, operation, CarItem.class);
    }

    // List Delegations by delegationId
    public List<DelegationItem> listDelegationsById(String delegationId) {
        return delegationRepository.listByPartitionKey(delegationId, DelegationItem.class);
    }

    // List Cars by id (partition key)
    public List<CarItem> listCarsById(String id) {
        return delegationRepository.listByPartitionKey(id, CarItem.class);
    }
}