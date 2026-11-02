package com.socialshelf.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class DonationRequest {

    @NotBlank(message = "Name is required")
    private String name;

    @Email
    @NotBlank(message = "Valid email is required")
    private String email;

    @NotBlank(message = "Book title is required")
    private String title;

    @NotBlank(message = "Author is required")
    private String author;

    private String condition;

    private String message;
}
