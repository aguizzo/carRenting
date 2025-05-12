package com.example.application.users;


import com.example.application.delegations.Car;
import com.example.application.delegations.Delegation;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbAttribute;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbBean;

@DynamoDbBean
public class Booking extends UserTableItem {
    private String status;
    private String startDate;
    private String endDate;
    private double totalToPayment;
    private String statusPayment;
    private String statusBooking;
    private Car car;
    private Delegation pickUpDelegation;
    private Delegation deliveryDelegation;

    @DynamoDbAttribute("status")
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @DynamoDbAttribute("startDate")
    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    @DynamoDbAttribute("endDate")
    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    @DynamoDbAttribute("totalToPayment")
    public double getTotalToPayment() {
        return totalToPayment;
    }

    public void setTotalToPayment(double totalToPayment) {
        this.totalToPayment = totalToPayment;
    }

    @DynamoDbAttribute("statusPayment")
    public String getStatusPayment() {
        return statusPayment;
    }

    public void setStatusPayment(String statusPayment) {
        this.statusPayment = statusPayment;
    }

    @DynamoDbAttribute("statusBooking")
    public String getStatusBooking() {
        return statusBooking;
    }

    public void setStatusBooking(String statusBooking) {
        this.statusBooking = statusBooking;
    }

    @DynamoDbAttribute("car")
    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    @DynamoDbAttribute("pickUpDelegation")
    public Delegation getPickUpDelegation() {
        return pickUpDelegation;
    }

    public void setPickUpDelegation(Delegation pickUpDelegation) {
        this.pickUpDelegation = pickUpDelegation;
    }

    @DynamoDbAttribute("deliveryDelegation")
    public Delegation getDeliveryDelegation() {
        return deliveryDelegation;
    }

    public void setDeliverDelegation(Delegation deliveryDelegation) {
        this.deliveryDelegation = deliveryDelegation;
    }
}
