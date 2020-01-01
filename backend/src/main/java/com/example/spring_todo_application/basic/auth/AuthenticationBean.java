package com.example.spring_todo_application.basic.auth;

public class AuthenticationBean {

	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public AuthenticationBean(String message) {
		this.message=message;
	}
	
}
