package com.socialshelf.util;

import com.socialshelf.model.Book;
import com.socialshelf.model.Event;
import com.socialshelf.repository.BookRepository;
import com.socialshelf.repository.EventRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {

    private final BookRepository bookRepository;
    private final EventRepository eventRepository;

    public DataInitializer(BookRepository bookRepository, EventRepository eventRepository) {
        this.bookRepository = bookRepository;
        this.eventRepository = eventRepository;
    }

    @Override
    public void run(String... args) {
        if (bookRepository.count() == 0) {
            bookRepository.saveAll(Arrays.asList(
                Book.builder()
                    .bookId("b1")
                    .title("Atomic Habits")
                    .author("James Clear")
                    .category("Self-Help")
                    .description("An easy & proven way to build good habits and break bad ones.")
                    .imageUrl("https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600")
                    .stock(5)
                    .rating(4.9)
                    .reviewsCount(142)
                    .build(),

                Book.builder()
                    .bookId("b2")
                    .title("Clean Code")
                    .author("Robert C. Martin")
                    .category("Software Engineering")
                    .description("A handbook of agile software craftsmanship and clean architecture.")
                    .imageUrl("https://images.unsplash.com/photo-1532012164546-f432f2e37b73?auto=format&fit=crop&q=80&w=600")
                    .stock(3)
                    .rating(4.8)
                    .reviewsCount(98)
                    .build(),

                Book.builder()
                    .bookId("b3")
                    .title("The Psychology of Money")
                    .author("Morgan Housel")
                    .category("Finance")
                    .description("Timeless lessons on wealth, greed, and happiness across financial markets.")
                    .imageUrl("https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&q=80&w=600")
                    .stock(4)
                    .rating(4.9)
                    .reviewsCount(210)
                    .build(),

                Book.builder()
                    .bookId("b4")
                    .title("Deep Work")
                    .author("Cal Newport")
                    .category("Productivity")
                    .description("Rules for focused success in a distracted world.")
                    .imageUrl("https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600")
                    .stock(2)
                    .rating(4.8)
                    .reviewsCount(86)
                    .build(),

                Book.builder()
                    .bookId("b5")
                    .title("The Pragmatic Programmer")
                    .author("Andrew Hunt & David Thomas")
                    .category("Software Engineering")
                    .description("Your journey to mastery in software development.")
                    .imageUrl("https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600")
                    .stock(4)
                    .rating(4.9)
                    .reviewsCount(115)
                    .build(),

                Book.builder()
                    .bookId("b6")
                    .title("Thinking, Fast and Slow")
                    .author("Daniel Kahneman")
                    .category("Psychology")
                    .description("Explores the two systems that drive how we think and make decisions.")
                    .imageUrl("https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=600")
                    .stock(3)
                    .rating(4.7)
                    .reviewsCount(78)
                    .build()
            ));
            System.out.println("✅ Sample book catalog seeded into H2 Database.");
        }

        if (eventRepository.count() == 0) {
            eventRepository.saveAll(Arrays.asList(
                Event.builder()
                    .title("Annual Campus Literary Festival")
                    .description("Join bestselling authors, student writers, and book critics for an inspiring day of panel talks.")
                    .date("November 15, 2026")
                    .time("10:00 AM - 4:00 PM")
                    .location("Main Auditorium, Campus Center")
                    .imageUrl("https://images.unsplash.com/photo-1540224485413-4c7939106f3a?auto=format&fit=crop&q=80&w=800")
                    .capacity(250)
                    .category("Festival")
                    .build(),

                Event.builder()
                    .title("Deep Work Reading & Focus Circle")
                    .description("A collaborative 2-hour reading sprint followed by discussion on building focused productivity habits.")
                    .date("November 22, 2026")
                    .time("3:00 PM - 5:30 PM")
                    .location("Social Shelf Library Hub (Room 304)")
                    .imageUrl("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800")
                    .capacity(40)
                    .category("Book Club")
                    .build()
            ));
            System.out.println("✅ Community events seeded into H2 Database.");
        }
    }
}
