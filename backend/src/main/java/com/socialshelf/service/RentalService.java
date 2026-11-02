package com.socialshelf.service;

import com.socialshelf.dto.RentalRequest;
import com.socialshelf.model.Book;
import com.socialshelf.model.Rental;
import com.socialshelf.repository.BookRepository;
import com.socialshelf.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RentalService {

    private final RentalRepository rentalRepository;
    private final BookRepository bookRepository;

    @Autowired
    public RentalService(RentalRepository rentalRepository, BookRepository bookRepository) {
        this.rentalRepository = rentalRepository;
        this.bookRepository = bookRepository;
    }

    @Transactional
    public Rental rentBook(RentalRequest request) {
        Book book = bookRepository.findByBookId(request.getBookId())
                .orElseThrow(() -> new IllegalArgumentException("Book not found with ID: " + request.getBookId()));

        if (book.getStock() <= 0) {
            throw new IllegalStateException("Book is currently out of stock.");
        }

        // Decrement stock
        book.setStock(book.getStock() - 1);
        bookRepository.save(book);

        // Create rental record (14 days return policy)
        Rental rental = Rental.builder()
                .bookId(book.getBookId())
                .bookTitle(book.getTitle())
                .userEmail(request.getUserEmail())
                .userName(request.getUserName() != null ? request.getUserName() : "Reader")
                .rentedAt(LocalDateTime.now())
                .dueDate(LocalDateTime.now().plusDays(14))
                .status(Rental.RentalStatus.ACTIVE)
                .build();

        return rentalRepository.save(rental);
    }

    @Transactional
    public Rental returnBook(Long rentalId) {
        Rental rental = rentalRepository.findById(rentalId)
                .orElseThrow(() -> new IllegalArgumentException("Rental record not found with ID: " + rentalId));

        if (rental.getStatus() == Rental.RentalStatus.RETURNED) {
            return rental;
        }

        rental.setStatus(Rental.RentalStatus.RETURNED);
        rental.setReturnedAt(LocalDateTime.now());

        // Increment stock back
        bookRepository.findByBookId(rental.getBookId()).ifPresent(book -> {
            book.setStock(book.getStock() + 1);
            bookRepository.save(book);
        });

        return rentalRepository.save(rental);
    }

    public List<Rental> getUserRentals(String userEmail) {
        return rentalRepository.findByUserEmail(userEmail);
    }
}
