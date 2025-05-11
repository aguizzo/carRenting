package com.example.application.users;

public interface UserRepository {
    <T extends UserTableItem> void save(T item);
}