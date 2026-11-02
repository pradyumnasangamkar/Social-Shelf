package com.socialshelf.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RentalRequest {

    @NotBlank(message = "Book ID is required")
    private String bookId;

    @NotBlank(message = "User email is required")
    private String userEmail;

    private String userName;
}
