package com.bezkoder.spring.security.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

	@GetMapping("/user")
	public ResponseEntity<UserDetails> currentUser(Authentication authentication) {
		
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			UserDetails userDetails = (UserDetails) authentication.getPrincipal();
			return new ResponseEntity<>(userDetails, HttpStatus.OK);
		}
		
		return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);

	}
	
}
