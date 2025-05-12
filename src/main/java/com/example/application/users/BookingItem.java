package com.example.application.users;


import com.example.application.delegations.CarItem;
import com.example.application.delegations.DelegationItem;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbAttribute;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbBean;

@DynamoDbBean
public class BookingItem extends UserTableItem {
    private String status;
    private String startDate;
    private String endDate;
    private double totalToPayment;
    private String statusPayment;
    private String statusBooking;
    private CarItem car;
    private DelegationItem pickUpDelegation;
    private DelegationItem deliveryDelegation;

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
    public CarItem getCar() {
        return car;
    }

    public void setCar(CarItem carItem) {
        this.car = carItem;
    }

    @DynamoDbAttribute("pickUpDelegation")
    public DelegationItem getPickUpDelegation() {
        return pickUpDelegation;
    }

    public void setPickUpDelegation(DelegationItem pickUpDelegation) {
        this.pickUpDelegation = pickUpDelegation;
    }

    @DynamoDbAttribute("deliveryDelegation")
    public DelegationItem getDeliveryDelegation() {
        return deliveryDelegation;
    }

    public void setDeliverDelegation(DelegationItem deliveryDelegation) {
        this.deliveryDelegation = deliveryDelegation;
    }
}
