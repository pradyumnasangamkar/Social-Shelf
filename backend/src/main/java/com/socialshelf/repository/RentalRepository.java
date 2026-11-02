package com.socialshelf.repository;

import com.socialshelf.model.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RentalRepository extends JpaRepository<Rental, Long> {

    List<Rental> findByUserEmail(String userEmail);

    List<Rental> findByStatus(Rental.RentalStatus status);
}
