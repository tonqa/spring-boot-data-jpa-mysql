package com.bezkoder.spring.security;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
@EnableWebSecurity // (1)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter { // (1)

  @Override
  protected void configure(HttpSecurity http) throws Exception {  // (2)
      http
      	.csrf()
      		//.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()).and()
      		.disable()
      	.cors().configurationSource(request -> {
      		CorsConfiguration cors = new CorsConfiguration();
            cors.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
            cors.setAllowedMethods(Arrays.asList("GET","POST", "PUT", "DELETE", "OPTIONS"));
            cors.setAllowedHeaders(Arrays.asList("*"));
            return cors;
          	})
      		.and()
        .authorizeRequests()
          .antMatchers("/upload", "/files/*").authenticated()
          //.antMatchers("/api/*").hasAuthority("ROLE_USER")
          .anyRequest().permitAll() // (4)
          .and()
       .formLogin() // (5)
         .permitAll()
         .and()
      .logout() // (6)
        .permitAll()
        .and()
      .httpBasic(); // (7)
  }
  
//	@Bean
//	@Override
//	public UserDetailsService userDetailsService() {
//		UserDetails user =
//			 User.withDefaultPasswordEncoder()
//				.username("user")
//				.password("password")
//				.roles("USER")
//				.build();
//
//		return new InMemoryUserDetailsManager(user);
//	}
	
    
//	@Override
//	public void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.inMemoryAuthentication()
//			.withUser("user")
//			.password("{bcrypt}$2y$12$Few517JLmo1AjVvRfoMWMezBajr6kAo3zKYITdqZNHzh/k4F.CEHG")
//			.roles("USER");
//	}
  
  @Bean
  @Override
  public UserDetailsService userDetailsService() {
	  return new UserDetailsService() {

		@Override
		public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
			if (username.equals("user")) {
				return new User("user", 
						"$2y$12$Few517JLmo1AjVvRfoMWMezBajr6kAo3zKYITdqZNHzh/k4F.CEHG", 
						Arrays.asList(new SimpleGrantedAuthority("ROLE_USER")));
			}
			return null;
		}
		  
	  };
  }
  
  @Bean
  public BCryptPasswordEncoder bCryptPasswordEncoder() {
      return new BCryptPasswordEncoder();
  }
  
}