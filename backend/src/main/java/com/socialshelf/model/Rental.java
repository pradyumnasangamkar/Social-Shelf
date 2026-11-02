package com.socialshelf.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "rentals")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Rental {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String bookId;

    @Column(nullable = false)
    private String bookTitle;

    @Column(nullable = false)
    private String userEmail;

    private String userName;

    @Column(nullable = false)
    private LocalDateTime rentedAt;

    @Column(nullable = false)
    private LocalDateTime dueDate;

    private LocalDateTime returnedAt;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RentalStatus status;

    public enum RentalStatus {
        ACTIVE,
        RETURNED,
        OVERDUE
    }
}
