package com.socialshelf;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SocialShelfApplication {

    public static void main(String[] args) {
        SpringApplication.run(SocialShelfApplication.class, args);
        System.out.println("==================================================");
        System.out.println("  📚 Social Shelf Spring Boot Backend Started!    ");
        System.out.println("  🌐 REST API:    http://localhost:8080/api       ");
        System.out.println("  💾 H2 Console:  http://localhost:8080/h2-console ");
        System.out.println("==================================================");
    }
}
