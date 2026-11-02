package com.socialshelf.controller;

import com.socialshelf.dto.DonationRequest;
import com.socialshelf.model.Donation;
import com.socialshelf.repository.DonationRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/d/donate")
@CrossOrigin(origins = "*")
public class DonationController {

    private final DonationRepository donationRepository;

    @Autowired
    public DonationController(DonationRepository donationRepository) {
        this.donationRepository = donationRepository;
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> submitDonation(@Valid @RequestBody DonationRequest request) {
        Donation donation = Donation.builder()
                .donorName(request.getName())
                .donorEmail(request.getEmail())
                .bookTitle(request.getTitle())
                .author(request.getAuthor())
                .bookCondition(request.getCondition() != null ? request.getCondition() : "Good")
                .message(request.getMessage())
                .submittedAt(LocalDateTime.now())
                .status(Donation.DonationStatus.PENDING)
                .build();

        Donation saved = donationRepository.save(donation);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Thank you for donating to Social Shelf!");
        response.put("donation", saved);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<List<Donation>> getAllDonations() {
        return ResponseEntity.ok(donationRepository.findAll());
    }
}
