package com.bethel.Bethel.To;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Emails {
	private String to;
	private String from;
	private String subject;
	private String message;

}
