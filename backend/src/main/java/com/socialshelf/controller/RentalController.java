package com.socialshelf.controller;

import com.socialshelf.dto.RentalRequest;
import com.socialshelf.model.Rental;
import com.socialshelf.service.RentalService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/books/rent")
@CrossOrigin(origins = "*")
public class RentalController {

    private final RentalService rentalService;

    @Autowired
    public RentalController(RentalService rentalService) {
        this.rentalService = rentalService;
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> rentBook(@Valid @RequestBody RentalRequest request) {
        Map<String, Object> response = new HashMap<>();
        try {
            Rental rental = rentalService.rentBook(request);
            response.put("success", true);
            response.put("message", "Book reserved successfully!");
            response.put("rental", rental);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException e) {
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (IllegalStateException e) {
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

    @PostMapping("/return/{rentalId}")
    public ResponseEntity<Map<String, Object>> returnBook(@PathVariable Long rentalId) {
        Map<String, Object> response = new HashMap<>();
        try {
            Rental rental = rentalService.returnBook(rentalId);
            response.put("success", true);
            response.put("message", "Book returned successfully!");
            response.put("rental", rental);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

    @GetMapping("/user")
    public ResponseEntity<List<Rental>> getUserRentals(@RequestParam String email) {
        return ResponseEntity.ok(rentalService.getUserRentals(email));
    }
}
