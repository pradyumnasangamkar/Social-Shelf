package com.socialshelf.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "donations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String donorName;

    @Column(nullable = false)
    private String donorEmail;

    @Column(nullable = false)
    private String bookTitle;

    @Column(nullable = false)
    private String author;

    private String bookCondition; // e.g. "Like New", "Good", "Fair"

    @Column(length = 1000)
    private String message;

    @Column(nullable = false)
    private LocalDateTime submittedAt;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private DonationStatus status;

    public enum DonationStatus {
        PENDING,
        ACCEPTED,
        REJECTED
    }
}
